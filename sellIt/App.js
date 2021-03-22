//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import auth from '@react-native-firebase/auth';
import { GoogleSignin } from '@react-native-google-signin/google-signin';

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

const signOut = async () => {
    try {
      await GoogleSignin.revokeAccess();
      await GoogleSignin.signOut();
    } catch (error) {
      console.error(error);
    }
  };


function signedIn() {
    return(
    <View style={styles.container}>
        <Text>App</Text>
        <Button
        title="Google Sign-In"
        onPress={() => onGoogleButtonPress().then(() => console.log('Signed in with Google!'))}
    />
    </View>
    )
}

function signedOut() {
    return(
    <View style={styles.container}>
        <Text>
            Signed Out
        </Text>
        <Button
            title='signOut'
            onPress={() => signOut().then(() => console.log('signedOut'))}
        />
    </View>
    )
}

// create a component
const App = () => {
    return (
        // signedIn()
        signedOut()
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
export default App;
