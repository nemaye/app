//import liraries
import React, { Component, useContext } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { ThemeContext } from './Context'

// create a component
const ThemeToggle = () => {
    const {toggle} = useContext(ThemeContext)

    return (
        <Button
            title='toggle'
            onPress={toggle}
        />
    );
};


//make this component available to the app
export default ThemeToggle;
