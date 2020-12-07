import React from 'react';
import { View, Text, StyleSheet, Button, Image } from 'react-native';
import Colors from '../Constants/Colors';


const GameEndScreend = (props) => {
    return(
        <View style={styles.screen}>
            <Text style={styles.gameOvertxt}>Game Over</Text>
            <View style={styles.imgcontainer}>
                <Image style={styles.image} //source={require('../assets/success.png')} 
                    source={{ uri:'https://cdn.britannica.com/85/199085-050-DC75F6D0/Mount-Ararat-Turkey.jpg'}}/>
            </View>
            <Text style={styles.choosenNumber}>Number of rounds:{props.numberOfRounds}</Text>
            <Text style={styles.numberwas}>Number was:{props.choosenNumber}</Text>
            <Button  color={Colors.forstart} title="Start New Game!!!" onPress={props.configNewGame}/>
        </View>
    )
 }

const styles = StyleSheet.create({
    screen: {
        flex:1,
        justifyContent:"center",
        alignItems: "center"
    },
    imgcontainer: {
        width:300,
        height:300,
        marginVertical:30 ,
    },
    image: {
        width:'100%',
        height: '100%',
        borderRadius: 150,
    },
    choosenNumber: {
        fontSize:15,
        margin:1,
    },
    gameOvertxt:{
        fontSize:35
    },
    numberwas: {
        fontSize: 15,
        paddingBottom:30
    }

})

export default GameEndScreend;