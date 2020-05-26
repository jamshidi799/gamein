import React from 'react';
import './App.scss';
import store from './store';
import { Provider } from 'react-redux';

function App() {
  return (
    <Provider store={store}>
      <div className="App"></div>
    </Provider>
  );
}

export default App;
