import React from 'react'

const PokemonCard = ({ id, name, type, base_experience }) => {

     const brNula = (id) => {
          return ('000'+ id ).substr(-3)
     }

     return (
          <div className="Pokecard-main" key={id}>
               <h2>{ name }</h2>
               <img 
               src={`https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${brNula(id)}.png`} 
               className="Pokecard-img"
               alt="pokemon"
               />
               <p className="Pokecard-type">Type: { type }</p>
               <p className="Pokecard-exp">Exp: { base_experience }</p>
          </div>
     )
}

export default PokemonCard