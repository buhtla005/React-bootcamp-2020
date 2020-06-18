import React, { Component } from 'react';
import LottoBall from './LottoBall'
import './LottoBall.css'

const array = []

class Lottery extends Component {

     static defaultProps = {
          title: 'Lotto 6/40',
          maxValue: 40,
          maxBalls: 6,
     }

     constructor(props) {
          super(props);
          this.state = {
               brojevi: array,
          }
     }

     handleClick = () => {
          this.fillNumbers()
     }

     fillNumbers = () => {
          if(this.state.brojevi !== []){
               this.setState({brojevi: array})
          }

          let counter = 0
          while(counter < this.props.maxBalls){
               let broj = Math.floor(Math.random() * this.props.maxValue)+1
               if(!this.state.brojevi.find(element => element === broj))
               {
                    this.setState( currState => ({
                         brojevi: [...currState.brojevi, broj]
                    }))

                    counter++
               }
          }
     }

     render() {

          return (
               <div className="content">
                    <h2>{ this.props.title }</h2>
                    <div>
                    {
                         this.state.brojevi.map(broj => {
                              return <LottoBall number={broj}/>
                         })
                    }
                    </div>
                    <button onClick={this.handleClick}>Generate</button>
               </div>
          );
     }
}

export default Lottery;