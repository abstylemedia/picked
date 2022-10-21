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
import Additem from './components/client/additem';
import Pickserach from './components/client/picksearch';
import Review from './components/client/review';
import Clogin from './components/client/Clogin';
import Cregister from './components/client/Cregister';
import Dashboard from './components/admin/Dashboard';
import Aorder from './components/admin/Aorder';
import PickupaddResidential from './components/client/pickupaddr';
import PickupaddRetail from './components/client/pickupaddre';
import PickupaddCommerical from './components/client/pickupaddc';
import Dashboardo from './components/client/Dashboardo';
import Dashboardp from './components/client/Dashbaordp';
import DropaddResidential from './components/client/dropaddr';
import DropaddCommerical from './components/client/dropaddc';
import Schedule from './components/client/schedule';
import Truck from './components/client/truck';
function App() {
  return (
    <Router>
      <Switch>
        <Route path="/Client">
          <Clogin/>
        </Route>
        <Route path="/cregister">
          <Cregister/>
        </Route>
        <Route path="/category">
          <Client/>
        </Route>
        <Route path="/cdashboardo">
          <Dashboardo/>
        </Route>
        <Route path="/schedule">
          <Schedule/>
        </Route>
        <Route path="/cdashboardp">
          <Dashboardp/>
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
        <Route path="/pickupaddr">
          <PickupaddResidential/>
        </Route>
        <Route path="/pickupaddre">
          <PickupaddRetail/>
        </Route>
        <Route path="/pickupaddc">
          <PickupaddCommerical/>
        </Route>
        <Route path="/dropaddr">
          <DropaddResidential/>
        </Route>
        <Route path="/dropaddc">
          <DropaddCommerical/>
        </Route>
        <Route path="/additem">
          <Additem/>
        </Route>
        <Route path="/pickserach">
          <Pickserach/>
        </Route>
        <Route path="/review">
          <Review/>
        </Route>
        <Route path="/truck">
          <Truck/>
        </Route>
        
        <Route path="/">
          <Home/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
