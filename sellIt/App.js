//import liraries
import React from 'react';
import { StyleSheet } from 'react-native';

import { AuthContext } from './src/Context'
import SignIn from './src/SignIn'
import { useContext } from 'react';

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
