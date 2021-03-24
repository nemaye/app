//import liraries
import React, { Component, useContext } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { ThemeContext } from './Context'

// create a component
const Articles = () => {
    const {isLight, light, dark} = useContext(ThemeContext)
    const theme = isLight ? light : dark
    console.log(isLight)
    return (
        <View style={{backgroundColor: theme.ui}}>
            <Text>Articles</Text>
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
