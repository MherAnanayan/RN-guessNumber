import React, {useState, useRef, useEffect} from 'react';
import {View, Text, StyleSheet, Button, Alert} from 'react-native';
import Numbercontainer from '../Components/Numbercontainer';
import Card from '../Components/Card';
import Colors from '../Constants/Colors';

const randomNumberGenerator = (min, max, exclude) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    const rndNum = Math.floor(Math.random() * (max - min)) + min;
    if (rndNum === exclude) {
        return randomNumberGenerator(min, max, exclude);
    } else {
        return rndNum;
    }
};

const GameScreen = (props) => {
    const [currentGuess, setCurentGuess] = useState(randomNumberGenerator(1, 100, props.userChoice))
    const [endGame, setEndGame] = useState(0)

    const currentLow = useRef(1);
    const currentHigh = useRef(100);

    const {userChoice, onEndGame} = props

    useEffect(() => {
        if (currentGuess == userChoice) {
            onEndGame(endGame);
        }
    }, [currentGuess, userChoice, onEndGame]);

    const nextGuessHandler = (dir) => {
        if ((dir === 'LOWER' && currentGuess < props.userChoice) || 
           (dir === 'GREATER' && currentGuess > props.userChoice)) {
            Alert.alert("Don't lie!", '', [
                {
                    text: 'Sorry!',
                    style: 'cancel'
                }
            ]);
            return;
        }
        if (dir === "LOWER") {
            currentHigh.current = currentGuess
        } else {
            currentLow.current = currentGuess
        }
        const nextNumber = randomNumberGenerator(currentLow.current, currentHigh.current, currentGuess)
        setCurentGuess(nextNumber)
        setEndGame(prev => prev + 1)

    }
    return (
        <View style={styles.screen}>
            <Text>Opponent's Guess</Text>
            <Numbercontainer>{currentGuess}</Numbercontainer>
            <Card style={styles.screencard}>
                <Button color={Colors.lower} title="LOWER" onPress={nextGuessHandler.bind(this, 'LOWER')}/>
                <Button color={Colors.xar} title="GREATER" onPress={nextGuessHandler.bind(this, 'GREATER')}/>
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