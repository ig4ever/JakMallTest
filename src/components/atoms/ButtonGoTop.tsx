import {ActivityIndicator, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import TextFont from '../../styles/Text';
import Ripple from 'react-native-material-ripple';
import {Colors} from '../../styles/Colors';
import {useDispatch} from 'react-redux';
import {Dispatch} from '../../store';

type Props = {
  index: number;
  data: string;
};

const ButtonGoTop = (props: Props) => {
  const {index, data} = props;

  const dispatch = useDispatch<Dispatch>();

  const [loading, setLoading] = useState(false);

  const onPress = async () => {
    setLoading(true);
    await dispatch.categories.resetData();
    await dispatch.categories.moveList(data);
    setLoading(false);
  };

  return (
    <Ripple
      disabled={loading}
      style={styles.container}
      rippleCentered
      rippleContainerBorderRadius={100}
      onPress={onPress}>
      {loading ? (
        <ActivityIndicator color={Colors.WHITE} size={16} />
      ) : (
        <Text style={[TextFont.TEXT_12SP_BOLD, {color: Colors.WHITE}]}>
          GO TOP
        </Text>
      )}
    </Ripple>
  );
};

export default React.memo(ButtonGoTop);

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.GREEN,
    padding: 10,
    borderRadius: 10,
    marginRight: 10,
  },
});
