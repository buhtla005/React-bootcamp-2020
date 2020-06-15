import React from 'react'
import './Pokedex.css'
import data from './PokeData'
import PokemonCard from './PokemonCard'

const Pokedex = () => {

     return (
          <div className="main">
          {
               data.map(item => (
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
