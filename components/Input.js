import React from 'react';
import {TextInput, StyleSheet} from 'react-native';

const Input = props => {
  return <TextInput {...props} style={{...styles.input, ...props.style}} />;
};

const styles = StyleSheet.create({
  input: {
    marginVertical: 10,
    borderWidth: 1,
    padding: 10,
    width: '60%',
    borderRadius: 18,
    borderColor: 'grey',
  },
});

export default Input;
