import React, { Component } from 'react';
import { View } from 'react-native';
import Heading from './Heading';

export default class App extends Component {
	render() {
		return (
			<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
				<Heading>Home Screen</Heading>
			</View>
		);
	}
}
