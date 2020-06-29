import React, {Component} from 'react';

class Box extends Component {
     
     render(){
          const{bcg, w, h} = this.props
          return(
               <div style={{
                    backgroundColor: bcg, 
                    width: `${w}px`, 
                    height: `${h}px`
                    }}>
                    <h2 onClick={this.props.removeItem}>X</h2>
               </div>
          )   
     }      
}

export default Box;