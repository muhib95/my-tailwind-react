import React from 'react';
import Price from '../Price/Price';

const Pricing = () => {
  const pricingOption=[
    {id:1,name:'Free',price:0},
    {id:2,name:'Medium',price:9.9},
    {id:3,name:'Premium',price:19.9},
  ];
  return (
    <div>
      <h1 className='text-amber-500 text-4xl bg-cyan-300 p-5'>Best Deals</h1>
      <div className='md:grid grid-cols-3 gap-3 m-3'>
      {
        pricingOption.map(price=><Price price={price} key={price.id}></Price>)
      }
      </div>
    
    </div>
  );
};

export default Pricing;