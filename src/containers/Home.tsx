import {StyleSheet, View} from 'react-native';
import React from 'react';
import Header from '../components/Header';
import ListCategories from '../components/ListCategories';
import {Colors} from '../styles/Colors';

type Props = {};

const Home = (props: Props) => {
  return (
    <View style={styles.container}>
      <Header info={'JAKMALL TEST - RAKHMAT'} />
      <ListCategories />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.WHITE_BACKGROUND,
  },
});
