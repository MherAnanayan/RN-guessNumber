import React, {useState, useRef, useEffect} from 'react';
import {View, Text, StyleSheet, Button, Alert, ScrollView, Dimensions} from 'react-native';
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
    const [listItem, setListItem] = useState([currentGuess])
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
               title
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
            currentLow.current = currentGuess + 1
        }
        const nextNumber = randomNumberGenerator(currentLow.current, currentHigh.current, currentGuess)
        setCurentGuess(nextNumber)
        setEndGame(prev => prev + 1)
        addListItem(nextNumber)
        
    }
    
    return (
        <ScrollView>
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
            <View style={styles.listarea}>
                <ScrollView contentContainerStyle={styles.list}>
                    {listItem.map(item => <Guesslist key={item} title={item} />)}
                </ScrollView>
            </View>
        </View>
        </ScrollView>
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
        marginTop: Dimensions.get('window').height > 600 ? 20 : 5,
        width: 300,
        maxWidth: '80%'
    },
    list:{
        flexGrow:1
    },
    listarea:{
        flex:1,
        height:"100%"
    }
})

export default GameScreen;