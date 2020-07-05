import React, { Component } from 'react';
import axios from 'axios'
import './ZenQuote.css'

class ZenQuote extends Component {

    constructor(props){
        super(props)
        this.state = {
            quote: "",
            isLoaded: false,
        }
    }

    componentDidMount(){
        /*ZELIM SAMO UCITAT*/
        /*
        axios.get("https://api.github.com/zen").then(response => {
            this.setState({ quote: response.data})
        })
        */

        /* ZELIM SI DAT VREMENA KOD UCITAVANJA TAKO DA PRIKAZEMO IKONU */
        axios.get("https://api.github.com/zen").then(response => {
            setTimeout(
                () => {
                    this.setState({ 
                        quote: response.data,
                        isLoaded: true })
                }, 
            3000)
        })

    }

    componentDidUpdate(){
        console.log("INSIDE DID UPDATE BUT FTER RENDER!")
    }

    render() {
        return (
            <div>
                {
                    this.state.isLoaded ? 
                    <div>
                        <h1>Always remember...</h1>
                        <p>{this.state.quote}</p>
                    </div> :
                    <div class="loader">
                        <div class="dots"></div>
                        <div class="dots"></div>
                        <div class="dots"></div>
                    </div>
                }            
            </div>
        );
    }
}

export default ZenQuote;
