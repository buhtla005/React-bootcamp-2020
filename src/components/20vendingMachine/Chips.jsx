import React, {Component} from 'react'
import TextButtonArea from './TextButtonArea'
import chips from './img/chips.png'

class Chips extends Component {
    
    constructor(props){
        super(props)
        this.state={
            chips_num: 0,
            bags: []
        }
    }

    addNumber = () => {
        const x = window.innerWidth * Math.random() - 100
        const y = window.innerHeight * Math.random() -100

        this.setState( cs => ({
            chips_num: cs.chips_num + 1,
            bags: [...cs.bags, {x,y}],
            })
        )
    }

    render(){

        const bags = this.state.bags.map((bag,i) => (
            <img 
                key={i} 
                src={chips} 
                className="bag" 
                style={{top: `${bag.y}px`, left:`${bag.x}px`}} 
                alt="bag of chips" 
            />
        ))

        return (
            <div className="chips">
                <TextButtonArea 
                    text={`Bags eaten: ${this.state.chips_num} `} 
                    button={true} 
                    addNumber={this.addNumber}
                />
                {bags}
            </div>
        )
    }
}

export default Chips