import React, {useState, useRef, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Button,
  Alert,
  ScrollView,
  Dimensions,
} from 'react-native';

import NumberContainer from '../components/NumberContainer';
import Card from '../components/Card';
import MainButton from '../components/MainButton';
import BodyText from '../components/BodyText';

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
  const {userChoice, onGameOver} = props;
  const initialRound = generateRandomNumber(1, 100, userChoice);
  const [currentGuess, setCurrentGuess] = useState(initialRound);
  const [rounds, setRounds] = useState([initialRound]);
  const [deviceHeight, setDeviceHeight] = useState(
    Dimensions.get('window').height,
  );

  let currentLow = useRef(1);
  let currentHigh = useRef(100);

  const nextGuessHandler = direction => {
    if (
      (direction === 'lower' && currentGuess < userChoice) ||
      (direction === 'greater' && currentGuess > userChoice)
    ) {
      Alert.alert("Don't lie!", 'You know that this is wrong...', [
        {text: 'Sorry!!', style: 'cancel'},
      ]);
      return;
    }
    if (direction === 'lower') {
      currentHigh.current = currentGuess;
    } else {
      currentLow.current = currentGuess;
    }
    const nextNumber = generateRandomNumber(
      currentLow.current,
      currentHigh.current,
      currentGuess,
    );
    setCurrentGuess(nextNumber);
    setRounds([...rounds, nextNumber]);
  };

  useEffect(() => {
    if (currentGuess === userChoice) {
      onGameOver(rounds.length);
    }
  }, [currentGuess]);
  useEffect(() => {
    const updateLayout = () => {
      setDeviceHeight(Dimensions.get('window').height);
    };
    Dimensions.addEventListener('change', updateLayout);
    return () => {
      Dimensions.removeEventListener('change', updateLayout);
    };
  });
  let content;
  if (deviceHeight < 600) {
    content = (
      <View style={styles.screen}>
        <Text>Opponent Guess</Text>
        <Card style={styles.buttonContainerLandscape}>
          <MainButton
            type={'secondary'}
            onPress={() => nextGuessHandler('lower')}>
            Lower
          </MainButton>
          <NumberContainer>{currentGuess}</NumberContainer>
          <MainButton
            type={'secondary'}
            onPress={() => nextGuessHandler('greater')}>
            Greater
          </MainButton>
        </Card>
        <View style={styles.list}>
          <ScrollView>
            {rounds.map((item, index) => (
              <View key={item + index} style={styles.listItem}>
                <BodyText>#{index + 1}</BodyText>
                <BodyText>{item}</BodyText>
              </View>
            ))}
          </ScrollView>
        </View>
      </View>
    );
  } else {
    content = (
      <View style={styles.screen}>
        <Text>Opponent Guess</Text>
        <NumberContainer>{currentGuess}</NumberContainer>
        <Card style={styles.buttonContainer}>
          <MainButton
            type={'secondary'}
            onPress={() => nextGuessHandler('lower')}>
            Lower
          </MainButton>
          <MainButton
            type={'secondary'}
            onPress={() => nextGuessHandler('greater')}>
            Greater
          </MainButton>
        </Card>
        <View style={styles.list}>
          <ScrollView>
            {rounds.map((item, index) => (
              <View key={item + index} style={styles.listItem}>
                <BodyText>#{index + 1}</BodyText>
                <BodyText>{item}</BodyText>
              </View>
            ))}
          </ScrollView>
        </View>
      </View>
    );
  }

  return <>{content}</>;
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    alignItems: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    marginTop: Dimensions.get('window').height / 30,
    justifyContent: 'space-between',
    width: 300,
    maxWidth: '80%',
  },
  buttonContainerLandscape: {
    flexDirection: 'row',
    marginTop: Dimensions.get('window').height / 30,
    justifyContent: 'space-between',
    width: '80%',
    maxWidth: '80%',
    alignItems: 'center',
  },
  listItem: {
    padding: 15,
    marginVertical: 10,
    borderColor: '#ccc',
    borderWidth: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  list: {
    flex: 1,
    width: Dimensions.get('window').width <= 350 ? '80%' : '60%',
  },
});
export default GameScreen;
