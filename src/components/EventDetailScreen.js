import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Heading from './Heading';

class EventDetailScreen extends React.Component {
	render() {
		const { event, time, speaker } = this.props.navigation.getParam('item')

		return (
			<View style={{ flex: 1, alignItems: 'center' }}>
				<Heading>{event}</Heading>
				{/* <Text style={styles.event}>{event}</Text> */}
				<Text style={styles.time}>{time}</Text>
				{speaker === '' ? null : <Text style={styles.speaker}>{speaker}</Text>}
				<Text>Some kind of description?</Text>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	time: {
		fontSize: 14,
		color: '#555'
	},
	speaker: {
		fontSize: 14,
		color: "#111"
	}
})

export default EventDetailScreen;