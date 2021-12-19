import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import Colors from '../theme/Colors';

const MainButton = props => {
  const {onPress, type = 'primary'} = props;
  return (
    <TouchableOpacity onPress={onPress} activeOpacity={0.7}>
      <View style={{...styles.container, ...styles[type]}}>
        <Text style={styles.text}>{props.children}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 12,
    paddingHorizontal: 28,
    borderRadius: 10,
  },
  primary: {
    backgroundColor: Colors.primary,
  },
  secondary: {
    backgroundColor: Colors.secondary,
  },
  text: {
    color: 'white',
  },
});
export default MainButton;
