import React from 'react';
import Dog from './Dog';
import About from './About'
import Contact from './Contact'
import { Route, Switch } from 'react-router-dom'

const Routeing = () => {
    return (
        <div>
            <Switch>
                <Route exact path="/" component={About}/>
                <Route exact path="/dog" component={Dog}/>
                <Route exact path="/contact" component={Contact}/>
            </Switch>
        </div>
    );
}

export default Routeing;
