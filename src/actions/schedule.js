import { EVENT_REGISTER, EVENT_DEREGISTER, EVENT_LIST } from './endpoints';

export const RECEIVE_EVENTS = 'RECEIVE_EVENTS';
export const RECEIVE_USER_EVENTS = 'RECEIVE_USER_EVENTS';

const receiveEvents = (events) => ({
	type: RECEIVE_EVENTS,
	events
});

const receiveUserEvents = (events) => ({
	type: RECEIVE_USER_EVENTS,
	events
});

export const fetchEvents = () =>
	(dispatch, getState) => {
		fetch(EVENT_LIST)
			.then(res => {
				if (res.ok) {
					res.json()
						.then(events => dispatch(receiveEvents(events)));
				}
			})
			.catch(err => console.error(err));

		fetch(`${EVENT_LIST}?userId=${getState().user._id}`)
			.then(res => {
				if (res.ok) {
					res.json()
						.then(events => dispatch(receiveUserEvents(events)));
				}
			})
			.catch(err => console.error(err));
	};

export const registerEvent = (event) => 
	(dispatch, getState) => {
		const eventId = event._id;
		const userId = getState().user._id;

		fetch(EVENT_REGISTER, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				eventId, userId
			})
		})
			.then(res => {
				if (res.ok) {
					dispatch(fetchEvents());
				} else {
					res.json()
						.then(({ error }) => console.error(error));
				}
			}).catch(err => console.error(err));
	};

export const deregisterEvent = (event) =>
	(dispatch, getState) => {
		const eventId = event._id;
		const userId = getState().user._id;

		fetch(EVENT_DEREGISTER, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				eventId, userId
			})
		})
			.then(res => {
				if (res.ok) {
					dispatch(fetchEvents());
				} else {
					res.json()
						.then(({ error }) => console.error(error));
				}
			}).catch(err => console.error(err));
	};

export const toggleEvent = (event) => (
	(dispatch, getState) => {
		const { userEvents } = getState().schedule;

		if (userEvents.some((userEvent) => event._id === userEvent._id)) {
			dispatch(deregisterEvent(event));
		} else {
			dispatch(registerEvent(event));
		}
	}
);