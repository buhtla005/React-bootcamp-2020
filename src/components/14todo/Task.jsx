import React, {Component} from 'react';

class Task extends Component{


     deleteTask = () => {
          this.props.removeTask(this.props.id)
     }

     render(){

          return (
               <div className="todo-item">
                    <h3 className={this.props.checked ? "checked" : ""} 
                    >{this.props.date} - {this.props.task}</h3>
                    <div className="buttons">
                         <button>Edit</button>
                         <button onClick={this.deleteTask}>Delete</button>
                    </div>
               </div>
          );
     }
}

export default Task;
