import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Book from "./components/Book/Book";

import Header from './components/Header/Header';
import Home from './components/Home/Home';
import NotFound from './components/NotFound/NotFound'
import Login from './components/Login/Login'

const App = () => {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/home' component={Home} />
        <Route path='/login' component={Login} />
        <Route path='/book/:vehicleType' component={Book} />
        <Route path='*' component={NotFound} />
      </Switch>
    </Router>
  );
};

export default App;
