import axios from 'axios';

import * as c from '../../constants';
import {config, handler} from './utils';

export async function getList() {
  try {
    //** Actually i can only use fetch method instead using axios,
    //** but usually i prefer to use axios since i often use it on a real projects. */
    const res = await axios.get(`${c.CATEGORIES}`, config());

    return res.data;
  } catch (e) {
    throw handler(e);
  }
}
