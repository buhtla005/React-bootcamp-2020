import React from 'react'
import pokedata from './PokeData'
import Pokedex from './Pokedex'

const PokeGame = () => {

     const POKE_NUM = 4
     const player1 = []
     const player2 = []
     let player1_sum = 0
     let player2_sum = 0
     for(let i=0; i<POKE_NUM; i++){
          player1.push(pokedata[Math.floor(Math.random * pokedata.length)])
          player2.push(pokedata[Math.floor(Math.random * pokedata.length)])
          player1_sum += player1.map((sum, a) => sum += a.base_experience)
          player2_sum += player2.map((sum, a) => sum += a.base_experience)
     }

     return (
          <div>
               <div className="Player1">
                    <h2>Player 1's pokemons</h2>
                    <Pokedex player1={player1}/>
                    <p>Overall power level: {player1_sum}</p>                    
               </div>
               <h2 className="Pokemon-resoult">THE WINNER IS... {player1_sum > player2_sum ? "PLAYER 1!" : (player1_sum < player2_sum ? "PLAYER 2!" : "NO ONE... SADNESS...") } </h2>
               <div className="Player2">
                    <h2>Player 2's pokemons</h2>
                    <Pokedex player2={player2}/>
                    <p>Overall power level: {player2_sum}</p>                    
               </div>
          </div>
     )
}

export default PokeGame
