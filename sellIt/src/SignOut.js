//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import AsyncStorage from '@react-native-async-storage/async-storage';
// create a component
GoogleSignin.configure({
    webClientId: '294142720015-5cjbq3cj0acj3kjkq1mh6qv35f1nr6ju.apps.googleusercontent.com',
});


const logOut = async () => {
    try {
      await GoogleSignin.revokeAccess();
      await GoogleSignin.signOut();
    } catch (error) {
      console.error(error);
    }
  };

const SignOut = () => {
    return (
    <View style={styles.container}>
        <Text>
            Signed Out
        </Text>
        <Button
            title='signOut'
            onPress={() => logOut().then( async () => {
                AsyncStorage.removeItem('name')
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
export default SignOut;
