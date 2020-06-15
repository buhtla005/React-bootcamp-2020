import React from 'react'
import { choice, remove } from './Helpers'
import foods from './Foods'

const MainFile = () => {
     
     let fruit = choice(foods)
     let fruits = remove(foods, fruit)

     return (
          <div>
               <p>I would like a {fruit}, please.</p>
               <p>Here you go: {fruit}.</p>
               <p>Yumi! Can I have another one please?</p>
               <p>Sorry, we are all out of that one. Would you like one of these?
               {fruits}</p>
               {
                    console.log(`I would like a ${fruit}, please.`)
               }{    
                    console.log(`Here you go: ${fruit}.`)
               }{
                    console.log('Yumi! Can I have another one please?')
               }{
                    console.log(`Sorry, we are all out of that one. Would you like one of these?
               ${fruits}`)
               }
          </div>
     )
}

export default MainFile
