/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { loadState, saveState } from './localStorage/localStorageMethods';
import reducer from './redux/reducer.js';
import App from './App';

const persistedState = loadState();
const store = createStore(
  reducer,
  persistedState,
  composeWithDevTools(),
);
store.subscribe(() => {
  saveState({
    allTasks: store.getState().allTasks,
    tasksFound: store.getState().tasksFound,
    sortFlags: store.getState().sortFlags,
  });
});

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
