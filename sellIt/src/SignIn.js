//import liraries
import React, { useContext } from 'react';
import { Text, StyleSheet, ImageBackground, TouchableOpacity } from 'react-native';
import auth from '@react-native-firebase/auth';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import { AuthContext } from './Context';


GoogleSignin.configure({
    webClientId: '294142720015-5cjbq3cj0acj3kjkq1mh6qv35f1nr6ju.apps.googleusercontent.com',
});

const image = '../images/join.jpg'

async function onGoogleButtonPress() {
    // Get the users ID token
	const { idToken } = await GoogleSignin.signIn();
  
    // Create a Google credential with the token
    const googleCredential = auth.GoogleAuthProvider.credential(idToken);
  
    // Sign-in the user with the credential
    return auth().signInWithCredential(googleCredential);
  }

// create a component
const SignIn = () => {

    const {isSignedIn, signedIn} = useContext(AuthContext)
    console.log('inside signin yammm',isSignedIn)

    return (
    	<ImageBackground style={styles.image} source={require(image)}>
			<Text>
				Welcome
			</Text>
			<TouchableOpacity
				onPress={() => onGoogleButtonPress().then(signedIn)}
				style={styles.button}
			>
				<Text style={styles.text}>
					join the gang
				</Text>
			</TouchableOpacity>
      </ImageBackground>

    );
};

// define your styles
const styles = StyleSheet.create({
    button: {
        // flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        // backgroundColor: '#2c3e50',
    },
    image: {
      flex: 1,
      resizeMode: "cover",
      justifyContent: "center",
	  alignItems: "center",
      height: 999
    },
	text: {
		fontSize: 42,
		color: '#eee'
	}
});

//make this component available to the app
export default SignIn;
