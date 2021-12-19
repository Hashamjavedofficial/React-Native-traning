import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

import Colors from '../theme/Colors';

const styles = StyleSheet.create({
  header: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.primary,
    height: 70,
  },
  headerTitle: {
    fontSize: 30,
    fontFamily: 'ImperialScript-Regular',
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
