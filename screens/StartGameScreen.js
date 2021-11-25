import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  Text,
  TextInput,
  Button,
  Keyboard,
  TouchableWithoutFeedback,
} from 'react-native';

import Card from '../components/Card';
import Input from '../components/Input';

import Colors from '../theme/Colors';

const StartGameScreen = props => {
  const [value, setValue] = useState();
  const inputHandler = value => {
    setValue(value.replace(/[^0-9]/g, ''));
  };
  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}>
      <View style={styles.screen}>
        <Text style={styles.title}>Start a new Game!</Text>
        <Card style={styles.textContainer}>
          <Text>Select a Number</Text>
          <Input
            autoCapitalize={false}
            autoComplete={false}
            keyboardType={'number-pad'}
            maxLength={2}
            style={styles.input}
            value={value}
            onChangeText={() => {}}
          />
          <View style={styles.buttonContainer}>
            <View style={[styles.button]}>
              <Button color={Colors.secondary} title="Reset" />
            </View>
            <View style={[styles.button]}>
              <Button color={Colors.primary} title={'Confirm'} />
            </View>
          </View>
        </Card>
      </View>
    </TouchableWithoutFeedback>
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
  button: {
    width: 100,
  },
  input: {
    width: '40%',
    textAlign: 'center',
  },
});

export default StartGameScreen;
