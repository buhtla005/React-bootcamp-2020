import React, { Component } from 'react';

class StateButton extends Component {

     constructor(props) {
          super(props);

          this.state = {
               click: 0
          }
     }

     handleChange = () => {
          this.setState({click: Math.floor(Math.random()*10)})
     }

       render() {
          return (
               <div>
                    <h2>This is {this.state.click === 7 ? "LUCKY SEVEN!" : null} {this.state.click}</h2>
                    <button onClick={this.handleChange}>{this.state.buttonOn ? "CLICKED!" : "NOT CLICKED..."}</button>
               </div>
          );
     }
}

export default StateButton