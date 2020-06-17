import React from 'react';
import './Die.css'

const Die = ({dice, rolling}) => {
     const die = [null, "one", "two", "three", "four", "five", "six"]
     
     return (
          <div>
               <i className={`${rolling && "wooble"} die fa-10x fas fa-dice-${die[dice]}`}></i>
          </div>
     );
}

export default Die;
