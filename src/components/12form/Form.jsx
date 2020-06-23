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
          e.preventDefault()
          const{target:{name, value}} = e
          this.setState({[name]:value})
     }

     handleSubmit = () => {
          alert(`You typed: ${this.state.username} and ${this.state.password}`)
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
                              <label for="username">Username: </label>
                              <input 
                              type="text" 
                              name="username" 
                              value={this.state.username}
                              onChange={this.handleChange}
                              id="username"
                              />
                         </div>
                         <div className="dio-forma">
                              <label for="password">Password: </label>
                              <input 
                              type="password" 
                              name="password" 
                              value={this.state.password}
                              onChange={this.handleChange}
                              id="password"
                              />
                         </div>
                         <button>Submit</button>
                    </form>     
               </div>
          )
     }
}

export default Form