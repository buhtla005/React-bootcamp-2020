import React, { Component } from 'react'
import DATA from './data/data'
import { Route, Switch } from 'react-router-dom'
import Dog from './Dog'
import AllDogs from './Dogs'

class Routing extends Component {
    
    constructor(props) {
        super(props);
        this.state={
            data: []
        }
    }

    componentDidMount = () => {
        this.setState({ data: DATA })
    }
    
              /**
                 * <Route path="/dogs" component={Dogs}/>
                 */
    render() {

        return (
            <div>
                <Switch>
                    <Route exec path="/dogs" render={() => <AllDogs dogs={this.state.data}/>}/>
                </Switch>        
            </div>
        )
    }
}

export default Routing