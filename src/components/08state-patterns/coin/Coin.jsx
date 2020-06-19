import React from 'react';

const Coin = ({coin}) => {
     return (
          <div className="coin">
               <img src={`https://tinyurl.com/react-coin-${coin}-jpg`} alt="coin"/>
          </div>
     );
}

export default Coin;
