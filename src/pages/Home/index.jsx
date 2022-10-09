import React, { useEffect, useRef } from 'react'
import CartCount from '../../components/common/CartCount';
import Footer from '../../components/common/Footer';
import Menu from '../../components/common/Menu';
import Banner from '../../components/Home/Banner';
import { useDispatch, useSelector } from 'react-redux';
import './styles.css';
import { getCartTotal } from '../../redux/features/cartSlice';
import MenuFilter from '../../components/common/MenuFilter';
const Home = () => {
  const {totalCount, items, filterType, type} =  useSelector((state) => state.cart);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCartTotal());
  }, [items])
  const changedItem = [];
  if(type !== 'Default')
  {
    items.map((item) => {
      if(type===item.type)
      {
        changedItem.push(item);
      }
    })
  }
  else
  {
    items.map((item) => {
      changedItem.push(item);
    })
  }
  if(filterType==='ASC')
  {
    changedItem.sort((valA, valB) => {
      return valA.price - valB.price;
    })
  }
  else if(filterType==='DSC')
  {
    changedItem.sort((valA, valB) => {
      return valB.price - valA.price;
    })
  }
  const MenuRef = useRef();
  const handleScrollMenu = () => {
    MenuRef.current.scrollIntoView({behavior: "smooth"});
  }
  return (
    <div className="main-page-content">
        <Banner handleScrollMenu={handleScrollMenu} />
        <MenuFilter ref={MenuRef} />
        <Menu list={changedItem} />
        <Footer />
        <CartCount cartCount={totalCount}/>
    </div>
  )
}


export default Home;