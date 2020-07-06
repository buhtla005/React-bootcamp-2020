import React from 'react'
import {Link} from 'react-router-dom'


const Navigation = () => {
    return (
        <div className="main-navigation">
            <Link to="/cola" className="main-button"><h2>COLA</h2></Link>
            <Link to="/chips" className="main-button"><h2>CHIPS</h2></Link>
            <Link to="/sardines" className="main-button"><h2>SARDINES</h2></Link>
        </div>
    )
}

export default Navigation
