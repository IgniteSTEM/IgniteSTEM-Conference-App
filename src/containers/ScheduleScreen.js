import React from 'react';
import { createMaterialTopTabNavigator } from 'react-navigation';
import { connect } from 'react-redux';
import { View, Text } from 'react-native';
import EventList from '../components/EventList';
import { toggleEvent } from '../actions/schedule';
import Heading from '../components/Heading';
import { Colors } from '../theme';

class GeneralScheduleScreen extends React.Component {
	render() {
		const { events, selectedEvents, toggleEvent } = this.props;

		return (
			<View style={{ flex: 1, alignItems: 'center',backgroundColor: '#FFF' }}>
				<Heading>Schedule</Heading>
				<EventList
					events={events}
					selectable={true}
					selectedEvents={selectedEvents}
					onEventSelect={toggleEvent} />
			</View>
		);
	}
}

class PersonalScheduleScreen extends React.Component {
	render() {
		const { selectedEvents } = this.props;

		return (
			<View style={{ flex: 1, alignItems: 'center', backgroundColor: '#FFF' }}>
				<Heading>My Schedule</Heading>
				{ 
					selectedEvents.length > 0 ?
						<EventList events={selectedEvents} selectable={false} /> :
						<Text>Nothing here yet</Text>
				}
			</View>
		);
	}
}

const mapStateToProps = ({ schedule }) => schedule;

const mapDispatchToProps = (dispatch, ownProps) => ({
	toggleEvent: (event) => {
		dispatch(toggleEvent(event));
	}
});

export default createMaterialTopTabNavigator({
	Schedule: connect(mapStateToProps, mapDispatchToProps)(GeneralScheduleScreen),
	'My Schedule': connect(mapStateToProps)(PersonalScheduleScreen)
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