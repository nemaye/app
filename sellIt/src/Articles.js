//import liraries
import React, { useContext } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useEffect } from 'react/cjs/react.development';
import { AuthContext } from './Context'
import SetProfile from './SetProfile'

// create a component
const Articles = () => {
    // const {isLight, light, dark} = useContext(ThemeContext)
    // const theme = isLight ? light : dark
    // console.log(isLight)

    // if(userProfileComplete){
    //     return(
    //         <Something/>
    //     )
    // }
    // else{
    //     return(
    //         <SomethingElse/>
    //     )
    // }

    useEffect(() => {
        fetch("http://192.168.43.12:4000/checkProfile", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                "email": 'yameen@gmail.com'
            })
        })
        .then((res) => res.json())
        .then((data) => {
            console.log('data',data)
        })
        .catch(err => console.log(err))
    })

    if(false){
        return (
            <View>
                <Text>
                    products
                </Text>
            </View>
        );
    }
    else{
        return(
            <SetProfile/>
        )
    }
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
