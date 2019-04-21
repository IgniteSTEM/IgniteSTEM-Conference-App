import React, { Component } from 'react';
import { View, ImageBackground } from 'react-native';
import Heading from '../components/Heading';
import AddUserModal from '../components/AddUserModal';
import { connect } from 'react-redux';
import { addUser } from '../actions/user';
import { fetchEvents } from '../actions/schedule';

class HomeScreen extends Component {
	constructor(props) {
		super(props);

		const { fetchEvents } = this.props;
		
		fetchEvents();
	}

	render() {
		const { exists, addUser } = this.props;
		
		return (
			<View style={{'backgroundColor': '#FFF', 'alignItems': 'center'}}>
				<AddUserModal visible={!exists} onFinish={(name) => addUser(name)} />
				<Heading>Home Screen</Heading>
				<ImageBackground source={require('../../assets/bckgrnd.jpg')} Image={{'resizeMode': 'contain'}} style={{width: '100%', height: '100%'}}>
				</ImageBackground>
			</View>
		);
	}
}

const mapStateToProps = ({ user }) => user;

const mapDispatchToProps = (dispatch, ownProps) => ({
	fetchEvents: () => {
		dispatch(fetchEvents());
	},
	addUser: (name) => {
		dispatch(addUser(name));
	}
});

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);