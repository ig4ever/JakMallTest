import {createModel} from '@rematch/core';
import {RootModel} from '.';
import * as api from '../services/api/categories';
import {TypeCategories} from '../types/Categories';

export const categories = createModel<RootModel>()({
  state: null as TypeCategories | null,
  reducers: {
    updateData(state, payload: TypeCategories) {
      state = payload;
      return state;
    },
    resetData(state) {
      state = null;
      return state;
    },
    moveToUp(state, payload: string) {
      const foundIdx = state?.categories.findIndex(el => el == payload);
      if (foundIdx) {
        state?.categories.splice(foundIdx, 1);
        state?.categories.unshift(payload);
      }
      return state;
    },
  },
  effects: dispatch => ({
    async getList() {
      /** Consume / Fetch Data API List Categories */
      const response: TypeCategories = await api.getList();
      /** Update State List Categories */
      dispatch.categories.updateData(response);
      return response;
    },
    async moveList(payload: string) {
      /** Consume / Fetch Data API List Categories */
      const response: TypeCategories = await api.getList();
      /** Update State List Categories */
      dispatch.categories.updateData(response);
      dispatch.categories.moveToUp(payload);
      return response;
    },
  }),
});
