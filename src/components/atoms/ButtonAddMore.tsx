import {ActivityIndicator, Alert, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import TextFont from '../../styles/Text';
import Ripple from 'react-native-material-ripple';
import {Colors} from '../../styles/Colors';

type Props = {
  loading: boolean;
  onPress: () => void;
};

const ButtonAddMore = (props: Props) => {
  const {loading, onPress} = props;

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
          Add More
        </Text>
      )}
    </Ripple>
  );
};

export default React.memo(ButtonAddMore);

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.GREEN,
    padding: 10,
    alignItems: 'center',
  },
});
