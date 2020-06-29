import React, { Component } from 'react'
import {v4 as uuidv4} from 'uuid'

class NewBoxForm extends Component {
     
     constructor(props){
          super(props)
          this.state = {
               w: 0,
               h: 0,
               bcg: "",
               id: ""
          }
     }

     handleChange = (e) => {
          const {name, value} = e.target
          this.setState(cs => ({
               [name]: value
          }))
     }

     handleSubmit = (e) =>{
          e.preventDefault()
          this.props.addItem(this.state)
          this.setState({
               w: 0,
               h: 0,
               bcg: "",
               id: uuidv4()
          })
     }

     render(){

          return(
               <div className="form-content">
                    <form onSubmit={this.handleSubmit}>
                         <h3>Form - add box</h3>

                         <div className="form-con">
                              <label htmlFor="width">Width in px: </label>
                              <input 
                              type="number" 
                              id="width" 
                              value={this.state.w} 
                              name="w"
                              onChange={this.handleChange} 
                              className="input-field"
                              />
                         </div>
                         
                         <div className="form-con">
                              <label htmlFor="height">Height in px: </label>
                              <input 
                              type="number" 
                              id="height" 
                              value={this.state.h} 
                              name="h" 
                              onChange={this.handleChange} 
                              className="input-field"
                              />
                         </div>
                         
                         <div className="form-con">
                              <label htmlFor="bcg">Background color: </label>
                              <input 
                              type="text" 
                              id="bcg" 
                              value={this.state.bcg} 
                              name="bcg" 
                              onChange={this.handleChange}
                              className="input-field"
                              />
                         </div>
                         
                         <button>Submit</button>
                    </form>
               </div>
          )
     }
}

     

export default NewBoxForm
