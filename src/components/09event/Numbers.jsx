import React, { Component } from 'react'
import Num from './Num'

class Numbers extends Component {
     
     constructor(props){
          super(props)
          this.state={
               numbers: [1,2,3,4,5,6,7,8],
          }
     }

     remove = (num) => {
          this.setState( st => ({
               numbers: st.numbers.filter(n => n !== num)
          }))
     }

     render(){
          return (
               <div>
                    {
                         this.state.numbers.map(n => (
                              <Num value={n} remove={this.remove}/>
                         ))
                    }
               </div>
          )
     }

}

export default Numbers
