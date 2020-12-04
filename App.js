import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Header from './Components/Header';
import StartGameScreen from './Screen/StartGameScreen';
import GameScreen from './Screen/GameScreen';
import GameEndScreen from './Screen/GameEndScreen';
import GameEndScreend from './Screen/GameEndScreen';

export default function App() {

  const [userNumber, setUserNumber] = useState()
  const [endNumber, setEndNumber] = useState(0)


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
                  ChoosenNumber={userNumber} 
                  configNewGame={newGameHandler} />
        )
    }
    return (
        <View style={styles.container}>
            <Header title="Guess number"/>
            {content}
            
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
});
