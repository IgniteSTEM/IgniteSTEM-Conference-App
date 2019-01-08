import React from 'react';
import { createMaterialTopTabNavigator } from 'react-navigation';
import { connect } from 'react-redux';
import { View } from 'react-native';
import EventList from '../components/EventList';
import { toggleEvent } from '../actions/schedule';

class GeneralScheduleScreen extends React.Component {
    render() {
        const { events, selectedEvents, toggleEvent } = this.props;

        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <EventList 
                    events={events} 
                    selectable={true}
                    selectedEvents={selectedEvents} 
                    onSelect={toggleEvent} />
            </View>
        );
    }
}

class PersonalScheduleScreen extends React.Component {
    render() {
        const { selectedEvents } = this.props;

        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <EventList events={selectedEvents} selectable={false} />
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
},
{swipeEnabled: true,
animationEnabled: true,
tabBarPosition: 'bottom'});