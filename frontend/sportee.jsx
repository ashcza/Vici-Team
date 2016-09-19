//React
import React from 'react';
import ReactDOM from 'react-dom';
//Components
import Root from './components/root';
//Actions
import configureStore from './store/store';
import { requestEvents } from './actions/event_actions';

window.log = (item) => console.log(item);
document.addEventListener('DOMContentLoaded', () => {
  let store;
  if (window.currentUser) {
    const initialState = {session: {currentUser: window.currentUser}};
    store = configureStore(initialState);
  } else {
    store = configureStore();
  }
  window.store = store;
  window.requestEvents = requestEvents;
  const root = document.getElementById('root');
  ReactDOM.render(<Root store={store}/>, root);
});
