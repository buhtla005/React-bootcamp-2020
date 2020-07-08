import React, { Component } from 'react'
import DATA from './data/data'
import { Route, Switch } from 'react-router-dom'
import Dog from './Dog'
import AllDogs from './AllDogs'

class Routing extends Component {
    
    constructor(props) {
        super(props);
        this.state={
            data: DATA
        }
    }
    
    render() {
        
        const getDog = props => {
            let dogName = props.match.params.name
            let currentDog = this.state.data.find(dog => (
                dog.name.toLowerCase() === dogName.toLowerCase()
            ))
            return <Dog {...props} dog={currentDog}/>
        }

        return (
            <div>
                <Switch>
                    <Route exact path="/dogs" render={() => <AllDogs dogs={this.state.data}/>}/>
                    <Route exact path="/dogs/:name" render={getDog}/> 
                </Switch>        
            </div>
        )
    }
}

export default Routing