import React from 'react';
import { createDrawerNavigator, createStackNavigator } from 'react-navigation';
import { View, TouchableOpacity } from 'react-native';
import { Provider } from 'react-redux';
import { FontAwesome } from '@expo/vector-icons';
import { Notifications } from 'expo';

import HomeScreen from './src/components/HomeScreen';
import SettingsScreen from './src/components/SettingsScreen';
import EventDetailScreen from './src/components/EventDetailScreen';
import ScheduleScreen from './src/containers/ScheduleScreen';
import LoadingScreen from './src/components/LoadingScreen';
import configureStore from './src/configureStore';
import registerForPushNotificationsAsync from './src/registerForPushNotificationsAsync';

const MenuButton = (props) => {
	return (
		<View>
			<TouchableOpacity onPress={() => props.navigation.toggleDrawer()} style={{ marginLeft: 10 }}>
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
			Schedule: ScheduleScreen
		}),
		navigationOptions: ({ navigation }) => ({
			headerLeft: <MenuButton navigation={navigation} />,
			headerStyle: {
        		backgroundColor: '#f4511e'
      		},
		})
	},
	'Event Detail': EventDetailScreen,
});

const store = configureStore();

export default class App extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			loading: true
		};
	}

	componentDidMount() {
		registerForPushNotificationsAsync();
	
		// Handle notifications that are received or selected while the app
		// is open. If the app was closed and then opened by tapping the
		// notification (rather than just tapping the app icon to open it),
		// this function will fire on the next tick after the app starts
		// with the notification data.
		this._notificationSubscription = Notifications.addListener(this._handleNotification);
	}
	
	_handleNotification = (notification) => {
		// TODO: handle special notifications
	};

	componentWillMount() {
		setTimeout(() => this.setState({
			loading: false
		}), 1000);
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
