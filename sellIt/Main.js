//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import App from './App';
import Articles from './src/Articles';
import { AuthContextProvider } from './src/Context';
import { DrawerNavigation } from './src/Navigation';

// create a component
const Main = () => {
    return (
        <AuthContextProvider>
            <App/>
        </AuthContextProvider>

    );
};

//make this component available to the app
export default Main;
