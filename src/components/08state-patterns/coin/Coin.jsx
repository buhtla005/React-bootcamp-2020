import React from 'react';

const Coin = ({side, imgSrc}) => {
     return (
          <div className="coin">
               <img src={imgSrc} alt="coin"/>
          </div>
     );
}

export default Coin;
