import React, {Component} from 'react';

class Num extends Component {

     constructor(props){
          super(props)
          
     }

     handleRemove = () => {
          this.props.remove(this.props.value)
     }

     render(){
          return (
               <div>
                    <li>
                         {this.props.value}
                         <button onClick={this.handleRemove}>X</button>
                    </li>
               </div>
          );
     }
};

export default Num;
