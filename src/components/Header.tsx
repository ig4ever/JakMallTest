import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Colors} from '../styles/Colors';
import {TextFont} from '../styles/Text';

type Props = {
  info: string;
};

const Header = ({info}: Props) => {
  return (
    <View style={styles.container}>
      <Text style={TextFont.TEXT_14SP_BOLD}>{info}</Text>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: Colors.WHITE,
    alignItems: 'center',
  },
});
