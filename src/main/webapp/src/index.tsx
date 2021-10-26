import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {Provider} from "react-redux";
import {store} from "./app/config/store";
import {PersistGate} from "redux-persist/integration/react";
import {persistStore} from "redux-persist";

ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistStore(store)}>
    <App />
    </PersistGate>
  </Provider>,
  document.getElementById('root')
);
