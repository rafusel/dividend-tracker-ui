import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/index';
import { createStore } from 'redux';
import dividendApp from './redux/reducers';
import { Provider } from 'react-redux';

const store = createStore(
  dividendApp, 
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
  <React.StrictMode>
  <Provider store={store}>
    <App />
  </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
