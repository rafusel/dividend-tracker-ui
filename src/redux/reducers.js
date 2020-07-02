import { combineReducers } from 'redux';

export const SET_DIVIDENDS = 'SET_DIVIDENDS';


function dividends(state = [], action) {
  switch (action.type) {
    case SET_DIVIDENDS:
      return action.dividends;
    default:
      return state;
  }
}

const dividendApp = combineReducers({
  dividends,
});

export default dividendApp;
