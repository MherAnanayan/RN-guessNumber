import React, {useState} from 'react';
import {View, Text, StyleSheet, TextInput, Button, TouchableWithoutFeedback, Keyboard, Alert} from 'react-native';
import Card from '../Components/Card';
import Colors from '../Constants/Colors';
import Input from '../Components/Input';
import Numbercontainer from '../Components/Numbercontainer';

const StartGameScreen = (props) => {

    const [enteredValue, setEnteredValue] = useState('')
    const [confirmedValue, setConfirmedValue] = useState(false)
    const [selectedNumber, setSelectedNumber] = useState()

    const inputChangeHandler = (textInput) => {
        setEnteredValue(textInput.replace(/[^0-9]/g, ''))
    }

    const resetHandler = () => {
        setEnteredValue('')
        
    }

    const confirmedValueHandler = () => {
        const chosenNumber = parseInt(enteredValue);
        if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
            Alert.alert(
                'Invalid number!',
                'Add between 1 and 99.',
                [{ text: 'im understand', style: 'default', onPress: resetHandler }]
            );
            return;
        }

        setConfirmedValue(true)
        setSelectedNumber(enteredValue)
        setEnteredValue('')
        
        
    }

    let confirmedOutput;

    if (confirmedValue) {
        confirmedOutput = (
            <Card style={styles.summaryContainer}>
                <Text>You selected</Text>
        <Numbercontainer>{selectedNumber}</Numbercontainer>
                <Button color={Colors.forstart} title="START GAME" />
            </Card>
        );
    }
    
    return (
        <TouchableWithoutFeedback onPress={()=>{ Keyboard.dismiss()}}>
        <View style={styles.screen}>
            <Text style={styles.screentitle}>The a New Game</Text>
            <Card style={styles.inputarea}>
                <Text>Select a Number</Text>
                <Input
                    style={styles.inputcom}
                    blurOnSubmit
                    maxLength={2}
                    keyboardType='number-pad'
                    onChangeText={inputChangeHandler}
                    value={enteredValue}
                    autoCorrect={false}
                    />
                <View style={styles.buttonsarea}>
                    <View style={styles.buttons}>
                        <Button  color={Colors.accent} title="Reset" onPress={resetHandler}/>
                    </View>
                    <View style={styles.buttonr}>
                        <Button color={Colors.primary} title="Confirm" onPress={confirmedValueHandler}/>
                    </View>
                </View>
            </Card>
    {confirmedOutput}
        </View>
        </TouchableWithoutFeedback>
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 10,
        alignItems: "center"
    },
    screentitle: {
        fontSize: 20,
        marginVertical: 10
    },
    inputarea: {
        alignItems: "center",
        width: 300,
        maxWidth: '80%'
    },
    buttonsarea: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
        paddingHorizontal: 30
    },
    buttons: {
        width: 80
    },
    inputcom: {
        textAlign: "center",
        minWidth:40
    },
    summaryContainer: {
        marginTop: 20,
        alignItems: 'center'
    }

})

export default StartGameScreen;