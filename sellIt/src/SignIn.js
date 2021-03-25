//import liraries
import React, { Component, useContext } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import auth from '@react-native-firebase/auth';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import { AuthContext } from './Context';
import { useState } from 'react/cjs/react.development';

GoogleSignin.configure({
    webClientId: '294142720015-5cjbq3cj0acj3kjkq1mh6qv35f1nr6ju.apps.googleusercontent.com',
});

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
    <View style={styles.container}>
        <Text>App</Text>
        <Button
        title="Google Sign-In"
        // onPress={signedIn}
        onPress={() => onGoogleButtonPress().then(signedIn)}
    />
    </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#2c3e50',
    },
});

//make this component available to the app
export default SignIn;
