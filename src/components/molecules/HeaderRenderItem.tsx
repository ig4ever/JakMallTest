import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import ButtonGoTop from '../atoms/ButtonGoTop';
import {ArrowDown} from '../../assets';
import TextFont from '../../styles/Text';
import {Colors} from '../../styles/Colors';

type Props = {
  index: number;
  data: string;
};

const HeaderRenderItem = (props: Props) => {
  const {index, data} = props;

  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: Colors.RED,
        padding: 16,
      }}>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <Text
          style={[
            TextFont.TEXT_12SP_BOLD,
            {color: Colors.WHITE, marginLeft: 10},
          ]}>
          {index}
        </Text>
        <Text
          style={[
            TextFont.TEXT_12SP_BOLD,
            {color: Colors.WHITE, marginLeft: 10},
          ]}>
          {data}
        </Text>
      </View>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        {index !== 1 && <ButtonGoTop index={index} data={data} />}
        <ArrowDown />
      </View>
    </View>
  );
};

export default React.memo(HeaderRenderItem);

const styles = StyleSheet.create({});
