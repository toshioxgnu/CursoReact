import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
  } from "react-router-dom";
import { LoginScreen } from '../components/login/LoginScreen';
import { SearchPage } from '../components/pages/SearchPage';
import DashboardRoutes from './DashboardRoutes';

const AppRouter = () => {
    return (
        <Router>
        <div>
            <Switch>
                <Route exact path="/login" component={ LoginScreen } />
                <Route exact path="/search" component={ SearchPage } />

                <Route path="/"  component={ DashboardRoutes }  />
            </Switch>
        </div>
        </Router>
    )
}

export default AppRouter
