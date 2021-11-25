import React from 'react';
import {View, StyleSheet, Text, TextInput, Button} from 'react-native';

const StartGameScreen = props => {
  return (
    <View style={styles.screen}>
      <Text style={styles.title}>Start a new Game!</Text>
      <View style={styles.textContainer}>
        <Text>Select a Number</Text>
        <TextInput style={styles.input} />
        <View style={styles.buttonContainer}>
          <Button title="Reset" />
          <Button title={'Confirm'} />
        </View>
      </View>
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
    marginVertical: 10,
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
    shadowColor: 'black',
    shadowOffset: {width: 0, height: 2},
    shadowRadius: 6,
    shadowOpacity: 0.26,
    elevation: 5,
    backgroundColor: 'white',
    padding: 18,
    borderRadius: 20,
  },
  input: {
    marginVertical: 10,
    borderColor: 'black',
  },
});

export default StartGameScreen;
