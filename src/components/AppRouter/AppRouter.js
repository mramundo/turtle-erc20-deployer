import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from '../../pages/Home'
import Info from '../../pages/Info'
import About from '../../pages/About'
import NotFound from '../../pages/NotFound'

const AppRouter = () => {
    return (
        <Switch>
            <Route exact path="/">
                <Home />
            </Route>
            <Route path="/info">
                <Info />
            </Route>
            <Route path="/about">
                <About />
            </Route>
            <Route>
                <NotFound />
            </Route>
        </Switch>
    )
}

export default AppRouter
