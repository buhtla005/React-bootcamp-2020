import React, { Component } from 'react'
import Dice from './Die'

class RollDice extends Component {


     constructor(props){
          super(props)
          this.state = {
               dice_one: 1,
               dice_two: 1,
               rolling: false,
          }
     }
     

     handleChange = e =>{
          this.setState({ dice_one: Math.floor(Math.random() * 6)+1}) 
          this.setState({ dice_two: Math.floor(Math.random() * 6)+1})
          this.setState({rolling: true})

          setTimeout(() => {
               this.setState({rolling: false})
          }, 1000)
     }

     

     render(){
          
          return (
               <div className="content">
                    <div className="dices">
                         <Dice dice={this.state.dice_one} rolling={this.state.rolling}/>
                         <Dice dice={this.state.dice_two} rolling={this.state.rolling}/>
                    </div>
                    <button onClick={this.handleChange} className="button" disabled={this.state.rolling}>
                    {this.state.rolling ? "Rolling..." : "Roll Dice"}
                    </button>
               </div>
          )
     }
}

export default RollDice
