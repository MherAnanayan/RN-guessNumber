import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import Colors from '../Constants/Colors'


const Input = (props) => {
    return(
        <TextInput  {...props} style={{...styles.input, ...props.style}}/>
    )
 }

const styles = StyleSheet.create({
    input: {
        height: 30,
        marginVertical:10,
        borderBottomWidth:1,
        borderBottomColor: Colors.xar,
        
        
    }
})

export default Input;