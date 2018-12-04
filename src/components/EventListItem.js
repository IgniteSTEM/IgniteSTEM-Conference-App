import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

class EventListItem extends Component {
    renderIcon() {
        if (this.props.selected) {
            return <FontAwesome name="times" size={24} color="gray" />;
        } else {
            return <FontAwesome name="plus" size={24} color="gray" />;
        }
    }

    render() {
        const { event, time, speaker, selectable, onSelect } = this.props;

        return (
            <View style={styles.block}>
                <View>
                    <Text style={styles.event}>{event}</Text>
                    <Text style={styles.time}>{time}</Text>
                    { speaker === '' ? null : <Text style={styles.speaker}>{speaker}</Text> }
                </View>
                { 
                    selectable ?
                        <View>
                            <TouchableOpacity onPress={() => onSelect()}>
                                { this.renderIcon() }
                            </TouchableOpacity>
                        </View>
                        : null
                }
            </View>
        )
	}
}

const styles = StyleSheet.create({
    block: {
        paddingBottom: 10,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
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