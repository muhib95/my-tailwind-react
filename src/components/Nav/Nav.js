import React, { useState } from 'react';
import NavItem from '../NavItem/NavItem';
import { Bars3Icon ,XMarkIcon} from '@heroicons/react/24/solid'

const Nav = () => {
  const [open,setOpen]=useState(true);
  const navItems=[
    {id:1,name:'Home',path:'/home'},
    {id:2,name:'Product',path:'/product'},
    {id:3,name:'Order',path:'/order'},
    {id:4,name:'Contact',path:'/contact'},
    {id:5,name:'About',path:'/about'},
  ];
  return (
    <nav className='bg-orange-300 w-full h-8'>
      <div onClick={()=>setOpen(!open)} className="h-8 w-6 md:hidden">
      {
        open? <Bars3Icon/>:<XMarkIcon/>
      }
      </div>
     
        
        <ul className={`bg-orange-300 md:flex justify-center absolute md:static duration-500 ease-in w-full ${open? 'top-[-150px]':'top-8' }`}>
        
     {
      navItems.map(item=><NavItem item={item} key={item.id}></NavItem>)
     } 
    </ul>
    </nav>
  
  );
};

export default Nav;