import { REMOVE_USER_EVENT, ADD_USER_EVENT, RECEIVE_EVENTS, RECEIVE_USER_EVENTS } from '../actions/schedule';

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
			}
		case REMOVE_USER_EVENT:
			return {
				...state,
				userEvents: state.userEvents.filter((event) => event._id !== action.event._id)
			};
		case ADD_USER_EVENT:
			return {
				...state,
				userEvents: [...state.userEvents, action.event]
			};
		default:
			return state;
	}
};

export default schedule;