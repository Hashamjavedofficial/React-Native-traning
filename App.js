/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import Header from './components/Header';
import StartGameScreen from './screens/StartGameScreen';

const App = () => {
  return (
    <>
      <SafeAreaView style={styles.safeArea}>
        <ScrollView>
          <View>
            <Header title={'Guess a score'} />
          </View>
        </ScrollView>
      </SafeAreaView>
      <StartGameScreen />
    </>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    backgroundColor: 'green',
  },
});

export default App;
