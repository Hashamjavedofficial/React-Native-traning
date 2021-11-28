import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Colors from '../theme/Colors';

const NumberContainer = props => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{props.children}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: Colors.secondary,
    borderWidth: 2,
    marginVertical: 10,
    padding: 10,
    borderRadius: 10,
  },
  text: {
    fontSize: 16,
    color: Colors.primary,
  },
});

export default NumberContainer;
