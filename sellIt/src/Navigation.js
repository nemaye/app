//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Articles from './Articles'
import SignOut from './SignOut';

const Drawer = createDrawerNavigator();

// create a component
export const DrawerNavigation = () => {
    return (
    <NavigationContainer>
        <Drawer.Navigator>
            <Drawer.Screen name="Articles" component={Articles}/>
            <Drawer.Screen name="SignOut" component={SignOut}/>
        </Drawer.Navigator>
    </NavigationContainer>
    );
};


