import React, { Component } from 'react'
import './CoinFlip.css'
import Coin from './Coin'

class StateMutable extends Component {
     
     constructor(props){
          super(props)
          this.state={
               coin: true,
               counter: 0,
               heads: 0,
               tails: 0,
          }
     }

     handleChange = () => {
          this.setState(currState => ({counter: currState.counter+1}))
          let c = Math.floor(Math.random()*2)
          c === 1 ? this.head() : this.tails()
     }

     head = () => {
          this.setState(currState => {
               return {
                    heads: currState.heads +1,
                    coin: true
               }
          })
     } 

     tails = () => {
          this.setState(currState => {
               return {
                    tails: currState.tails +1,
                    coin: false
               }
          })
     }

     render(){
          return (
               <div className="content">
                    <h2>Let's flip a coin!</h2>
                    {this.state.coin?"true":"false"}
                    <Coin coin={this.state.coin ? "heads" : "tails"}/>
                    <button onClick={this.handleChange}>CLICK ME</button>
                    <p>Out of {this.state.counter} flips, there have been {this.state.heads} heads and {this.state.tails} tails.</p>
               </div>
          )
     }
}

export default StateMutable
