// React Stuff
import React from 'react';
import { createDrawerNavigator, createStackNavigator } from 'react-navigation';
import { View, Text, TouchableOpacity } from 'react-native';

// Screens
import HomeScreen from './src/HomeScreen';
import SettingsScreen from './src/SettingsScreen';
import TabScreen from './src/TabScreen';
import GetStuff from './src/GetStuffFromServer';
import ScheduleScreen from './src/ScheduleScreen';
import { FontAwesome } from '@expo/vector-icons';
import { getIconType } from 'react-native-elements';

// The App
import LoadingScreen from './src/LoadingScreen';

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
			return <Root />;
		}
	}
}
