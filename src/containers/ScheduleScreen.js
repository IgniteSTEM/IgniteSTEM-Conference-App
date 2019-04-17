import React from 'react';
import { createMaterialTopTabNavigator } from 'react-navigation';
import { connect } from 'react-redux';
import { View, Text } from 'react-native';
import EventList from '../components/EventList';
import { toggleEvent, fetchEvents } from '../actions/schedule';
import Heading from '../components/Heading';
import { Colors } from '../theme';

class GeneralScheduleScreen extends React.Component {
	render() {
		const { events, userEvents, toggleEvent, refreshEvents } = this.props;

		return (
			<View style={{ flex: 1, alignItems: 'center' }}>
				<Heading>Schedule</Heading>
				<EventList
					events={events}
					selectable={true}
					selectedEvents={userEvents}
					onEventSelect={toggleEvent}
					refresh={refreshEvents} />
			</View>
		);
	}
}

class UserScheduleScreen extends React.Component {
	render() {
		const { userEvents, refreshEvents } = this.props;

		return (
			<View style={{ flex: 1, alignItems: 'center' }}>
				<Heading>My Schedule</Heading>
				{ 
					userEvents.length > 0 ?
						<EventList 
							events={userEvents} 
							selectable={false}
							refresh={refreshEvents} /> :
						<Text>Add events from the other page</Text>
				}
			</View>
		);
	}
}

const mapStateToProps = ({ schedule }) => schedule;

const mapDispatchToProps = (dispatch, ownProps) => ({
	toggleEvent: (event) => {
		dispatch(toggleEvent(event));
	},
	refreshEvents: () => {
		dispatch(fetchEvents());
	}
});

export default createMaterialTopTabNavigator({
	Schedule: connect(mapStateToProps, mapDispatchToProps)(GeneralScheduleScreen),
	'My Schedule': connect(mapStateToProps, mapDispatchToProps)(UserScheduleScreen)
}, {
	swipeEnabled: true,
	animationEnabled: true,
	tabBarPosition: 'bottom',
	tabBarOptions: {
		tabStyle: {
			backgroundColor: Colors.accentColor
		}
	}
});