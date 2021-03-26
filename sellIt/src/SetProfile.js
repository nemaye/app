//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Modal, TextInput, Button } from 'react-native';
import { useState } from 'react/cjs/react.development';

// create a component
const SetProfile = () => {

    const [modal, setModal] = useState(true)

    return (

            <Modal visible={modal} animationType='slide'>
                <View style={{
                        flex: 1,
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                        backgroundColor: '#eee'
                }}>
                    <Text style={{
                        fontSize: 40,
                        fontWeight: '400'
                    }}>
                        Complete Profile
                    </Text>
                    <View style={styles.modal}> 
                        <TextInput 
                            placeholder='username'
                            style={styles.input}
                        />
                        <TextInput 
                            style={styles.input}
                            placeholder='contact number'
                        />
                        <TextInput 
                            style={styles.input}
                            placeholder='address'
                        />
                        <TextInput 
                            style={styles.input}
                            placeholder='pincode'
                        />
                        <Button
                            title='press'
                            onPress={() => setModal(false)}
                        />
                    </View>
                </View>
            </Modal>
      
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
    modal: {
        height: 470,
        width: 370,
        backgroundColor: '#444',
        borderRadius: 45,
        justifyContent: 'center',
        alignItems: 'center',
    },
    input: {
        backgroundColor: '#bbb',
        borderRadius: 20,
        width: 230,
        marginBottom: 15
    },
});

//make this component available to the app
export default SetProfile;
