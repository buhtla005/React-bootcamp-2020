import React from 'react'
import TextButtonArea from './TextButtonArea'
import cola from './img/cola.png'

const Cola = () => {
    return (
        <div className="cola">
            <div className="img-cola">
                <img src={cola}/>
            </div>
            <div className="cola-div">
                <TextButtonArea text={"OMG SHUGARRRRRRRRRRRRR!"} button={false}/>
            </div>
            <div className="img-cola">
                <img src={cola}/>
            </div>
        </div>
    )
}

export default Cola