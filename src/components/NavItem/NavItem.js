import React from 'react';

const NavItem = ({item}) => {
  // console.log(item);
  return (
    
        <li><a className='m-3' href={item.path}>{item.name}</a></li>
     
  );
};

export default NavItem;