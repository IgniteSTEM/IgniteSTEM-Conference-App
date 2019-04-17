import React from 'react';
import { ActivityIndicator, View } from 'react-native';
import { connect } from 'react-redux';
import { fetchEvents } from '../actions/schedule';

class LoadingScreen extends React.Component {
	constructor(props) {
		super(props);

		const { dispatch } = this.props;
		dispatch(fetchEvents());
	}

	render() {
		return (
			<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
				<ActivityIndicator size="large" color="#0000ff" />
			</View>
		);
	}
}

export default connect()(LoadingScreen);