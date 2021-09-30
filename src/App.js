import React, { createContext, useState } from "react";
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
import PrivateRoute from "./components/Login/PrivateRoute";

export const UserContext = createContext();

const App = () => {
  const [loggedInUser, setLoggedInUser] = useState({})
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Header />
        <p style={{ color: 'red ' }}>
          email: {loggedInUser.userEmail}
        </p>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/home' component={Home} />
          <Route path='/login' component={Login} />
          <PrivateRoute path='/book/:vehicleType' >
            <Book></Book>
          </PrivateRoute>
          <Route path='*' component={NotFound} />
        </Switch>
      </Router>
    </UserContext.Provider>
  );
};

export default App;
