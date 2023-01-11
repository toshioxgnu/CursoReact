import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Routes,
    Navigate
  } from "react-router-dom";
import { LoginScreen } from '../components/login/LoginScreen';
import { SearchPage } from '../components/pages/SearchPage';
import DashboardRoutes from './DashboardRoutes';
import MarvelSreen from '../components/Marvel/MarvelScreen';
import { HeroScreen } from '../components/heroes/HeroScreen';
import DcScreen from '../components/dc/DcScreen';
import { Navbar } from '../components/ui/Navbar';

const AppRouter = () => {
    return (
        <><Navbar />
        <Router>
            <div>
                <Routes>
                    <Route path="/login" element={<LoginScreen />} />
                    <Route path="/search" element={<SearchPage />} />
                    <Route path="/marvel" element={<MarvelSreen />} />
                    <Route path="/hero/:heroeId" element={<HeroScreen />} />
                    <Route path="/dc" element={<DcScreen />} />

                    <Route path="/" element={<Navigate to="/marvel" />} />
                </Routes>
            </div>
        </Router>
        </>
    )
}

export default AppRouter
