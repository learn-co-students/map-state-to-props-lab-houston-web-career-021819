import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'
import {Provider} from 'react-redux'
import manageUsers from './reducers/manageUsers'
import {createStore} from 'redux'

const initialState = {
  type: '@@init',
  users: []
}

const store = createStore(
  manageUsers,
  initialState,
)

ReactDOM.render(
  <Provider store={store}><App /></Provider>,
  document.getElementById('root')
);
