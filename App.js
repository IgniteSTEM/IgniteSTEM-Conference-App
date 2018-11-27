import React from 'react';
import { createDrawerNavigator, createStackNavigator } from 'react-navigation';
import { View, Text, TouchableOpacity } from 'react-native';
import { Provider } from 'react-redux';
import { FontAwesome } from '@expo/vector-icons';

import HomeScreen from './src/components/HomeScreen';
import SettingsScreen from './src/components/SettingsScreen';
import TabScreen from './src/components/TabScreen';
import GetStuff from './src/components/GetStuffFromServer';
import ScheduleScreen from './src/containers/ScheduleScreen';
import LoadingScreen from './src/components/LoadingScreen';
import configureStore from './src/configureStore';

const MenuButton = (props) => {
	return (
		<View>
			<TouchableOpacity onPress={() => props.navigation.toggleDrawer()} style={{marginLeft: 10}}>
				<FontAwesome name="bars" size={32} color="black" />
			</TouchableOpacity>
		</View>
	);
};

const Root = createStackNavigator({
	Main: {
		screen: createDrawerNavigator({
			Home: HomeScreen,
			Settings: SettingsScreen,
			TabScreen: TabScreen,
			GetStuff: GetStuff, 

			Schedule: ScheduleScreen
		}),
		navigationOptions: ({ navigation }) => (
			{ headerLeft: <MenuButton navigation={navigation} /> }
		)
	}
});

const store = configureStore();

export default class App extends React.Component {
	constructor (props) {
		super(props);

		this.state = {
			loading: true
		};
	}

	componentWillMount() {
		setTimeout(() => this.setState({
			loading: false
		}), 3000);
	}

	render() {
		if (this.state.loading) {
			return <LoadingScreen />;
		} else {
			return (
				<Provider store={store}>
					<Root />
				</Provider>
			);
		}
	}
}
