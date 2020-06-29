import React, {Component} from 'react'
import './Form.css'


class Form extends Component{
     
     constructor(props){
          super(props)
          this.state={
               username: '',
               password: '',
          }
     }

     handleChange = (e) =>{
          const{name, value} = e.target
          this.setState({[name]:value})
     }

     handleSubmit = (e) => {
          e.preventDefault()
          this.props.addItem(this.state)
          this.setState({
               username: "",
               password: ""
          })
     }

     render(){
          return (
               <div>
                    <form onSubmit={this.handleSubmit}>
                         <h3>User input form</h3>
                         
                         <div className="dio-forma">
                              <label htmlFor="username">Username: </label>
                              <input 
                              type="text" 
                              name="username" 
                              value={this.state.username}
                              onChange={this.handleChange}
                              id="username"
                              autoComplete="off"
                              />
                         </div>
                         <div className="dio-forma">
                              <label htmlFor="password">Password: </label>
                              <input 
                              type="password" 
                              name="password" 
                              value={this.state.password}
                              onChange={this.handleChange}
                              id="password"
                              autoComplete="off"
                              />
                         </div>
                         <button>Submit</button>
                    </form>     
               </div>
          )
     }
}

export default Form