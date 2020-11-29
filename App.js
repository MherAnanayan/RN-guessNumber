import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from './Components/Header';
import StartGameScreen from './Screen/StartGameScreen';

export default function App() {
  return (
    <View style={styles.container}>
      <Header title="Guess number"/>
      <StartGameScreen/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    
    
  },
});
