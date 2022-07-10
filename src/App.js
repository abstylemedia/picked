import React from 'react';
import './App.css';
import Client from './components/client';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import Admin from './components/admin';
import Home from './components/home';

function App() {
  return (
    <Router>
    <Switch>
          <Route path="/client">
           <Client/>
          </Route>
          <Route path="/admin">
            <Admin/>
          </Route>
          <Route path="/">
           <Home/>
          </Route>
        </Switch>
    </Router>
  );
}

export default App;
