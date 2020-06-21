import React, { Component } from 'react'
import './CoinFlip.css'
import Coin from './Coin'

class StateMutable extends Component {

     static defaultProps = {
          coins:[
               {side: "heads", imgSrc: "https://tinyurl.com/react-coin-heads-jpg"},
               {side: "tails", imgSrc: "https://tinyurl.com/react-coin-tails-jpg"}
          ]
     }
     
     constructor(props){
          super(props)
          this.state={
               coin: null,
               counter: 0,
               heads: 0,
               tails: 0,
          }
     }

     handleChange = () => {
          this.flipCoin()
     }

     flipCoin = () => {
          const newCoin = this.props.coins[Math.round(Math.random())]
          this.setState( currState => {
               return{
                    currState: newCoin,
                    counter: currState.counter + 1,
                    heads: currState.heads + (newCoin.side === "heads" ? 1 : 0),
                    tails: currState.tails + (newCoin.side === "tails" ? 1 : 0)
               }
          })
     }

     render(){
          return (
               <div className="content">
                    <h2>Let's flip a coin!</h2>
                    {this.state.currState && <Coin side={this.state.currState.side} imgSrc={this.state.currState.imgSrc}/>}
                    <button onClick={this.handleChange}>CLICK ME</button>
                    <p>Out of {this.state.counter} flips, there have been {this.state.heads} heads and {this.state.tails} tails.</p>
               </div>
          )
     }
}

export default StateMutable
