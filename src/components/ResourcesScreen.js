import React, { Component } from 'react';
import { View, ImageBackground } from 'react-native';
import Heading from '../components/Heading';
import Resources from '../components/PDFList';

export default class ResourcesScreen extends Component {
	render() {		
		return (
			<View style={{'backgroundColor': '#FFF', 'alignItems': 'center', marginBottom: 100}}>
				<Heading>Learn more</Heading>
				<ImageBackground source={require('../../assets/bckgrnd.jpg')} Image={{'resizeMode': 'contain'}} style={{width: '100%', height: '100%'}}>
					<Resources navigation={this.props.navigation}/>
				</ImageBackground>
			</View>
		);
	}
}