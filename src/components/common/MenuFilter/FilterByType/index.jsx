import React from 'react'
import { useDispatch } from 'react-redux'
import {setType} from '../../../../redux/features/cartSlice';
import './styles.css'

const FilterByType = () => {
    const dispatch = useDispatch();
    return (
        <div className="filterByMeal">
            <h3>Meals</h3>
            <div className="filterByMeal-items">
                <h4 onClick={() => dispatch(setType('Lunch'))}>Lunch <i className="fa-solid fa-mug-saucer"></i></h4>
                <h4 onClick={() => dispatch(setType('Breakfast'))}>Breakfast <i className="fa-solid fa-bowl-food"></i></h4>
                <h4 onClick={() => dispatch(setType('Fastfood'))}>Fastfood <i className="fa-solid fa-pizza-slice"></i></h4>
            </div>
        </div>
    )
}

export default FilterByType