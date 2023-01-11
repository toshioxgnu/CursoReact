import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Routes
  } from "react-router-dom";
import { LoginScreen } from '../components/login/LoginScreen';
import { SearchPage } from '../components/pages/SearchPage';
import DashboardRoutes from './DashboardRoutes';
import MarvelSreen from '../components/Marvel/MarvelScreen';
import { HeroScreen } from '../components/heroes/HeroScreen';
import DcScreen from '../components/dc/DcScreen';

const AppRouter = () => {
    return (
        <Router>
        <div>
            <Routes>
                <Route exact="true" path="/login" element={ <LoginScreen/> } />
                <Route exact="true" path="/search" element={ <SearchPage/> } />
                <Route exact="true" path="/marvel" element={ <MarvelSreen/> } />
                <Route exact="true" path="/hero/:heroeId" element={ <HeroScreen/> } />
                <Route exact="true" path="/dc" element={ <DcScreen/> } />

                <Route path="/"  element={ <DashboardRoutes/> }  />
            </Routes>
        </div>
        </Router>
    )
}

export default AppRouter
