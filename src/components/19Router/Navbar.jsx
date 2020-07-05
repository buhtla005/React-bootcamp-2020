import React from 'react'
import {NavLink} from 'react-router-dom'
import './Uredi.css'

export default function Navbar() {
    return (
        <div>
            <NavLink exact activeClassName="active-link" to="/">About</NavLink>
            <NavLink exact activeClassName="active-link" to="/dog">Dog</NavLink>
            <NavLink exact activeClassName="active-link" to="/contact">Contact</NavLink>
        </div>
    )
}
