import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Header from './Components/Header';
import StartGameScreen from './Screen/StartGameScreen';
import GameScreen from './Screen/GameScreen';
import GameEndScreen from './Screen/GameEndScreen';
import GameEndScreend from './Screen/GameEndScreen';
import * as Font from 'expo-font';
import { AppLoading } from 'expo';

const fetchFonts = () => {
    return Font.loadAsync({
        'open-sans': require('./assets/Fonts/OpenSans-Regular.ttf'),
        'open-sans-bold': require('./assets/Fonts/OpenSans-Bold.ttf')
    })
}

export default function App() {

  const [userNumber, setUserNumber] = useState()
  const [endNumber, setEndNumber] = useState(0 )
  const [loadData, setLoadData] = useState(false)

  if (!loadData) {
      return (
          <AppLoading 
              startAsync={fetchFonts}
              onFinish={() => setLoadData(true)}
              onError={(err)=> console.log(err)}
              />
      );
  }

  const startGameHandler = (selectedNumber) => {
      setUserNumber(selectedNumber)
      
  }
const gameEndHandler = (guessdNumber) => {
    setEndNumber(guessdNumber)
}

    const newGameHandler = () => {
        setUserNumber(null);
        setEndNumber(0)
    };
    let content = <StartGameScreen onStartGame={startGameHandler}/>

    if (userNumber && endNumber<=0) {
        content = (
            <GameScreen userChoice={userNumber} onEndGame={gameEndHandler} />
        ) 
    }
    else if (endNumber>0) {
        content = (
            <GameEndScreend 
                  choosenNumber={userNumber} 
                  numberOfRounds={endNumber}
                  configNewGame={newGameHandler} />
        )
    }
    return (
        <View style={styles.container}>
            <Header title="Guess Number"/>
            {content}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:'#c1f5d6'
    }
});
