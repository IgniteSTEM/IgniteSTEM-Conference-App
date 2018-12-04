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
        this.setState({
            refreshing: true
        })
        setTimeout(function () {
            this.setState({
                refreshing: false
            })
        }.bind(this), 1000)
    }

	render() {
		const { events, selectable, selectedEvents, onSelect } = this.props;

		let selectedItems = selectedEvents || [];

        return (
            <View style={styles.container}>
                <FlatList
                    keyExtractor={this._keyExtractor}
                    data={events}
                    renderItem={({ item, index }) => {
						return <EventListItem 
							event={item.event} 
							time={item.time} 
							speaker={item.speaker} 
							selectable={selectable}
							selected={selectedItems.indexOf(item) !== -1}
							onSelect={() => onSelect(item)} />
                    }}
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
    },
    separator: {
        height: 1,
        width: "80%",
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