import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Colors from '../Constants/Colors';
import Defaultstyles from '../Constants/Defaultstyles';


const Header = (props) => {
    return (
        <View style={styles.header}>
            <Text style={{ ...styles.headertext, ...Defaultstyles.headertxt}}>{props.title}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        paddingTop:30,
        backgroundColor: Colors.primary,
        width: '100%',
        height: 90,
        alignItems: "center",
        justifyContent: "center"
    },
    headertext: {
        fontSize: 20
    }
})
export default Header;