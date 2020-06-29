import React, { Component } from 'react';
import Box from './Box'
import './BoxList.css'
import NewBoxForm from './NewBoxForm'
import {v4 as uuidv4} from 'uuid'

class BoxList extends Component {
     constructor(props) {
          super(props);
          this.state = {
               boxes: []
          }
     }

     addItem = (item) => {
          this.setState(cs => ({
               boxes: [...cs.boxes, item]
          }))
          console.log(this.state.boxes)
     }

     removeItem = (id) => {
          this.setState(cs => ({
               boxes: cs.boxes.filter(x => x !== id)
          }))
     }

     render() {

          const box =  this.state.boxes.map(st => (
               <Box
               w={st.w}
               h={st.h}
               bcg={st.bcg}
               id={st.id}
               removeItem={() => this.removeItem(st.id)}
               key={st.id}/>
          ))

          return (
               <>
               <div className="container">
                    {box}
               </div>
               <NewBoxForm addItem={this.addItem} className="newbox"/>
               </>
          );
     }
}

export default BoxList;