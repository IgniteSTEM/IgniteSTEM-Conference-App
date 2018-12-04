export const REMOVE_SELECTED_EVENT = 'REMOVE_SELECTED_EVENT';
export const ADD_SELECTED_EVENT = 'ADD_SELECTED_EVENT';

export const removeSelectedEvent = (event) => ({
	type: REMOVE_SELECTED_EVENT,
	event
});

export const addSelectedEvent = (event) => ({
	type: ADD_SELECTED_EVENT,
	event
});

export const toggleEvent = (event) => (
	(dispatch, getState) => {
		const { selectedEvents } = getState().schedule;

		if (selectedEvents.indexOf(event) === -1) {
			dispatch(addSelectedEvent(event));
		} else {
			dispatch(removeSelectedEvent(event));
		}
	}
);