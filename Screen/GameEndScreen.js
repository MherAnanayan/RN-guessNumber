import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import Colors from '../Constants/Colors';


const GameEndScreend = (props) => {
    return(
        <View style={styles.screen}>
            <Text>Game Over</Text>
            <Text style={styles.choosenNumber}>{props.ChoosenNumber}</Text>
            <Button color={Colors.forstart} title="Start New Game!!!" onPress={props.configNewGame}/>
        </View>
    )
 }

const styles = StyleSheet.create({
    screen: {
        flex:1,
        justifyContent:"center",
        alignItems: "center"
    },
    choosenNumber: {
        fontSize:20,
        margin:10,
    }

})

export default GameEndScreend;