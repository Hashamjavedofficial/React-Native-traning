import React from 'react';
import {View, StyleSheet, Text, TextInput, Button} from 'react-native';

import Card from '../components/Card';

const StartGameScreen = props => {
  return (
    <View style={styles.screen}>
      <Text style={styles.title}>Start a new Game!</Text>
      <Card style={styles.textContainer}>
        <Text>Select a Number</Text>
        <TextInput style={styles.input} />
        <View style={styles.buttonContainer}>
          <Button title="Reset" />
          <Button title={'Confirm'} />
        </View>
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
  title: {
    fontSize: 20,
    marginVertical: 20,
  },
  buttonContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  textContainer: {
    width: 300,
    maxWidth: '80%',
    alignItems: 'center',
  },
  input: {
    marginVertical: 10,
    borderWidth: 1,
    padding: 10,
    width: '60%',
    borderRadius: 18,
    borderColor: 'grey',
  },
});

export default StartGameScreen;
