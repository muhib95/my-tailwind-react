import React from 'react';
import { CheckCircleIcon } from '@heroicons/react/24/solid'

const Feature = ({featur}) => {
  return (
    <div className='flex '>
      <CheckCircleIcon className='h-6 w-6 text-red-400'/>
      
      <p> {featur}</p>
    </div>
  );
};

export default Feature;