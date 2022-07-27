import {Models} from '@rematch/core';
import {categories} from './categories';
import {jokes} from './jokes';

export interface RootModel extends Models<RootModel> {
  categories: typeof categories;
  jokes: typeof jokes;
}

export const models: RootModel = {
  categories,
  jokes,
};
