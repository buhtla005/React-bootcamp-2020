import React, {Component} from 'react'
import {Link} from 'react-router-dom'

class TextButtonArea extends Component{

    handleChange = () => (
        this.props.addNumber()
    )

    render(){
        return (
            <div className="rounded-centar-content-div">
                <div><h2>{this.props.text}</h2></div>
                <div className="width-100">{this.props.button && <button onClick={this.handleChange}><h2 className="button-text">GET CHIPS</h2></button>}</div>
                <div><Link to="/" className="main-button"><h2>BACK</h2></Link></div>
            </div>
        )
    }
}

export default TextButtonArea