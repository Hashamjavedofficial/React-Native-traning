import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  header: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'green',
    height: 70,
  },
  headerTitle: {
    fontSize: 20,
  },
});

const Header = props => {
  return (
    <View style={styles.header}>
      <Text style={styles.headerTitle}> {props.title}</Text>
    </View>
  );
};

export default Header;
