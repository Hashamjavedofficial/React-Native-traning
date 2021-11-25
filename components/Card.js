import React from 'react';
import {View, StyleSheet} from 'react-native';

const Card = props => {
  const {style} = props;
  return (
    <View
      style={{
        ...styles.textContainer,
        ...style,
      }}>
      {props.children}
    </View>
  );
};

const styles = StyleSheet.create({
  textContainer: {
    shadowColor: 'black',
    shadowOffset: {width: 0, height: 2},
    shadowRadius: 6,
    shadowOpacity: 0.26,
    elevation: 5,
    backgroundColor: 'white',
    padding: 18,
    borderRadius: 20,
  },
});
export default Card;
