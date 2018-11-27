import React from 'react';
import { createBottomTabNavigator } from 'react-navigation';
import { connect } from 'react-redux';
import {
    Image,
    StyleSheet,
    Text,
    View,
    FlatList,
    RefreshControl
} from 'react-native';
import EventListItem from '../components/EventListItem';

class GeneralScheduleScreen extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            data: props.data,
            refreshing: false,
        };
    }

    _keyExtractor(item, index) {
        return index.toString();
    }

    renderSeparator() {
        return <View style={styles.separator} />
    }

    renderHeader() {
        return (
            <View style={styles.header}>
                <Text style={styles.headerText}>Conversations</Text>
            </View>
        )
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
        return (
            <View style={styles.container}>
                <FlatList
                    keyExtractor={this._keyExtractor}
                    data={this.state.data}
                    renderItem={({ item }) => (
                        <EventListItem name={item.name} picture={item.picture} lastMessage={item.lastMessage} />
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

class PersonalScheduleScreen extends React.Component {
    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text>Personal Schedule Screen</Text>
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

const mapStateToProps = ({ schedule }) => ({
    data: schedule.data
});

export default createBottomTabNavigator({
    Schedule: connect(mapStateToProps)(GeneralScheduleScreen),
    'My Schedule': connect(mapStateToProps)(PersonalScheduleScreen)
});