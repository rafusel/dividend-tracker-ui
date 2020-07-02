import {SET_DIVIDENDS} from './reducers';

export function setDividends(dividends) {
  return { type: SET_DIVIDENDS, dividends};
}
