import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Heading from './Heading';
import moment from 'moment/src/moment';

class EventDetailScreen extends React.Component {
	render() {
		const { name, registered, capacity, startTime, endTime, speaker, description, location, mandatory } = this.props.navigation.getParam('event')

		return (
			<View style={{ flex: 1, alignItems: 'center', margin: 20 }}>
				<Heading>{name}</Heading>
				{speaker === '' ? null : <Text style={styles.speaker}>{speaker}</Text>}
				{location === '' ? null : <Text style={styles.speaker}>{location}</Text>}
				<Text style={styles.time}>{moment.utc(startTime).format('h:mm a')} – {moment.utc(endTime).format('h:mm a')}</Text>
				{
					!mandatory ? 
						<Text>{registered}/{capacity}</Text>
						: null
				}
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