import React, {useState, useEffect} from 'react';
import {
    View,
    Text,
    StyleSheet,
    TextInput,
    Button,
    TouchableWithoutFeedback,
    Keyboard,
    Alert,
    Dimensions,
    ScrollView,
    KeyboardAvoidingView,
    
} from 'react-native';
import Card from '../Components/Card';
import Colors from '../Constants/Colors';
import Input from '../Components/Input';
import Numbercontainer from '../Components/Numbercontainer';
import Mainbutton from '../Components/Mainbutton';

const StartGameScreen = (props) => {

    const [enteredValue, setEnteredValue] = useState('')
    const [confirmedValue, setConfirmedValue] = useState(false)
    const [selectedNumber, setSelectedNumber] = useState()
    const [buttonStyle, setButtonStyle] = useState(Dimensions.get('window').width / 4)

    useEffect(() => {
        const changeButtonHandler = () => {
            setButtonStyle(Dimensions.get('window').width / 5)
        }
           Dimensions.addEventListener('change', changeButtonHandler)
        return () => {
            Dimensions.removeEventListener('change', changeButtonHandler)
        }
    })

    const inputChangeHandler = (textInput) => {
        setEnteredValue(textInput.replace(/[^0-9]/g, ''))
    }

    const resetHandler = () => {
        setEnteredValue('')
        setConfirmedValue(false)
    }

    const confirmedValueHandler = () => {
        const chosenNumber = parseInt(enteredValue);
        if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
            Alert.alert('Invalid number!', 'Add between 1 and 99.', [
                {
                    text: 'im understand',
                    style: 'default',
                    onPress: resetHandler
                }
            ]);
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
                <Mainbutton whenPress={() => props.onStartGame(selectedNumber)}>
                    START GAME</Mainbutton>
            </Card>
        );
    }

    return (
        <ScrollView>
            <KeyboardAvoidingView
                behavior="padding"
                keyboardVerticalOffset={30}
                style={{ flex: 1 }}>
                <TouchableWithoutFeedback
                    onPress={() => {
                    Keyboard.dismiss()
                }}>
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
                                autoCorrect={false}/>
                            <View style={styles.buttonsarea}>
                                <View
                                    style={{
                                    width: buttonStyle
                                }}>
                                    <Button color={Colors.accent} title="Reset" onPress={resetHandler}/>
                                </View>
                                <View
                                    style={{
                                    width: buttonStyle
                                }}>
                                    <Button color={Colors.primary} title="Confirm" onPress={confirmedValueHandler}/>
                                </View>
                            </View>
                        </Card>
                        {confirmedOutput}
                    </View>
                </TouchableWithoutFeedback>
            </KeyboardAvoidingView>
        </ScrollView>
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
        marginVertical: 10,
        fontFamily: 'open-sans-bold'
    },
    inputarea: {
        width: '80%',
        maxWidth: '95%',
        minWidth: 300,
        alignItems: 'center'
    },
    buttonsarea: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
        paddingHorizontal: 30
    },

    inputcom: {
        textAlign: "center",
        width: 50,
        maxWidth: 100
    },
    summaryContainer: {
        marginTop: 20,
        alignItems: 'center'
    }

})

export default StartGameScreen;