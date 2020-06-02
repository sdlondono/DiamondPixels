import React from 'react';
import { Switch, Route } from 'react-router-dom'
import {
    About,
    Service,
    Mechandising
} from "../pages/"

function Router() {
    return (
        <Switch>
            <Route exact path='/' component={About} />
            <Route exact path='/service' component={Service} />
            <Route exact path='/mechandising' component={Mechandising} />
        </Switch>
    )
}

export default Router;