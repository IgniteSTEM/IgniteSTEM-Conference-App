import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TouchableWithoutFeedback } from 'react-native';
import { withNavigation } from 'react-navigation';
import { FontAwesome } from '@expo/vector-icons';
import moment from 'moment/src/moment';

class EventListItem extends Component {
	renderIcon() {
		if (this.props.selected) {
			return <FontAwesome name="times" size={24} color="gray" />;
		} else {
			return <FontAwesome name="plus" size={24} color="gray" />;
		}
	}

	render() {
		moment.locale('en');

		const { event, selectable, onSelect } = this.props;

		const { name, registered, capacity, startTime, endTime, speaker } = event;

		return (
			<TouchableWithoutFeedback onPress={() => this.props.navigation.navigate('Event Detail', { event })}>
				<View style={styles.block}>
					<View>
						<Text style={styles.name}>{name}</Text>
						{speaker === '' ? null : <Text style={styles.speaker}>{speaker}</Text>}
						<Text style={styles.time}>
							{registered}/{capacity}&nbsp;&nbsp;&nbsp;
							{moment.utc(startTime).format('h:mm a')} – {moment.utc(endTime).format('h:mm a')}
						</Text>
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
	name: {
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