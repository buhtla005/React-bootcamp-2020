import React, { Component } from 'react'
import './StatePrev.css'

class StatePrev extends Component {
     
     constructor(props){
          super(props)
          this.state={
               click: 0
          }
     }

     addOne = () => {
          this.setState({click: this.state.click + 1})
     }

     /* WRONG -> rendera samo zadnjeg
     addThree = () => {
          this.setState({click: this.state.click + 3})
          this.setState({click: this.state.click + 1})
          this.setState({click: this.state.click + 1})
     }
     */
    /* CALLBACK FORM -> bolje jer ce vrtit tocnu vrijednost
    addThree = () => {
          this.setState(currState => { return { click: currState.click + 1}})
          this.setState(currState => { return { click: currState.click + 1}})
          this.setState(currState => { return { click: currState.click + 1}})
     }
     */
    
     addCurrent = (currentState) => {
          return{ click: currentState.click + 1}
     }

     addThree = () => {
          this.setState(this.addCurrent);
          this.setState(this.addCurrent);
          this.setState(this.addCurrent);
     }


     render(){
          return (
               <div className="content">
                    <h2>{this.state.click}</h2>
                    <button onClick={this.addOne}>ADD ONE</button>
                    <button onClick={this.addThree}>ADD THREE</button>
               </div>
          )
     }
}

export default StatePrev
