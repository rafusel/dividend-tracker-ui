import axios from 'axios';

export const fetchDividends = (action) => {
  axios.get('http://localhost:5000/api/v1/dividends')
    .then(res => {
      action(res.data.dividends);
    });  
}
