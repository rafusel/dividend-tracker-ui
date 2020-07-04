export const axiosBaseURL = (
  !process.env.NODE_ENV || process.env.NODE_ENV === 'development'
    ? 'http://localhost:5000'
    : 'https://wealthsimple-trade-dividends.herokuapp.com'
);

