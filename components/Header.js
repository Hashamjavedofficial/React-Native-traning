import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

import Colors from '../theme/Colors';
import Fonts from '../theme/Fonts';

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
    fontFamily: Fonts.openSansBold,
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
