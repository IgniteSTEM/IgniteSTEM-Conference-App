import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

class EventListItem extends Component {
    render() {
        const { event, time, speaker } = this.props;

        return (
            <View style={styles.block}>
                <Text style={styles.event}>{event}</Text>
                <Text style={styles.time}>{time}</Text>
                <Text style={styles.speaker}>{speaker}</Text>
            </View>
        )
	}
}

const styles = StyleSheet.create({
    block: {
        paddingBottom: 10
    },
    event: {
        fontSize: 20,
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
});

export default EventListItem;