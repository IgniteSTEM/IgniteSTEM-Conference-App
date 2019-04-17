import React from 'react';
import { Button, View, Text, Modal, TextInput } from 'react-native';

export default class AddUserModal extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			name: ''
		};
	}

	render() {
		const { visible, onFinish } = this.props;

		return (
			<Modal
				animationType="slide"
				transparent={false}
				visible={visible}
				style={{ flex: 1 }}
				onRequestClose={() => onFinish(this.state.name)}>
				<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
					<View>
						<Text style={{ fontSize: 18, margin: 4 }}>Please enter your name:</Text>

						<TextInput
							style={{ height: 40, borderColor: 'gray', borderWidth: 2, padding: 4, margin: 4, marginBottom: 12 }}
							value={this.state.name}
							onChangeText={(name) => this.setState({ name })}
						/>

						<Button
							onPress={() => onFinish(this.state.name)}
							title="Continue"
							color="#E96F0A"
							accessibilityLabel="Finish name input" />

					</View>
				</View>
			</Modal>
		);
	}
}