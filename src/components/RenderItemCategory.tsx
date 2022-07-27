import {StyleSheet, View} from 'react-native';
import React, {useState} from 'react';
import {Colors} from '../styles/Colors';
import CollapsibleList from 'react-native-collapsible-list';
import ListJokes from './ListJokes';
import HeaderRenderItem from './molecules/HeaderRenderItem';

type Props = {
  index: number;
  category: string;
};

const RenderItemParent = (props: Props) => {
  const {index, category} = props;

  const [active, setActive] = useState(false);

  return (
    <View style={{}}>
      <CollapsibleList
        numberOfVisibleItems={0}
        onToggle={(data: boolean) => setActive(data)}
        wrapperStyle={styles.wrapperCollapsibleList}
        buttonContent={<HeaderRenderItem index={index} data={category} />}
        buttonPosition="top">
        <ListJokes category={category} />
      </CollapsibleList>
    </View>
  );
};

export default React.memo(RenderItemParent);

const styles = StyleSheet.create({
  wrapperCollapsibleList: {
    flex: 1,
    marginTop: 20,
    overflow: 'hidden',
    backgroundColor: Colors.WHITE,
    borderRadius: 5,
  },
});
