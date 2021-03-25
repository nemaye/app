//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

import Articles from  './src/Articles'
import {AuthContext, AuthContextProvider, ThemeContextProvider} from './src/Context'
import ThemeToggle from './src/ThemeToggle';
import SignIn from './src/SignIn'
import SignOut from './src/SignOut'
import { useEffect, useContext } from 'react';
import { useState } from 'react';

import { GoogleSignin } from '@react-native-google-signin/google-signin';
import auth from '@react-native-firebase/auth';
import {DrawerNavigation} from './src/Navigation'


 
// create a component
const App = () => {

    const {isSignedIn} = useContext(AuthContext)
    console.log('isis',isSignedIn)
    if(isSignedIn){
        return(
            <DrawerNavigation/>
        )
    }
    return(
        <SignIn/>
    )
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
