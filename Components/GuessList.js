import React from 'react';
import { View, Text, StyleSheet } from 'react-native';


const Guesslist = (props) => {
    return(
        <View style={styles.listitem}>
            <Text style={styles.numbersty}>{props.title}</Text>
        </View>
    )
 }

const styles = StyleSheet.create({
    listitem: {
        height:60,
        paddingHorizontal:100,
        backgroundColor:'lightgreen',
        margin: 15,
        justifyContent:"center",
        borderWidth:1,
        borderColor: 'white'
    },
    numbersty: {
        fontSize: 22,
        fontFamily: 'open-sans-bold',
        color:'white'
    }
})

export default Guesslist;