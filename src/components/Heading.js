import React from 'react';
import { Text, View } from 'react-native';
import { Colors } from '../theme';

const FONT_SIZES = [
	0, 	// h0
	32,	// h1
	24, // h2
	18  // h3
]

const style = {
	fontSize: 28,
	textAlign: 'center'
};

// TODO: the 'text-transform' style is not available
// so we're using toUpperCase() for now
const Heading = ({ level, children }) => (
	<View style={{
		display: 'flex',
		alignItems: 'center'
	}}>
		<Text style={{
			...style, 
			fontSize: FONT_SIZES[level || 1]
			}}>
			{children}
		</Text>
		{ 
			!level || level == 1 ? 
				<View style={{
					backgroundColor: Colors.accentColor,
					width: 60,
					height: 4
				}}></View>
				: null
		}
	</View>
);

export default Heading;