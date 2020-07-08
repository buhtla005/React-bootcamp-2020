import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

class Navbr extends Component{

    handleLogin = () => {
        alert("YOU HAVE LOGGED IN!")
        this.props.history.push("/food/potato/drink/vodka/")
    }

    render(){
        return (
            <div>
                <button onClick={this.handleLogin}>LOGGED IN</button>
            </div>
        )
    }
}

export default withRouter(Navbr)