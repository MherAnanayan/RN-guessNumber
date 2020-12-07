import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Colors from '../Constants/Colors';

const Mainbutton = (props) => {
    return(
        <TouchableOpacity onPress={props.whenPress}>
            <View style={styles.buttonArea}>
    <Text style={styles.button}>{props.children}</Text>
            </View>
        </TouchableOpacity>
    )
 }

const styles = StyleSheet.create({
    buttonArea: {
        backgroundColor: Colors.primary,
        paddingHorizontal: 30,
        paddingVertical:12,
        borderRadius:25
    },
    button: {
        fontFamily: 'open-sans',
        fontSize: 18,
        color: 'white',
        justifyContent:"center",
        alignItems:"center"
    },
})

export default Mainbutton;