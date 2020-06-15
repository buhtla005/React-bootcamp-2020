import React, { Component } from 'react';


class SlotMachine extends Component {
     
     render(){
          const{s1, s2, s3} = this.props
          let winner
          s1 === s2 && s2 === s3 ? winner = true : winner = null 
          
          return(
               <div>
                   <p> {s1} {s2} {s3} </p>
                   <p>{ winner ? "Cestitke na pobjedi!" : "Zalimo pokušajte ponovo."}</p>
               </div>
          )
     }
}

export default SlotMachine