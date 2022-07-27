import {Alert, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {Colors} from '../styles/Colors';
import {TypeCategories} from '../types/Categories';
import TextFont from '../styles/Text';
import Ripple from 'react-native-material-ripple';

type Props = {
  data: any;
};

const RenderItemChild = (props: Props) => {
  const {data} = props;

  const onPress = () => {
    Alert.alert(data?.category, data?.joke);
  };

  return (
    <Ripple
      onPress={onPress}
      style={{backgroundColor: Colors.WHITE, padding: 10}}>
      <Text style={[TextFont.TEXT_14SP_MEDIUM]}>{data?.joke}</Text>
    </Ripple>
  );
};

export default React.memo(RenderItemChild);

const styles = StyleSheet.create({
  wrapperCollapsibleList: {
    flex: 1,
    marginTop: 20,
    overflow: 'hidden',
    backgroundColor: Colors.WHITE,
    borderRadius: 5,
  },
});
