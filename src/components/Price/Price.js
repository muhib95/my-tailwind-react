import React from 'react';
import { CheckCircleIcon } from '@heroicons/react/24/solid'
const Price = ({price}) => {
  // console.log(price);
  return (
    <div className='bg-cyan-400 rounded p-10 mt-3'>
      
      <p className='text-3xl'>{price.price} <span>/month</span></p>
      <h2 className='text-4xl'>{price.name}</h2>
      <div>
        <CheckCircleIcon className='h-6 w-6 text-red-400'/>
      </div>
    </div>
  );
};

export default Price;