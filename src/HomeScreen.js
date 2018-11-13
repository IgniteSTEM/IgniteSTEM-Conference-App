/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import data from './data';

import {
  Image,
  StyleSheet,
  Text,
  View,
  FlatList,
  RefreshControl
} from 'react-native';

export default class App extends Component {

  constructor(props) {
    super(props);
    
    this.state = {
      data: data,
      refreshing: false,
    };
  }

  _keyExtractor(item, index) {
    return index.toString();
  }

  renderItem(data) {
    let { item, index } = data;

    return (
      <View style={styles.itemBlock}>
        <Image source={{uri: item.picture}} style={styles.itemImage}/>
        <View style={styles.itemMeta}>
          <Text style={styles.itemName}>{item.name}</Text>
          <Text style={styles.itemLastMessage}>{item.last_message}</Text>
        </View>
      </View>
    )
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
    setTimeout(function() {
      this.setState({
        refreshing: false
      })
    }.bind(this),1000)
  }

  render() {
    return (
      <View style={styles.container}>
        <FlatList
          keyExtractor={this._keyExtractor}
          data={this.state.data}
          renderItem={this.renderItem.bind(this)}
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
  itemBlock: {
    flexDirection: 'row',
    paddingBottom: 10,
  },
  itemImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  itemMeta: {
    marginLeft: 10,
    justifyContent: 'center',
  },
  itemName: {
    fontSize: 20,
    fontWeight: '500',
  },
  itemLastMessage: {
    fontSize: 14,
    color: "#111",
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
