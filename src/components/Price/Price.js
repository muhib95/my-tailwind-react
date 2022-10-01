import React from 'react';

import Feature from '../Feature/Feature';
const Price = ({price}) => {
  const {features}=price;
  console.log(price);
  return (
    <div className='bg-cyan-400 rounded p-10 mt-3'>
      
      <p className='text-3xl'>{price.price} <span>/month</span></p>
      <h2 className='text-4xl'>{price.name}</h2>
      <div>
        
        {
        features.map(featur=><Feature featur={featur}></Feature>)
      }
      </div>
    <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded'>Buy now</button>
    </div>
  );
};

export default Price;