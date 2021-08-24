import React from 'react';
import {render} from 'react-dom';
import './assets/scss/index.scss';
import {Provider} from 'react-redux'
import thunk from 'redux-thunk'
import {createStore,applyMiddleware, compose} from 'redux'
import App from './App';
import reportWebVitals from './reportWebVitals';
import {rootReducer} from './Redux/rootReducer'
//devtools
const devtools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
//store
const store = createStore(rootReducer,compose(
   applyMiddleware(
      thunk
   ),
   devtools
))
const app = (
   <Provider store={store}>
      <App/>
   </Provider>
)
render(app,document.getElementById('root'))

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
