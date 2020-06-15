import React, {Component} from 'react'

class DefaultProp extends Component {
     
     static defaultProps = {
          name: "Sinisa",
          surname: "Horvat"
     }
     render(){
          const{name, surname} = this.props
          
          return (
               <h1 style={{fontSize: '50px'}}>
                    {name} {surname}
               </h1>
          )
     }
}

export default DefaultProp