import React from 'react';
import {View, Text} from 'react-native';
import { createBottomTabNavigator } from 'react-navigation';

// TabNavigator screens
import TabA from './TabA'
import TabB from './TabB'
import TabC from './TabC'

class SettingsScreen extends React.Component {
	render() {
		return (
			<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
				<Text>TabScreen!</Text>
			</View>
		);
    }
}

export default createBottomTabNavigator({
	TabA: { screen: TabA },
  TabB: { screen: TabB },
  TabC: { screen: TabC },
});
