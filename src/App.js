import React from 'react';
import './App.scss';
import store from './store';
import { Provider } from 'react-redux';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import HomePage from './components/landing/HomePage';
import Signin from './components/auth/Signin';
import Signup from './components/auth/Signup';
import Navbar from './components/common/Navbar';
import Footer from './components/common/Footer';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/register" component={Signup} />
          <Route exact path="/login" component={Signin} />
        </Switch>
        {/* <Footer /> */}
      </BrowserRouter>
    </Provider>
  );
}

export default App;
