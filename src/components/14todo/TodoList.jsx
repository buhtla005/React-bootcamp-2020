import React, {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import Task from './Task'
import TodoForm from './TodoForm'
import './todo.css'


class TodoList extends Component{
     
     constructor(props){
          super(props)
          this.state={
               tasks: [{id: uuidv4(), date: new Date().toLocaleDateString('en-GB'), task: 'Ribolov', checked: true}]
          }
     }

     addTask = (task) => {
          this.setState({
               tasks: [...this.state.tasks, task]
          })
     }

     removeTask = (id) => {
          const newState = this.state.tasks.filter(x => x.id !== id )
          this.setState({
               tasks: newState
          })
     }

     changeCheck = (id) => {
          let newTask = this.state.tasks.filter(x => x.id === id)
          let elementId = this.state.tasks.indexOf(newTask)
          newTask.checked = !newTask.checked
          this.state.tasks.splice(elementId,1,newTask)          
     }

     render(){
          return (
               <div className="content">
                    <TodoForm addTask={this.addTask}/>
                    {
                         this.state.tasks.map(t => (
                              <Task key={t.id} removeTask={this.removeTask} change={this.changeCheck} {...t}/>
                         ))
                    }
               </div>
          )   
     }
}

export default TodoList
