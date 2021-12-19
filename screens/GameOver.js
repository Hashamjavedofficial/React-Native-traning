import React from 'react';
import {Text, View, StyleSheet, Button} from 'react-native';

const GameOver = props => {
  const {rounds, onStart, userNumber} = props;
  return (
    <View style={styles.screen}>
      <Text>The Game is Over!</Text>
      <Text>Number of rounds: {rounds}</Text>
      <Text>User Number: {userNumber}</Text>
      <Button title={'Start Game'} onPress={() => onStart(null)} />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default GameOver;
