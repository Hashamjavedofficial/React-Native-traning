import React, {useState, useEffect} from 'react';
import {
  View,
  StyleSheet,
  Text,
  TextInput,
  Button,
  Keyboard,
  TouchableWithoutFeedback,
  Alert,
  Dimensions,
  ScrollView,
  KeyboardAvoidingView,
} from 'react-native';

import Card from '../components/Card';
import Input from '../components/Input';
import NumberContainer from '../components/NumberContainer';
import BodyText from '../components/BodyText';
import MainButton from '../components/MainButton';

import Colors from '../theme/Colors';

const StartGameScreen = props => {
  const {startGame} = props;

  const [value, setValue] = useState();
  const [selectedNumber, setSelectedNumber] = useState();
  const [isConfirmed, setIsConfirmed] = useState();
  const [buttonWidth, setButtonWidth] = useState(
    Dimensions.get('window').width / 4,
  );

  useEffect(() => {
    const updateLayout = () => {
      setButtonWidth(
        Dimensions.get('window').width > 600
          ? Dimensions.get('window').width / 6
          : Dimensions.get('window').width / 4,
      );
    };
    Dimensions.addEventListener('change', updateLayout);

    return () => {
      Dimensions.removeEventListener('change', updateLayout);
    };
  });
  const inputHandler = value => {
    const inputValue = value.replace(/[^0-9]/g, ' ');
    setValue(inputValue);
  };

  const resetHandler = () => {
    setValue('');
  };
  const confirmHandler = () => {
    const choosenNumber = parseInt(value);
    if (choosenNumber > 99 || isNaN(choosenNumber) || choosenNumber <= 0) {
      Alert.alert('Invalid Number', 'Value between 1 and 100!', [
        {text: 'Okay', style: 'destructive', onPress: resetHandler},
      ]);
      return false;
    }
    setSelectedNumber(choosenNumber);
    setIsConfirmed(true);
    setValue('');
    Keyboard.dismiss();
  };

  let confirmedMessage;
  if (isConfirmed) {
    confirmedMessage = (
      <Card style={{marginTop: 20, alignItems: 'center'}}>
        <Text>Chosen number</Text>
        <NumberContainer>{selectedNumber}</NumberContainer>
        <MainButton onPress={() => startGame(selectedNumber)}>
          START GAME
        </MainButton>
      </Card>
    );
  }

  return (
    <ScrollView>
      <KeyboardAvoidingView behavior={'padding'} keyboardVerticalOffset={30}>
        <TouchableWithoutFeedback
          onPress={() => {
            Keyboard.dismiss();
          }}>
          <View style={styles.screen}>
            <BodyText type={'title'}>Start a new Game!</BodyText>
            <Card style={styles.textContainer}>
              <BodyText>Select a Number</BodyText>
              <Input
                keyboardType={'numeric'}
                maxLength={2}
                style={styles.input}
                value={value}
                onChangeText={inputHandler}
              />
              <View style={styles.buttonContainer}>
                <View style={{width: buttonWidth}}>
                  <Button
                    onPress={resetHandler}
                    color={Colors.secondary}
                    title="Reset"
                  />
                </View>
                <View style={{width: buttonWidth}}>
                  <Button
                    onPress={confirmHandler}
                    color={Colors.primary}
                    title={'Confirm'}
                  />
                </View>
              </View>
            </Card>
            {confirmedMessage}
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </ScrollView>
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
    fontFamily: 'OpenSans-Bold',
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
    width: Dimensions.get('window').width / 6,
  },
  input: {
    width: '40%',
    textAlign: 'center',
  },
});

export default StartGameScreen;
