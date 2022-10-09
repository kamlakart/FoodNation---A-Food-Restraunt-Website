import React from 'react'
import { useDispatch } from 'react-redux'
import {changefilterType} from '../../../../redux/features/cartSlice';
import './styles.css'

const FilterByPrice = () => {
    const dispatch = useDispatch();
    return (
        <div className="filterOptionsPrice">
            <h3>Price</h3>
            <div className="filterByPrice">
                <h4 onClick={() => dispatch(changefilterType('ASC'))}>Asc <i className="fa fa-arrow-up"></i></h4>
                <h4 onClick={() => dispatch(changefilterType('DSC'))}>Dsc <i className="fa fa-arrow-down"></i></h4>
            </div>
        </div>
    )
}

export default FilterByPrice