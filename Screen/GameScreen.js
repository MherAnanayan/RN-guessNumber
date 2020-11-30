import React, {useState} from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import Numbercontainer from '../Components/Numbercontainer';
import Card from  '../Components/Card';

const randomNumberGenerator = (min, max, ourNum) => {

    min = Math.ceil(min)
    max = Math.floor(max)
    const rndNum = Math.floor(Math.random() * (max - min)) + min;
    if (rndNum === ourNum) {
        return generateRandomBetween(min, max, ourNum);
    } else {
        return rndNum;
    }
}


const GameScreen = (props) => {
    const [curentGuess, setCurentGuess] = useState(randomNumberGenerator(1, 100, props.userChoise ))

    const lowerHandler = () => {
        setCurentGuess(randomNumberGenerator(1, 100,props.userChoise ))
    }
    return(
        <View style={styles.screen}>
            <Text>Opponent's Guess</Text>
            <Numbercontainer>{curentGuess}</Numbercontainer>
            <Card style={styles.screencard}>
                <Button title="LOWER" onPress={lowerHandler} />
                <Button title="GREATER" onPress={() => { }} />
            </Card>
        </View>
    )
 }

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 10,
        alignItems: 'center'
    },
    screencard: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 20,
        width: 300,
        maxWidth: '80%'
    }
})

export default GameScreen;