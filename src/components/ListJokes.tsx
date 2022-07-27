import {FlatList, StyleSheet, View} from 'react-native';
import React, {useCallback, useEffect, useState} from 'react';
import {Colors} from '../styles/Colors';
import {useDispatch, useSelector} from 'react-redux';
import {Dispatch, RootState} from '../store';
import RenderItemJoke from './RenderItemJoke';
import ButtonAddMore from './atoms/ButtonAddMore';
import {TypeJoke, TypeJokes} from '../types/Jokes';
import {useDebounce} from 'usehooks-ts';

type Props = {
  category: string;
};

const ListJokes = (props: Props) => {
  const {category} = props;

  const loadingGetListJokes = useSelector(
    (rootState: RootState) => rootState.loading.effects.jokes.getList,
  );

  const dispatch = useDispatch<Dispatch>();

  const keyExtractor = useCallback((_, index) => index.toString(), []);

  const [loading, setLoading] = useState(false);
  const [counterAddMore, setCounterAddMore] = useState(0);
  const [data, setData] = useState<any | null>([]);

  const [clicked, setClicked] = useState(false);
  const debouncedValue = useDebounce(clicked, 500);

  const getList = async (params: string) => {
    const response: TypeJokes = await dispatch.jokes.getList(
      `${category}?${params}`,
    );
    let newData: any = response.jokes ?? [];
    if (data.length > 0) {
      newData.unshift.apply(newData, data);
    }
    setData(newData ?? []);
    setCounterAddMore(prev => prev + 1);
    setClicked(false);
  };

  const addMore = async () => {
    setLoading(true);
    await getList(`type=single&amount=2`);
    setLoading(false);
  };

  useEffect(() => {
    getList(`type=single&amount=2`);
  }, []);

  useEffect(() => {
    if (debouncedValue) {
      addMore();
    }
  }, [debouncedValue]);

  const ListFooterComponent = () => (
    <View>
      {counterAddMore <= 2 && (
        <ButtonAddMore
          loading={loading || loadingGetListJokes}
          onPress={() => setClicked(true)}
        />
      )}
    </View>
  );

  const ItemSeparatorComponent = () => (
    <View style={{height: 1, backgroundColor: Colors.RED}} />
  );

  return (
    <View style={{flex: 1, backgroundColor: Colors.WHITE}}>
      <FlatList
        style={{backgroundColor: Colors.WHITE}}
        data={data}
        keyExtractor={keyExtractor}
        renderItem={({item}: any) => <RenderItemJoke data={item} />}
        ItemSeparatorComponent={ItemSeparatorComponent}
        ListFooterComponent={ListFooterComponent}
      />
    </View>
  );
};

export default React.memo(ListJokes);

const styles = StyleSheet.create({});
