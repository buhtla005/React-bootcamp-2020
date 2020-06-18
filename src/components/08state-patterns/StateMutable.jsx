import React, { Component } from 'react'
import './StatePrev.css'

class StateMutable extends Component {
     
     constructor(props){
          super(props)
          this.state={
               auto: {
                    id: 1,
                    klima: true,
                    vrata: 2,
                    pogon: 4,
               } 
          }
     }

     mutateClick = (id) =>{
          const newClick = this.state.auto.map(car => {
               if(car.id === id){
                    return {...car, klima: false}
               }
               return car
          })
          this.setState({
               car: newClick
          })
     }

     render(){
          return (
               <div className="content">
                    <h2>{this.state.auto.klima ? "YES" : "NO"}</h2>
                    <button onClick={this.mutateClick(1)}>CLICK ME</button>
               </div>
          )
     }
}

export default StateMutable
