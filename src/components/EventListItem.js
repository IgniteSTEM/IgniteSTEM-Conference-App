import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TouchableWithoutFeedback } from 'react-native';
import { withNavigation } from 'react-navigation';
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
			<TouchableWithoutFeedback onPress={() => this.props.navigation.navigate('Event Detail', {
				item: {
					event, time, speaker
				}
			})}>
				<View style={styles.block}>
					<View>
						<Text style={styles.event}>{event}</Text>
						<Text style={styles.time}>{time}</Text>
						{speaker === '' ? null : <Text style={styles.speaker}>{speaker}</Text>}
					</View>
					{
						selectable ?
							<View>
								<TouchableOpacity onPress={() => onSelect()}>
									{this.renderIcon()}
								</TouchableOpacity>
							</View>
							: null
					}
				</View>
			</TouchableWithoutFeedback>
		)
	}
}

const styles = StyleSheet.create({
	block: {
		paddingBottom: 10,
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		paddingRight: 10
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

export default withNavigation(EventListItem);