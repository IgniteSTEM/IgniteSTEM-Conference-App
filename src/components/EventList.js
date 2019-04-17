import React from 'react';
import { View, StyleSheet, FlatList, RefreshControl } from 'react-native';
import EventListItem from './EventListItem';

class EventList extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			refreshing: false
		};
	}

	_keyExtractor(event, index) {
		return index.toString();
	}

	renderSeparator() {
		return <View style={styles.separator} />
	}

	renderHeader() {
		return null;
	}

	_onRefresh() {
		if (this.props.refresh) {
			this.props.refresh();
		}
		this.setState({
			refreshing: true
		})
		setTimeout(function () {
			this.setState({
				refreshing: false
			})
		}.bind(this), 1000)
	}

	isSelected(event) {
		const selectedEvents = this.props.selectedEvents || [];
		return selectedEvents.some((selectedEvent) => event._id === selectedEvent._id);
	}

	render() {
		const { events, selectable, onEventSelect } = this.props;

		const isSelected = this.isSelected.bind(this);
		
		return (
			<View style={styles.container}>
				<FlatList
					keyExtractor={this._keyExtractor}
					data={events}
					renderItem={({ item }) => (
						<EventListItem
							name={item.name}
							time={item.time}
							speaker={item.speaker}
							selectable={selectable}
							selected={isSelected(item)}
							onSelect={() => onEventSelect(item)} />
					)}
					ItemSeparatorComponent={this.renderSeparator.bind(this)}
					ListHeaderComponent={this.renderHeader}
					refreshControl={
						<RefreshControl
							refreshing={this.state.refreshing}
							onRefresh={this._onRefresh.bind(this)}
						/>
					}
				/>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		marginTop: 20,
		width: '85%'
	},
	separator: {
		height: 1,
		alignSelf: 'center',
		backgroundColor: "#555"
	},
	header: {
		padding: 10,
	},
	headerText: {
		fontSize: 30,
		fontWeight: '900'
	}
});

export default EventList;