import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Routes from "./router";
import reportWebVitals from './reportWebVitals';
import mainReducer from './redux/reducer' 
import {Provider} from 'react-redux';  
import { reducer as formReducer } from 'redux-form';
import{
  createStore,
  compose, 
  combineReducers
}  from 'redux' 
const enhancers = compose(
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);  
const rootReducer = combineReducers({mainReducer,form: formReducer })
const store = createStore(rootReducer,enhancers);

ReactDOM.render(
  <React.Fragment> 
      <Provider store={store}>
    <Routes /> 
    </Provider>
  </React.Fragment>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
