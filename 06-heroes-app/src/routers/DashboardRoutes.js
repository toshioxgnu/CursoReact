import React, { Fragment } from 'react'
import { Redirect, Route, Switch } from 'react-router'
import DcScreen from '../components/dc/DcScreen'
import { HeroScreen } from '../components/heroes/HeroScreen'
import MarvelSreen from '../components/Marvel/MarvelScreen'
import { Navbar } from '../components/ui/Navbar'

const DashboardRoutes = () => {
    return (
        <Fragment>
            <Navbar/>

            <div className="container mt-5">
                <Switch >
                    <Route exact path="/marvel" component={ MarvelSreen } />
                    <Route exact path="/hero/:heroeId" component={ HeroScreen } />
                    <Route exact path="/dc" component={ DcScreen } />

                    <Redirect to="/marvel"/>
                </Switch>
            </div>
        </Fragment>
    )
}

export default DashboardRoutes
