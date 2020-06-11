import React, {Component} from './node_modules/react';
    
const getNumber = () => {
     return Math.round(Math.random()*10)+1
}

class RandomPicker extends Component{

     render(){
          var num = getNumber()

          return (
               <div>
                    <h1>Broj odabran: {num} </h1>
                    {
                         num === 7 ? <h1>LUCKY SEVEN!</h1> : null
                    }
               </div>
          )
     }
};

export default RandomPicker;
