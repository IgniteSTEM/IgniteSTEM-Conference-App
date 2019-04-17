import { RECEIVE_EVENTS, RECEIVE_USER_EVENTS } from '../actions/schedule';

const initialState = {
	events: [],
	userEvents: []
};

const schedule = (state = initialState, action) => {
	switch (action.type) {
		case RECEIVE_EVENTS:
			return {
				...state,
				events: action.events
			};
		case RECEIVE_USER_EVENTS:
			return {
				...state,
				userEvents: action.events
			};
		default:
			return state;
	}
};

export default schedule;