import React from 'react'
import pokedata from './PokeData'
import Pokedex from './Pokedex'
import './Pokedex.css'

const PokeGame = () => {

     let player1 = []
     let player2 = pokedata
     let player1_sum = 0
     let player2_sum = 0
     
     while(player1.length < player2.length){
          let randomId = Math.floor(Math.random()*player2.length)
          //imamo array od jednog elementa
          let randomPokemon = player2.splice(randomId, 1)[0]
          player1.push(randomPokemon)      
     }


     player1_sum = player1
                    .map(item => item.base_experience)
                    .reduce((a,b) => a+b, 0)
     
     player2_sum = player2
                    .map(item => item.base_experience)
                    .reduce((a,b) => a+b, 0)

     return (
          <div className="content">
               <div className="Player1">
                    <h2>Player 1's pokemons</h2>
                    <Pokedex array={player1}/>
                    <p className="pl">Overall power level: {player1_sum}</p>                    
               </div>
               <div className="rez">
                    <h2 className="Pokemon-resoult">THE WINNER IS... {player1_sum > player2_sum ? "PLAYER 1!" : (player1_sum < player2_sum ? "PLAYER 2!" : "NO ONE... SADNESS...") } </h2>
               </div>
               <div className="Player2">
                    <h2>Player 2's pokemons</h2>
                    <Pokedex array={player2}/>
                    <p className="pl">Overall power level: {player2_sum}</p>                    
               </div>
          </div>
     )
}

export default PokeGame
