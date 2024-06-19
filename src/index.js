import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import configureStore from './store/confiureStore';
import { Provider } from 'react-redux' 

const store = configureStore() 
console.log('redux state', store.getState())

store.subscribe(() => {
  console.log('redux state', store.getState())
})

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);