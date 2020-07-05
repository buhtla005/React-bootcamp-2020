import React, { Component } from 'react';
import './Cards.css'
import axios from 'axios'
import Card from './Card'

const API_BASE = 'https://deckofcardsapi.com/api/deck'

class Cards extends Component {

    constructor(props){
        super(props)
        this.state={
            deck: null,
            drawn: []
        }
    }

    async componentDidMount() {
        let deck = await axios.get(`${API_BASE}/new/shuffle/`);
        this.setState({ deck: deck.data });
        console.log(this.state.deck)
      }


    async getCard(){
        let deck_id = this.state.deck.deck_id;
        try{
            let cardUrl = `${API_BASE}/${deck_id}/draw/`
            let cardRes = await axios.get(cardUrl)
            if(!cardRes.data.success){
                throw new Error("No card remaining!")
            }
            let card = cardUrl.data.cards[0]
            this.setState(st => ({
                drawn:[
                    ...st.drawn,
                    {
                        id: card.code,
                        image: card.image,
                        name: `${card.value} of ${card.suit}`
                    }
                ]
            }))
        } catch(err){
            alert(err)
        }
    }

    render() {

        const cards = this.state.drawn.map( c => (
            <Card key={c.id} name={c.name} image={c.image}/>
        ))
        return (
            <div className='Deck'>
            <h1 className='Deck-title'>♦ Card Dealer ♦</h1>
            <h2 className='Deck-title subtitle'>
              ♦ A little demo made with React ♦
            </h2>
            <button className='Deck-btn' onClick={this.getCard}>
              Get Card!
            </button>
            <div className='Deck-cardarea'>{cards}</div>
          </div>
        );
    }
}

export default Cards;
