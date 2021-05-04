import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers } from "redux";
import { Provider } from "react-redux";
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const initialState = {
  count: 1,
  indexColors: [null],
  defaultColor: "rgb(215, 71, 66)",
};

function countReducer(state = initialState, action) {
  switch (action.type) {
    case "CHANGE_COLOR":
      return {
        ...state,
        defaultColor: action.payload
      }
    case "CHANGE_BOX_COLOR":
      const indexColors = state.indexColors
      indexColors[action.payload.index] = action.payload.color
      return {
        ...state,
        indexColors: indexColors
      }
    case "INCREMENT":
      return {
        ...state,
        count: state.count + 1
      };
    case "DECREMENT":
      return {
        ...state,
        count: state.count - 1
      };
    default:
      return state;
  }
}


const initialUserState = {
  email: null,
  isSignedIn: false,
};

function userReducer(state = initialUserState, action) {
  console.log({ la: state, action });
  switch (action.type) {
    case "SIGN_IN":
      return {
        isSignedIn: true,
        email: action.payload.email,
      };
    case "SIGN_OUT":
      return {
        isSignedIn: false,
        email: null,
      };
    default:
      return state;
  }
}
const reducers = combineReducers({
  count: countReducer,
  user: userReducer,
});

const store = createStore(reducers);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
