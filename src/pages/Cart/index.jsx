import React, { useEffect } from 'react'
import './styles.css';
import Logo from '../../components/common/Logo';
import Footer from '../../components/common/Footer';
import EmptyCart from '../../components/Cart/EmptyCart';
import CartMenu from '../../components/common/CartMenu';
import { useDispatch, useSelector } from 'react-redux';
import { getCartTotal, purchasedone } from '../../redux/features/cartSlice';
import { useNavigate } from 'react-router-dom';
const Cart = () => {
  const { totalAmount, items, totalCount } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    dispatch(getCartTotal());
  }, [items]);
  return (
    <div>
      <div className="cart-header">
        <Logo />
      </div>
      {totalAmount === 0 ? <EmptyCart /> :
        <div className="orders">
          <div className="back-btn" onClick={() => navigate('/')}>
            <button><i className="fas fa-long-arrow-alt-left"></i> Back</button>
          </div>
          <div className="orders-heading"><h1>Your Orders</h1></div>
          <div className="orders-menu">
            <CartMenu list={items} />
          </div>
          <h3 className="orders-total">Your Total ₹{totalAmount}</h3>
          <div className="Checkoutbtn-container">
            <button className='checkout-btn' onClick={() => {navigate('/purchase'); dispatch(purchasedone());}}>Proceed to Buy ({totalCount} {totalCount>1?<>items</>:<>item</>}) <i className="fas fa-long-arrow-alt-right"></i></button>
          </div>
        </div>}
      <Footer />
    </div>
  )
}
export default Cart;