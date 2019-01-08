import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

class EventDetailScreen extends React.Component {
	render() {
		const { event, time, speaker } = this.props.navigation.getParam('item')

		return (
			<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
				<Text style={styles.event}>{ event }</Text>
				<Text style={styles.time}>{ time }</Text>
				{ speaker === '' ? null : <Text style={styles.speaker}>{speaker}</Text> }
				<Text>Some kind of description?</Text>
			</View>
		);
    }
}

const styles = StyleSheet.create({
    event: {
        fontSize: 32,
        fontWeight: '500'
    },
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