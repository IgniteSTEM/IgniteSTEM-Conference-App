import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Heading from './Heading';
import moment from 'moment/src/moment';

class EventDetailScreen extends React.Component {
	render() {
		const { name, registered, capacity, startTime, endTime, speaker, description } = this.props.navigation.getParam('event')

		return (
			<View style={{ flex: 1, alignItems: 'center' }}>
				<Heading>{name}</Heading>
				{speaker === '' ? null : <Text style={styles.speaker}>{speaker}</Text>}
				<Text style={styles.time}>{moment.utc(startTime).format('h:mm a')} – {moment.utc(endTime).format('h:mm a')}</Text>
				<Text>{registered}/{capacity}</Text>
				<Text>{description}</Text>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	time: {
		fontSize: 18,
		color: '#555'
	},
	speaker: {
		fontSize: 22,
		color: "#111"
	}
})

export default EventDetailScreen;