//import liraries
import React, { Component, createContext } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import firebase from '@react-native-firebase/app'
import auth from '@react-native-firebase/auth'

export const ThemeContext = createContext();

export const AuthContext = createContext();

// create a component
export class ThemeContextProvider extends Component {

    state = {
        isLight: true,
        light: { text: '#555', ui: '#ddd', bg: '#eee'},
        dark: { text: '#ddd', ui: '#333', bg: '#555'},
    }

    // signOut = async () => {
    //     try {
    //         await GoogleSignin.revokeAccess();
    //         await GoogleSignin.signOut();
    //         this.setState({ user: null }); // Remember to remove the user from your app's state as well
    //     } catch (error) {
    //         console.error(error);
    //     }
    // };


    toggleTheme = () => {
        this.setState({isLight: !this.state.isLight})
    }

    render() {
        return (
            <ThemeContext.Provider value={{...this.state, toggle: this.toggleTheme}}>
                {this.props.children}
            </ThemeContext.Provider>
        );
    }
}


export class AuthContextProvider extends Component{
    state = {
        isSignedIn: false
    }

    signedIn = () => {
        this.setState({
            isSignedIn: !this.state.isSignedIn
        }),
        console.log('hakunaa')
    }
    render(){
        return(
            <AuthContext.Provider value={{...this.state, signedIn: this.signedIn}}>
                {this.props.children}   
            </AuthContext.Provider>
        )
    }
}
