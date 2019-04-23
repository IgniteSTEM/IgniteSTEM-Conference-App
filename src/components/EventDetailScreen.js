import React from 'react';
import { View, Text, StyleSheet, ImageBackground } from 'react-native';
import Heading from './Heading';
import moment from 'moment/src/moment';

class EventDetailScreen extends React.Component {
	render() {
		const { name, registered, capacity, startTime, endTime, speaker, description, location, mandatory } = this.props.navigation.getParam('event')

		return (
			<View style={{ flex: 1, alignItems: 'center' }}>
				<ImageBackground source={require('../../assets/bckgrnd.jpg')} Image={{'resizeMode': 'contain'}} style={{width: '100%', height: '100%'}}>
				<View style={styles.overlay} />
				<View style={{margin: 20}}>
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
				</ImageBackground>

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
	},
	overlay: {
     ...StyleSheet.absoluteFillObject,
     backgroundColor: 'rgba(255,255,255,0.6)'
   }
})

export default EventDetailScreen;