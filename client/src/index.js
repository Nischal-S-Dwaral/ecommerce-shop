import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
import {persistor, store} from './redux/store';
import {PersistGate} from "redux-persist/integration/react";

// PersistGate - This delays the rendering of your app's UI until your
// persisted state has been retrieved and saved to redux.
ReactDOM.render(
  <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
          <App />
      </PersistGate>
  </Provider>,
  document.getElementById('root')
);