import React, { Component } from 'react';
import {v4 as uuidv4} from 'uuid'

class TodoForm extends Component {

     constructor(props) {
          super(props);
          this.state = {
               id: uuidv4(),
               date: new Date().toLocaleDateString('en-GB'),
               task: '',
               checked: false
          }
     }

     handleChange = (e) =>{
          const{name, value} = e.target
          this.setState({
               [name]: value
          })
     }

     handleSubmit = (e) =>{
          e.preventDefault()
               this.setState({
                    task: this.props.task   
               })   
          this.props.addTask(this.state)

     }

     render() {
          return (
               <form onSubmit={this.handleSubmit}>
                    <label htmlFor="task">Enter task: </label>
                    
                    <input type="text" 
                    id="task" className="input-text" 
                    name="task" value={this.state.task}
                    onChange={this.handleChange}>
                    </input>

                    <button className="button-form">Submit</button>
               </form>
          )
     }
}

export default TodoForm