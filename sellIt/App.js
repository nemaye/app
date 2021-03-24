//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

import Articles from  './src/Articles'
import {AuthContext, AuthContextProvider, ThemeContextProvider} from './src/Context'
import ThemeToggle from './src/ThemeToggle';
import SignIn from './src/SignIn'
import SignOut from './src/SignOut'
import { useEffect } from 'react';
import { useState } from 'react';

import { GoogleSignin } from '@react-native-google-signin/google-signin';
import auth from '@react-native-firebase/auth';

GoogleSignin.configure({
    webClientId: '294142720015-5cjbq3cj0acj3kjkq1mh6qv35f1nr6ju.apps.googleusercontent.com',
});



const isSignedIn = async () => {
    const isSignedIn = await GoogleSignin.isSignedIn();
    console.log('chut',isSignedIn)
};


const logOut = async () => {
    try {
      await GoogleSignin.revokeAccess();
      await GoogleSignin.signOut();
    } catch (error) {
      console.error(error);
    }
  };

async function onGoogleButtonPress() {
    // Get the users ID token
      const { idToken } = await GoogleSignin.signIn();
  
    // Create a Google credential with the token
      const googleCredential = auth.GoogleAuthProvider.credential(idToken);
  
    // Sign-in the user with the credential
      return auth().signInWithCredential(googleCredential);
  }

// create a component
const App = () => {

    const [isSigned, setSigned] = useState(null)

    useEffect( async () => {
        
        setSigned(await GoogleSignin.isSignedIn())
        console.log('useEffect',isSigned)
    }, [])

    console.log('isSigned',isSigned)
    if(isSigned){
        return(
        <View style={styles.container}>
            <Text>
                Signed Out
            </Text>
            <Button
                title='signOut'
                onPress={() => logOut().then(() => {
                    setSigned(!isSigned)
                })}
            />
        </View>
        )
    }


    return (
        // <ThemeContextProvider>
        //     <Articles/>
        //     <ThemeToggle/>
        // </ThemeContextProvider>
        

        <View>
            <Button
                title='test'
                onPress={isSignedIn}
            />
            <Button
                title="Google Sign-In"
                onPress={() => onGoogleButtonPress().then(() => {
                    setSigned(!isSigned)
                })}
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
export default App;
