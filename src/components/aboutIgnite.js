import React, { Component } from 'react';
import { ScrollView, View, ImageBackground, StyleSheet, Text, Linking } from 'react-native';
import Heading from '../components/Heading';
import AddUserModal from '../components/AddUserModal';
import { connect } from 'react-redux';
import { addUser } from '../actions/user';
import { fetchEvents } from '../actions/schedule';

export default class aboutIgnite extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		
		return (
			<ScrollView>
				<ImageBackground source={require('../../assets/notebook.jpg')} style={{width: '100%', height:500, justifyContent: 'center', 'alignItems': 'center'}}>
				<View style={styles.overlay} />
				<Text style={styles.header}> 
					<Text>WELCOME TO</Text> 
					<Text style={{color: '#E96F0A', fontWeight: 'bold'}}> IGNITESTEM</Text>
				</Text>

				<Text style={styles.subHeader}> 
					<Text>Bring</Text> 
					<Text style={{fontWeight: 'bold'}}> Hackathons, Maker Faires,</Text>
					<Text> and </Text>
					<Text style={{fontWeight: 'bold'}}> Design Thinking</Text>
					<Text> to your students.</Text>
				</Text>
				</ImageBackground>
				
				<View style={{margin: 20}}>
				<Heading>JOIN EDUCATION THOUGHT LEADERS FOR A CONFERENCE NEAR YOU.</Heading>
				
				<Text style={{color: '#666', marginTop: 20}}>
				<Text>With significant backing from Princeton University, Wolfram Alpha, Google Education, and more, IgniteSTEM brings together thought leaders to make the</Text> 
				<Text style={{fontWeight: 'bold'}}> “classroom of the future”</Text>
				 <Text> a reality. Through an international series of conferences, IgniteSTEM </Text>
				 <Text style={{fontWeight: 'bold'}}>empowers educators</Text>
				  <Text> and provides </Text>
				  <Text style={{fontWeight: 'bold'}}>cutting edge ideas </Text>
				  <Text>to disrupt STEM learning environments with </Text>
				  <Text style={{fontWeight: 'bold'}}>education technology and project-based learning.</Text>
				</Text>
				</View>

				<View style={{alignItems: 'flex-start', margin: 20}}>
				<Text style={{fontWeight: 'bold', marginTop: 1, textAlign: 'left', color: '#666',}}> At the conference you can... </Text>
				<Text style={styles.bullets}>{'\u2022' + " Experience a “hacking education” in a non traditional style"}</Text>
				<Text style={styles.bullets}>{'\u2022' + " Listen to passionate education innovators about how they changed their own STEM field"}</Text>
				<Text style={styles.bullets}>{'\u2022' + " Learn to increase student interest in STEM with makerspaces and design thinking"}</Text>
				<Text style={styles.bullets}>{'\u2022' + " Work in small groups to create successful plans that connect STEM thought leaders to your school, community, or workspace"}</Text>
				<Text style={styles.bullets}>{'\u2022' + " Receive professional development hours available for attending"}</Text>
				</View>

				<View style={{alignItems: 'flex-start', margin: 20}}>
				<Text style={{fontWeight: 'bold', marginTop: 1, textAlign: 'left', color: '#666',}}> After the conference you can... </Text>
				<Text style={styles.bullets}>
				<Text>{'\u2022' + " Facilitate your own Hackathon with a Do-It-Yourself kit,"}</Text> 
				<Text style={{color: '#E96F0A', fontWeight: 'bold'}} onPress={() => Linking.openURL('https://hackinabox-prod.herokuapp.com/')}>"Hack-In-A-Box"</Text>
				<Text>, and a Hacker Fund team member</Text>
				</Text>
				</View>
			</ScrollView>
		);
	}
}

const styles = StyleSheet.create({
	header: {
		fontSize: 20,
		textAlign: 'center',
		color: '#FFF'
	},
	bullets: {
		marginLeft: 30, 
		color: '#666'
	},
	overlay: {
     ...StyleSheet.absoluteFillObject,
     backgroundColor: 'rgba(0,0,0,0.5)'
   },
	subHeader: {
		fontSize: 13,
		textAlign: 'center',
		color: '#FFF',
		marginTop: 5
	}
})