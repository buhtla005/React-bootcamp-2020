import React from 'react'
import {Route, Switch} from 'react-router-dom'
import VendingMachine from './VendingMachine'
import Cola from './Cola'
import Sardines from './Sardines'
import Chips from './Chips'

const Routing = () => {
    return (
        <div>
            <Switch>
                <Route exact path="/" component={VendingMachine}/>
                <Route exact path="/cola" component={Cola}/>
                <Route exact path="/chips" component={Chips}/>
                <Route exact path="/sardines" component={Sardines}/>
            </Switch>
        </div>
    )
}

export default Routing