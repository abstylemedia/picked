import React from 'react';
import './App.css';
import Client from './components/client/client';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import Alogin from './components/admin/Alogin';
import Home from './components/home/home';
import Pickupadd from './components/client/pickupadd';
import Dropadd from './components/client/dropadd';
import Additem from './components/client/additem';
import Pickserach from './components/client/picksearch';
import Dropsearch from './components/client/dropsearch';
import Review from './components/client/review';
import Clogin from './components/client/Clogin';
import Cregister from './components/client/Cregister';
import Test from './components/client/test';
import Dashboard from './components/admin/Dashboard';
import Aorder from './components/admin/Aorder';
function App() {
  return (
    <Router>
      <Switch>
        <Route path="/client">
          <Clogin/>
        </Route>
        <Route path="/cregister">
          <Cregister/>
        </Route>
        <Route path="/cdashboard">
          <Client/>
        </Route>
        <Route path="/OrderView/:id">
          <Aorder/>
        </Route>
        <Route path="/OrderDashboard">
          <Dashboard/>
        </Route>
        <Route path="/admin">
          <Alogin/>
        </Route>
        <Route path="/pickupadd">
          <Pickupadd/>
        </Route>
        <Route path="/dropadd">
          <Dropadd/>
        </Route>
        <Route path="/additem">
          <Additem/>
        </Route>
        <Route path="/pickserach">
          <Pickserach/>
        </Route>
        <Route path="/dropsearch">
          <Dropsearch/>
        </Route>
        <Route path="/review">
          <Review/>
        </Route>
        <Route path="/test">
          <Test/>
        </Route>
        <Route path="/">
          <Home/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
