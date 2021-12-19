import React from 'react';
import {Text, View, StyleSheet, Button, Image} from 'react-native';

import BodyText from '../components/BodyText';
import MainButton from '../components/MainButton';

const GameOver = props => {
  const {rounds, onStart, userNumber} = props;
  return (
    <View style={styles.screen}>
      <BodyText type={'title'}>The Game is Over!</BodyText>
      <View style={styles.imageContainer}>
        <Image
          fadeDuration={2000}
          // source={require('../assets/success.png')}
          source={{
            uri: 'https://avatars.mds.yandex.net/i?id=55e0988fc2c4cf815be2647a8371284f-4797711-images-thumbs&n=13&exp=1',
          }}
          resizeMode={'cover'}
          style={styles.image}
        />
      </View>

      <BodyText>Number of rounds: {rounds}</BodyText>
      <BodyText>User Number: {userNumber}</BodyText>
      <MainButton onPress={() => onStart(null)}>Start Game</MainButton>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  imageContainer: {
    width: 300,
    height: 300,
    marginVertical: 20,
    borderRadius: 150,
    borderColor: 'black',
    overflow: 'hidden',
    borderWidth: 2,
  },
});
export default GameOver;
