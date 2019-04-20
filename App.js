import React from 'react';
import { createDrawerNavigator, createStackNavigator, createAppContainer } from 'react-navigation';
import { View, TouchableOpacity } from 'react-native';
import { Provider } from 'react-redux';
import { FontAwesome } from '@expo/vector-icons';

import HomeScreen from './src/containers/HomeScreen';
import SettingsScreen from './src/components/SettingsScreen';
import EventDetailScreen from './src/components/EventDetailScreen';
import ScheduleScreen from './src/containers/ScheduleScreen';
import LoadingScreen from './src/containers/LoadingScreen';
import configureStore from './src/configureStore';
import PDFViewer_Render from "./src/components/PDF_ViewerRender";
import Resources from "./src/components/PDFList";
import { loadUserIfExists } from './src/actions/user';

const MenuButton = (props) => {
	return (
		<View>
			<TouchableOpacity onPress={() => props.navigation.toggleDrawer()} style={{ marginLeft: 10 }}>
				<FontAwesome name="bars" size={32} color="black" />
			</TouchableOpacity>
		</View>
	);
};

const Root = createAppContainer(createStackNavigator({
	Main: {
		screen: createDrawerNavigator({
			Home: HomeScreen,
			Settings: SettingsScreen,
			Schedule: ScheduleScreen,
			Resources: Resources
		}),
		defaultNavigationOptions: ({ navigation }) => ({
			headerLeft: <MenuButton navigation={navigation} />
		})
	},
	'Event Detail': EventDetailScreen,
	PDFViewer_Render: PDFViewer_Render
}));

const store = configureStore();

store.dispatch(loadUserIfExists());

export default class App extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			loading: true
		};
	}

	componentDidMount() {
		// Handle notifications that are received or selected while the app
		// is open. If the app was closed and then opened by tapping the
		// notification (rather than just tapping the app icon to open it),
		// this function will fire on the next tick after the app starts
		// with the notification data.
		// this._notificationSubscription = Notifications.addListener(this._handleNotification);
	}
	
	_handleNotification = (notification) => {
		// TODO: handle special notifications
	};

	componentWillMount() {
		setTimeout(() => this.setState({
			loading: false
		}), 1500);
	}

	render() {
		return (
			<Provider store={store}>
			{
				this.state.loading ?
					<LoadingScreen /> :
					<Root />
			}
			</Provider>
		);
	}
}
