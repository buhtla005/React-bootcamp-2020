import React, { Component } from 'react'
import {Rederect, Redirect} from 'react-router-dom'

class Food extends Component {

    render(){
        const foodName = this.props.match.params.foodName
        const drinkName = this.props.match.params.drinkName
        const foodUrl = `https://source.unsplash.com/1600x900/?${foodName}`
        const drinkUrl = `https://source.unsplash.com/1600x900/?${drinkName}`
        return (
            <div>
                {
                    /\d/.test(foodName) || /\d/.test(drinkName) ? 
                    <Redirect to="/"/> :
                    <div>
                        <h2>I love to eat {foodName} with a fine glass of {drinkName}</h2>
                        <img src={foodUrl} alt="food" width={400} height={300}/>
                        <img src={drinkUrl} alt="drink" width={400} height={300}/>    
                    </div>
                }

            </div>
        )
    }
}

export default Food
