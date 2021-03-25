//import liraries
import React, { Component, useContext } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { ThemeContext, AuthContext } from './Context'

// create a component
const Articles = () => {
    // const {isLight, light, dark} = useContext(ThemeContext)
    // const theme = isLight ? light : dark
    // console.log(isLight)

    const {isSignedIn, signedIn} = useContext(AuthContext)
    return (
        <View>
            <Text>{isSignedIn}</Text>
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
export default Articles;
