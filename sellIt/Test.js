//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

// create a component
const Test = () => {

    const submit = () => {
        fetch("http://192.168.43.12:4000/api/checkProfile", {
            method: 'POST',
            headers: {
                // 'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email: "dsf@gmail.com"
            })
        })
        .then((res) => res.json())
        .then((data) => {
            console.log('data',data)
        })
        .catch(err => console.log(err))
    }

    return (
        <View style={styles.container}>
            <Button
                title='press me'
                onPress={submit}
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
export default Test;
