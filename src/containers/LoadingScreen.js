import React from 'react';
import { ActivityIndicator, View } from 'react-native';

export default class LoadingScreen extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
				<ActivityIndicator size="large" color="#0000ff" />
			</View>
		);
	}
}
