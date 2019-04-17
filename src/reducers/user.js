import { RECEIVE_USER, RECEIVE_USER_EXISTS } from '../actions/user';

const initialState = {
	_id: '',
	name: '',
	exists: true
};

const user = (state = initialState, action) => {
	switch (action.type) {
		case RECEIVE_USER:
			return {
				...state,
				_id: action._id,
				name: action.name,
				exists: true
			};
		case RECEIVE_USER_EXISTS:
			return {
				...state,
				exists: action.exists
			};
		default:
			return state;
	}
};

export default user;