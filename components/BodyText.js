import React from 'react';
import {Text, StyleSheet} from 'react-native';

const BodyText = props => {
  const {type = 'body'} = props;
  return <Text style={styles[type]}>{props.children}</Text>;
};

const styles = StyleSheet.create({
  body: {
    fontFamily: 'OpenSans-Regular',
  },
  title: {
    fontFamily: 'OpenSans-Bold',
    fontSize: 20,
    marginBottom: 10,
  },
});
export default BodyText;
