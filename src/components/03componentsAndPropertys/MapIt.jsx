import React from 'react'

export default function MapIt({name, training}) {
     return (
          <div>
               <h3>{name}</h3>
               {
                    training.map((item, index) =>(
                         <li key={index}>{item}</li>
                    ))
               }
          </div>
     )
}
