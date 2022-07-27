import {createModel} from '@rematch/core';
import {RootModel} from '.';
import * as api from '../services/api/jokes';
import {TypeJokes} from '../types/Jokes';

export const jokes = createModel<RootModel>()({
  state: null as TypeJokes | null,
  reducers: {
    updateData(state, payload: TypeJokes) {
      state = payload;
      return state;
    },
    resetData(state) {
      state = null;
      return state;
    },
  },
  effects: dispatch => ({
    async getList(params?: string) {
      /** Consume / Fetch Data API List Jokes */
      const response: TypeJokes = await api.getList(params);
      return response;
    },
  }),
});
