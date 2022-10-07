import React from 'react';
import MenuItem from '../Menu/MenuItem';
import './styles.css';

const CartMenu = ({list}) => {
  return (
    <main>
      {list.map((item)=> {
      if(item.quantity > 0)
      {
        return (<MenuItem key={item.id} item={item} />);
      } 
      })}
    </main>
  )
}

export default CartMenu;