import React from 'react'
import './Pokedex.css'
import PokemonCard from './PokemonCard'

const Pokedex = ({array}) => {

     return (
          <div className="main">
          {
               array.map(item => (
                    <PokemonCard 
                    key={item.id} 
                    id={item.id}
                    name={item.name}
                    type={item.type}
                    base_experience={item.base_experience}
                    />
               ))
          }
          </div>
     )
}


export default Pokedex
