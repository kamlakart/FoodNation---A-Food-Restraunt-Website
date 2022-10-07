import React from 'react'
import './styles.css';
import {useNavigate} from 'react-router-dom';

const CartCount = ({cartCount}) => {
  const navigate = useNavigate();
  return (
    <div className="btnCartCount" onClick={()=>navigate('/cart')}>
        <div className="count">
          {cartCount>=100?'99+':cartCount}
        </div>
        <i className="fas fa-shopping-cart"></i>
    </div>
  )
}

export default CartCount