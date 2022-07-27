import {FlatList, RefreshControl, StyleSheet, Text, View} from 'react-native';
import React, {useCallback, useEffect, useState} from 'react';
import {Colors} from '../styles/Colors';
import {TextFont} from '../styles/Text';
import RenderItemCategory from './RenderItemCategory';
import {useDispatch, useSelector} from 'react-redux';
import {Dispatch, RootState} from '../store';

type Props = {};

const ListCategories = (props: Props) => {
  const list = useSelector((rootState: RootState) => rootState.categories);
  const loadingGetListCategory = useSelector(
    (rootState: RootState) => rootState.loading.effects.categories.getList,
  );
  const loadingGetListJoke = useSelector(
    (rootState: RootState) => rootState.loading.effects.jokes.getList,
  );

  const dispatch = useDispatch<Dispatch>();

  const keyExtractor = useCallback((_, index) => index.toString(), []);

  const [loading, setLoading] = useState(false);

  const getList = useCallback(async () => {
    dispatch.categories.resetData();
    await dispatch.categories.getList();
  }, []);

  const onRefresh = useCallback(async () => {
    setLoading(true);
    await getList();
    setLoading(false);
  }, []);

  useEffect(() => {
    getList();
  }, []);

  const ListEmptyComponent = () => (
    <View style={{alignItems: 'center'}}>
      <Text style={[TextFont.TEXT_16SP_BOLD]}>Data Kosong.</Text>
    </View>
  );

  return (
    <FlatList
      style={{padding: 16, marginTop: 20}}
      refreshControl={
        <RefreshControl
          refreshing={loading || loadingGetListCategory || loadingGetListJoke}
          onRefresh={onRefresh}
          colors={[Colors.RED]}
        />
      }
      data={list?.categories ?? []}
      keyExtractor={keyExtractor}
      renderItem={({item, index}: any) => (
        <RenderItemCategory index={index + 1} category={item} />
      )}
      ListEmptyComponent={ListEmptyComponent}
    />
  );
};

export default React.memo(ListCategories);

const styles = StyleSheet.create({});
