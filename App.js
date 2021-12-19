/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import Colors from './theme/Colors';

import Header from './components/Header';
import StartGameScreen from './screens/StartGameScreen';
import GameScreen from './screens/GameScreen';
import GameOver from './screens/GameOver';

const App = () => {
  const [userNumber, setUserNumber] = useState();
  const [guessRound, setGuessRound] = useState(0);

  const startGameHandler = selectedNumber => {
    setUserNumber(selectedNumber);
    setGuessRound(0);
  };
  const gameOverHandler = numOfRounds => {
    setGuessRound(numOfRounds);
  };

  let content = (
    <GameOver userNumber={1} rounds={1} onStart={startGameHandler} />
  );
  if (userNumber && guessRound <= 0) {
    content = (
      <GameScreen userChoice={userNumber} onGameOver={gameOverHandler} />
    );
  } else if (guessRound > 0) {
    content = (
      <GameOver
        userNumber={userNumber}
        rounds={guessRound}
        onStart={startGameHandler}
      />
    );
  }

  return (
    <>
      <SafeAreaView style={styles.safeArea}>
        <ScrollView>
          <View>
            <Header title={'Guess a score'} />
          </View>
        </ScrollView>
      </SafeAreaView>
      {content}
    </>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    backgroundColor: Colors.primary,
  },
});

export default App;
