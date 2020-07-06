import React, { Component } from 'react'
import './VendingMachine.css'
import Navigation from './Navigation'

class VendingMachine extends Component {
    render() {
        return (
            <div className="container">
                <div className="container-div">
                    <div className="container-text">
                        <h4>Hello, I am vending machine. What would you like?</h4>
                    </div>
                    <div className="container-menu">
                        <Navigation/>
                    </div>
                </div>
            </div>
        )
    }
}

export default VendingMachine