import React from 'react'
import { useDispatch } from 'react-redux'
import { changefilterType, setType } from '../../../redux/features/cartSlice';
import './styles.css'
const MenuFilter = () => {
  const dispatch = useDispatch();
  return (
    <div className='filter-container'>
      <div className="filterOptionsPrice">
        <h3>Price</h3>
        <div className="filterByPrice">
          <h4 onClick={() => dispatch(changefilterType('ASC'))}>ASC <i className="fa fa-arrow-up"></i></h4>
          <h4 onClick={() => dispatch(changefilterType('DSC'))}>DSC <i className="fa fa-arrow-down"></i></h4>
        </div>
      </div>
      <div className="filterByMeal">
        <h3>Meals</h3>
        <div className="filterByMeal-items">
          <h4 onClick={() => dispatch(setType('Lunch'))}>Lunch <i class="fa-solid fa-mug-saucer"></i></h4>
          <h4 onClick={() => dispatch(setType('Breakfast'))}>Breakfast <i class="fa-solid fa-bowl-food"></i></h4>
          <h4 onClick={() => dispatch(setType('Fastfood'))}>Fastfood <i class="fa-solid fa-pizza-slice"></i></h4>
        </div>
      </div>
    </div>
  )
}

export default MenuFilter