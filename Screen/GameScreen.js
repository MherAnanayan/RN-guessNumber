import React, {useState, useRef, useEffect} from 'react';
import {View, Text, StyleSheet, Button, Alert} from 'react-native';
import Numbercontainer from '../Components/Numbercontainer';
import Card from '../Components/Card';
import Colors from '../Constants/Colors';
import Defaultstyles from '../Constants/Defaultstyles';
import Mainbutton from '../Components/Mainbutton';
import {Ionicons} from '@expo/vector-icons';
import Guesslist from '../Components/GuessList';

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
    const [listItem, setListItem] = useState([])
        
    const currentLow = useRef(1);
    const currentHigh = useRef(100);

    const {userChoice, onEndGame} = props

    useEffect(() => {
        if (currentGuess == userChoice) {
            onEndGame(endGame);
        }
    }, [currentGuess, userChoice, onEndGame]);

    const addListItem = (title) => {
        setListItem(prev => [
            ...prev,
            {
                id: Date.now().toString(),
                title
            }
        ])
    }

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
        addListItem(nextNumber)
        
    }
    
    return (
        <View style={styles.screen}>
            <Text style={Defaultstyles.bodytxt}>Opponent's Guess</Text>
            <Numbercontainer style={styles.numbercontainer}><Text style={styles.textstyle}>{currentGuess}</Text></Numbercontainer>
            <Card style={styles.screencard}>
                <Mainbutton color={Colors.lower}  whenPress={nextGuessHandler.bind(this, 'LOWER')}>
                    <Ionicons name="md-remove" size={24} color="black" />
                </Mainbutton>
                <Mainbutton  title="GREATER" whenPress={nextGuessHandler.bind(this, 'GREATER')}>
                    <Ionicons name="md-add" size={24} color="white" />
                </Mainbutton>
            </Card>
            <View>
                {listItem.map(item => <Guesslist key={item.id} title={item.title} />)}
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 10,
        alignItems: 'center'
    },
    numbercontainer: {
        borderColor: '#5a7502',
        
    },
    textstyle: {
        color: 'red'
    },
    screencard: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 20,
        width: 300,
        maxWidth: '80%'
    },
})

export default GameScreen;