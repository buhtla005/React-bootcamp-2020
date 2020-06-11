import React, {Component} from 'react'

const dogMood = () => {
     const moods = ['happy', 'angry', 'sleppy']
     return moods[Math.floor(Math.random() * moods.length)]
}

class Dog extends Component{

     render(){
          return(
               <h1>My dog is: {dogMood()}</h1>
          )
     }
}

export default Dog