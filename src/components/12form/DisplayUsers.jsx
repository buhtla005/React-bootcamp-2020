import React, {Component} from 'react'
import './Form.css'
import Form from './Form'
import {v4 as uuidv4} from 'uuid'


class DisplayUsers extends Component{
     
     constructor(props){
          super(props)
          this.state={
               items: [
               {username: "Ddoxy", password: "512415", id: uuidv4()},
          ]}
     }

     addItem = (item) => {
          let newItem = {...item, id: uuidv4()}
          this.setState( state => ({
               items: [...state.items, newItem]
          }))
     }

     render(){
          return (
               <div>
                    {
                         this.state.items.map(st => (
                              <h3 key={st.id}>{st.username} - {st.password}</h3>
                         ))
                    }
                    <Form addItem={this.addItem}/>
               </div>
          )
     }
}

export default DisplayUsers