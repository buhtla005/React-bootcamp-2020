import React, { Component } from 'react'
import {Link} from 'react-router-dom'

export default class FoodSearch extends Component {
    
    constructor(props){
        super(props)
        this.state={
            food: "",
            drink: "",
        }
    }

    handleChange = e => {
        const {name, value} = e.target
        this.setState({
            [name]: value 
        })
    }
    
    historyMe = () => {
        alert("SAVED TO DB!")

        this.props.history.push(`/food/${this.state.food}/drink/${this.state.drink}`)
    }

    render() {
        return (
            <div>
                <h2>SEARCH FOR FOOD</h2>
                <div>
                
                    <label htmlFor="food">Food: </label>
                    <input type="text" id="food" 
                    placeholder="enter your food here..." 
                    name="food" value={this.state.food}
                    onChange={this.handleChange}/>

                    <label htmlFor="drink">Drink: </label>
                    <input type="text" id="drink" 
                    placeholder="enter your drink here..." 
                    name="drink" value={this.state.drink}
                    onChange={this.handleChange}/>
                
                </div>

                <Link to={`/food/${this.state.food}/drink/${this.state.drink}`} >SEARCH</Link>
                <button onClick={this.historyMe}> SAVE TO DB </button>
            </div>
        )
    }
}
