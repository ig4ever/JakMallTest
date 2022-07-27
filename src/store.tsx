import {init, RematchDispatch, RematchRootState} from '@rematch/core';
import {models, RootModel} from './models';
import loadingPlugin, {ExtraModelsFromLoading} from '@rematch/loading';
import immerPlugin from '@rematch/immer';
import Reactotron from './config/reactotron-config';

type FullModel = ExtraModelsFromLoading<RootModel>;

//** Setup rematch configuration */
export const store = init<RootModel, FullModel>({
  models,
  redux: {
    enhancers: [Reactotron.createEnhancer!()],
    rootReducers: {LOGOUT: () => undefined},
  },
  plugins: [loadingPlugin(), immerPlugin()],
});

export type Store = typeof store;
export type Dispatch = RematchDispatch<RootModel>;
export type RootState = RematchRootState<RootModel, FullModel>;
