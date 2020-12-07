import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import Colors from '../Constants/Colors';


const Numbercontainer = (props) => { 
    return(
        <View style={{...styles.numbercontainer, ...props.style}}>
            <Text style={{...styles.number, ...props.style}}>{props.children}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    numbercontainer: {
        borderWidth:2,
        borderRadius:10,
        borderColor: Colors.forstart,
        padding:10,
        marginVertical:10,
        textAlign:"center",
        justifyContent:"center",
    },
    number: {
        color: Colors.lower,
        fontSize:22,
    }
})

export default Numbercontainer;