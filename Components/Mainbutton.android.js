import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, TouchableNativeFeedback, Platform} from 'react-native';
import Colors from '../Constants/Colors';

const Mainbutton = (props) => {

    let ButtonComponent = TouchableOpacity;
    if (Platform.Version>=21) {
        buttonComponent = TouchableNativeFeedback;
    }
    return (
        <View style={styles.buttonContainer}>
            <ButtonComponent  onPress={props.whenPress}>
                <View style={styles.buttonArea}>
                    <Text style={styles.button}>{props.children}</Text>
                </View>
            </ButtonComponent>
        </View>
    )
}

const styles = StyleSheet.create({
    buttonContainer: {
        borderRadius:25,
        overflow: "hidden",
    },
    buttonArea: {
        backgroundColor: Colors.primary,
        paddingHorizontal: 30,
        paddingVertical: 12,
        borderRadius: 25
    },
    button: {
        fontFamily: 'open-sans',
        fontSize: 18,
        color: 'white',
        justifyContent: "center",
        alignItems: "center"
    }
})

export default Mainbutton;