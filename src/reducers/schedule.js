import { REMOVE_SELECTED_EVENT, ADD_SELECTED_EVENT } from '../actions/schedule';

const initialState = {
	events:  [
		{
			"event": "Registration & Breakfast",
			"time": "9:00AM",
			"speaker": ""
		},
		{
			"event": "Opening Address",
			"time": "9:30AM",
			"speaker": "Austin & Kevin"
		},
		{
			"event": "Keynote 1",
			"time": "9:45AM",
			"speaker": "John Katz"
		},
		{
			"event": "Keynote 2",
			"time": "10:15AM",
			"speaker": "Jason Park"
		},
		{
			"event": "Break",
			"time": "10:45AM",
			"speaker": ""
		},
		{
			"event": "Makerspace Workshop",
			"time": "11:00AM",
			"speaker": "Godwyn Morris"
		},
		{
			"event": "Lunch",
			"time": "12:00PM",
			"speaker": ""
		},
		{
			"event": "Design Thinking Workshop",
			"time": "12:45PM",
			"speaker": "Rage Steinhauser"
		},
		{
			"event": "Keynote 3",
			"time": "1:45PM",
			"speaker": "Rafe Steinhauser"
		},
		{
			"event": "Break",
			"time": "2:15PM",
			"speaker": ""
		},
		{
			"event": "Keynote 4",
			"time": "2:30PM",
			"speaker": "LaMae DeJongh"
		},
		{
			"event": "Closing Remarks",
			"time": "3:00PM",
			"speaker": "Austin & Kevin"
		},
		{
			"event": "Hack in a Box Distribution",
			"time": "3:15PM",
			"speaker": ""
		}
	],
	selectedEvents: []
};
  
const schedule = (state = initialState, action) => {
	switch (action.type) {
	case REMOVE_SELECTED_EVENT:
		return {
			...state,
			selectedEvents: state.selectedEvents.filter((event) => event !== action.event)
		};
	case ADD_SELECTED_EVENT:
		return {
			...state,
			selectedEvents: state.events.filter((event) => (state.selectedEvents.indexOf(event) !== -1) || event === action.event)
		};
	default:
		return state;
	}
};

export default schedule;