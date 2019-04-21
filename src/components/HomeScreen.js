import React, { Component } from 'react';
import { View, ImageBackground, ScrollView, Text} from 'react-native';
import Heading from './Heading';

export default class App extends Component {
	render() {
		return (
			<ScrollView style={{flex:1, backgroundColor: '#FFF' }} contentContainerStyle={{alignItems: 'center'}}>
				<Heading>Home screen</Heading>
				<ImageBackground source={require('../../assets/bckgrnd.png')} style={{width: '100%', height: '100%'}}>
				</ImageBackground>
			</ScrollView>
		);
	}
}
