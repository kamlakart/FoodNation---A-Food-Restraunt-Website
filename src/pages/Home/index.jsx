import React, { useEffect } from 'react'
import CartCount from '../../components/common/CartCount';
import Footer from '../../components/common/Footer';
import Menu from '../../components/common/Menu';
import Banner from '../../components/Home/Banner';
import { useDispatch, useSelector } from 'react-redux';
import './styles.css';
import { getCartTotal } from '../../redux/features/cartSlice';
import MenuFilter from '../../components/common/MenuFilter';
const Home = () => {
  const {totalCount, items} =  useSelector((state) => state.cart);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCartTotal());
  }, [items])
  return (
    <div className="main-page-content">
        <Banner />
        <MenuFilter />
        <Menu list={items} />
        <Footer />
        <CartCount cartCount={totalCount}/>
    </div>
  )
}


export default Home;