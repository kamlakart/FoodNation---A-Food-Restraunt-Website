import React, { useEffect } from 'react'
import './styles.css';
import Logo from '../../components/common/Logo';
import Footer from '../../components/common/Footer';
import EmptyCart from '../../components/Cart/EmptyCart';
import CartMenu from '../../components/common/CartMenu';
import { useDispatch, useSelector } from 'react-redux';
import { getCartTotal } from '../../redux/features/cartSlice';
const Cart = () => {
  const { totalAmount, items } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
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
        <div className="orders-heading"><h1>Your Orders</h1></div>
        <div className="orders-menu">
          <CartMenu list={items} />
        </div>
        <h3 className="orders-total">Your Total ${totalAmount}</h3>
      </div>}
      <Footer />
    </div>
  )
}
export default Cart;