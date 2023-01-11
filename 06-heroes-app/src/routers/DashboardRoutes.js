import React, { Fragment } from 'react'
import { Navigate, Route, Routes } from 'react-router'
import DcScreen from '../components/dc/DcScreen'
import { HeroScreen } from '../components/heroes/HeroScreen'
import MarvelSreen from '../components/Marvel/MarvelScreen'
import { Navbar } from '../components/ui/Navbar'

const DashboardRoutes = () => {
    return (
        <Fragment>
            <Navbar/>

            <div className="container mt-5">
                <Routes >
                    <Route  path="/marvel" element={ <MarvelSreen/> } />
                    <Route  path="/hero/:heroeId" element={ <HeroScreen/> } />
                    <Route  path="/dc" element={ <DcScreen/> } />

                    <Route  replace to="/marvel" element={ <MarvelSreen/> }/>
                </Routes>
            </div>
        </Fragment>
    )
}

export default DashboardRoutes
