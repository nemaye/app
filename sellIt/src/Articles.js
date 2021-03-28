//import liraries
import React, { useContext } from 'react';
import { View, Text, StyleSheet, Modal } from 'react-native';
import { useEffect, useState } from 'react/cjs/react.development';
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

    const [exists, setExist] = useState(true)

    useEffect(() => {
        fetch("http://192.168.43.12:4000/api/checkProfile", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                "email": 'gadsfdga@gmail.com'
            })
        })
        .then((res) => res.json())
        .then((data) => {
            console.log('data',data)
            setExist(data)
        })
        .catch(err => console.log(err))
    }, [])

    console.log('exists',exists)
    return(
        <View style={styles.container}>
            <Modal visible={!exists} animationType='slide'>
                <SetProfile/>
            </Modal>
        </View>
        // <SetProfile openModal={exists}/>
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
export default Articles;
