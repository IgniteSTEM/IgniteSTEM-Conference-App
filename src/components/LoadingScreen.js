import React from 'react';
import {ActivityIndicator, View, Text} from 'react-native';

class LoadingScreen extends React.Component {
    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
				<ActivityIndicator size="large" color="#0000ff" />
            </View>
        );
    }
}

export default LoadingScreen;