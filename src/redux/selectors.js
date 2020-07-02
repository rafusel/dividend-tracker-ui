export const getDividends = state => state.dividends;

export const getTotalDividends = state => getDividends(state)
  .reduce((accum, currVal) => (accum + currVal.market_value.amount), 0)