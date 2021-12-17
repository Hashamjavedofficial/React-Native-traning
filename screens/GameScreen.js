import React, {useState} from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';

import NumberContainer from '../components/NumberContainer';
import Card from '../components/Card';

const generateRandomNumber = (min, max, exclude) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  const randomNumber = Math.floor(Math.random() * (max - min)) + min;
  if (randomNumber === exclude) {
    return generateRandomNumber(min, max, exclude);
  } else {
    return randomNumber;
  }
};

const GameScreen = props => {
  const {userChoice} = props;
  const [currentGuess, setCurrentGuess] = useState(
    generateRandomNumber(1, 100, userChoice),
  );

  return (
    <View style={styles.screen}>
      <Text>Opponent Guess</Text>
      <NumberContainer>{currentGuess}</NumberContainer>
      <Card style={styles.buttonContainer}>
        <Button title="Lower" />
        <Button title="Greater" />
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    alignItems: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    marginTop: 20,
    justifyContent: 'space-around',
    width: 300,
    maxWidth: '80%',
  },
});
export default GameScreen;
