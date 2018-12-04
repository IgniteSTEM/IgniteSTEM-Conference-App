import React from 'react';
import { createBottomTabNavigator } from 'react-navigation';
import { connect } from 'react-redux';
import { View } from 'react-native';
import EventList from '../components/EventList';

class GeneralScheduleScreen extends React.Component {
    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <EventList events={this.props.events} />
            </View>
        );
    }
}

class PersonalScheduleScreen extends React.Component {
    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <EventList events={this.props.events} />
            </View>
        );
    }
}

const mapStateToProps = ({ schedule }) => ({
    events: schedule.events
});

export default createBottomTabNavigator({
    Schedule: connect(mapStateToProps)(GeneralScheduleScreen),
    'My Schedule': connect(mapStateToProps)(PersonalScheduleScreen)
});