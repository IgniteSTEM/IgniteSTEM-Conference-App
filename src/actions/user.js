import { AsyncStorage } from 'react-native';
import { Permissions, Notifications } from 'expo';
import { USER_ADD } from './endpoints';
import { fetchEvents } from '../actions/schedule';

const USER_ID_KEY = '@userId';
const USER_NAME_KEY = '@userName';

export const RECEIVE_USER_EXISTS = 'RECEIVE_USER_EXISTS';
export const RECEIVE_USER = 'RECEIVE_USER';

const receiveUserExists = (exists) => ({
	type: RECEIVE_USER_EXISTS,
	exists
});

const receiveUser = (name, _id) => ({
	type: RECEIVE_USER,
	name,
	_id
});

const saveAndReceiveUser = (name, _id) => 
	dispatch => {
		console.log(`save(${name}, ${_id})`);
		const idPair = [USER_ID_KEY, _id];
		const namePair = [USER_NAME_KEY, name];
		AsyncStorage.multiSet([idPair, namePair])
			.then(() => dispatch(receiveUser(name, _id)))
			.catch((e) => console.error(e));
		// TODO: this is a bit of a hack
		setTimeout(() => dispatch(fetchEvents()), 500);
	};

const addUserWithNotifs = (name, pushToken) =>
	dispatch => {
		fetch(USER_ADD, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				name, pushToken
			})
		})
			.then(res => {
				if (res.ok) {
					res.json()
						.then(({ _id }) => dispatch(saveAndReceiveUser(name, _id)));
				} else {
					res.json()
						.then(({ error }) => console.error(error));
				}
			}).catch(err => console.error(err));
	};

const processNotifStatus = (name, finalStatus) =>
	dispatch => {
		if (finalStatus !== 'granted') {
			// Stop here if the user did not grant permissions
			dispatch(addUserWithNotifs(name, ''));
		} else {
			// Get the token that uniquely identifies this device
			Notifications.getExpoPushTokenAsync()
				.then((token) => dispatch(addUserWithNotifs(name, token)))
				.catch((e) => console.error(e));
		}
	}

const registerNotifs = (name) => 
	dispatch => {
		Permissions.getAsync(Permissions.NOTIFICATIONS).then(({ status }) => {
			// only ask if permissions have not already been determined, because
			// iOS won't necessarily prompt the user a second time.
			if (status !== 'granted') {
				// Android remote notification permissions are granted during the app
				// install, so this will only ask on iOS
				Permissions.askAsync(Permissions.NOTIFICATIONS)
					.then(({ finalStatus }) => dispatch(processNotifStatus(name, finalStatus)))
					.catch((e) => console.error(e));
			} else {
				dispatch(processNotifStatus(name, status))
			}
		});
	};

export const addUser = (name) =>
	dispatch => {
		dispatch(registerNotifs(name));
	};

export const loadUserIfExists = () =>
	dispatch => {
		AsyncStorage.multiGet([USER_ID_KEY, USER_NAME_KEY])
			.then((values) => {
				const userId = values[0][1];
				const userName = values[1][1];
				if (userId == null) {
					// we need to create a new user
					dispatch(receiveUserExists(false));
				} else {
					// the user already exists; go straight to querying his/her data
					dispatch(receiveUser(userName, userId));
				}
			})
			.catch((e) => console.error(e));
	};