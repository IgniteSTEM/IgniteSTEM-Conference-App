import React from 'react';
import {ActivityIndicator, View, Text} from 'react-native';
import {createBottomTabNavigator} from 'react-navigation';

class GeneralScheduleScreen extends React.Component {
    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
				<Text>General Schedule Screen</Text>
            </View>
        );
    }
}

class PersonalScheduleScreen extends React.Component {
    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
				<Text>Personal Schedule Screen</Text>
            </View>
        );
    }
}

export default createBottomTabNavigator({
	Schedule: GeneralScheduleScreen,
	'My Schedule': PersonalScheduleScreen
});