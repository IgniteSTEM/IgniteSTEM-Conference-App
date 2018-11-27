import React, { Component } from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';

class EventListItem extends Component {
    render() {
        const { picture, name, lastMessage } = this.props;

        return (
            <View style={styles.block}>
                <Image source={{ uri: picture }} style={styles.image} />
                <View style={styles.meta}>
                    <Text style={styles.name}>{name}</Text>
                    <Text style={styles.lastMessage}>{lastMessage}</Text>
                </View>
            </View>
        )
	}
}

const styles = StyleSheet.create({
    block: {
        flexDirection: 'row',
        paddingBottom: 10,
    },
    image: {
        width: 50,
        height: 50,
        borderRadius: 25,
    },
    meta: {
        marginLeft: 10,
        justifyContent: 'center',
    },
    name: {
        fontSize: 20,
        fontWeight: '500',
    },
    lastMessage: {
        fontSize: 14,
        color: "#111",
    }
});

export default EventListItem;