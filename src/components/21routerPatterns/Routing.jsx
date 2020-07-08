import React from 'react'
import {Route, Switch} from 'react-router-dom'
import Food from './Food'
import FoodSearch from './FoodSearch'
import Navbr from './Navbr'

const Routing = () => {
    return (
        <div>
            <Navbr/>
            <Switch>
                <Route 
                    exact 
                    path="/" 
                    /*render={ () => <FoodSearch />}
                    tj za history:
                      render={routeProps => <FoodSearch {...routeProps}/>}*/
                    component={FoodSearch}
                />

                <Route exact path="/food/:foodName/drink/:drinkName" component={Food}/>
                <Route render={() => <h1>ERROR 404! Page not found</h1>}/>
            </Switch>
        </div>
    )
}

export default Routing

/**
 * <Route exact path="/food/:name" render={ routeProps => <Food name="egg"/>}/> 
 * i to onda preko this.props.name prosljedimo dalje
 * 
 * <Route exact path="/food/:name" render={ routeProps => <Food name={routeProps.match.params.name}/>}/>
 * 
 * <Route exact path="/food/:name" render={ routeProps => <Food {...routeProps}/>}/> 
 * ali moramo promijeniti const name = routeProps.match.params.name jer prosljedujemo sva 3 elementa...
 * 
 * <Route exact path="/food/:name" component={Food}/> 
 * će isto raditi kao i zadnji primjer... VAŽNO! radi zato jer ne prosljedujemo nikakav drugi property (samo ime preko url-a)
 */