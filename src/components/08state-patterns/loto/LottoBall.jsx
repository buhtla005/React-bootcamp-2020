import React from 'react';
import './LottoBall.css'

const LottoBall = ({number}) => {
     return (
          <div className="ball">
               {number}
          </div>
     );
}

export default LottoBall;
