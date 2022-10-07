import React from 'react';
import { useDispatch } from 'react-redux';
import { decrease, increase } from '../../../redux/features/cartSlice';
import './styles.css';

const ButtonAddRemoveItem = ({id, quantity}) => {
  const dispatch = useDispatch();
  return (
    <div className="btnAddRemove">
        {quantity!==0?
        (<div className="btnAddRemove-positive">
            <i className="fa fa-minus" onClick={() => dispatch(decrease(id))}></i>
            <span>{quantity}</span>
            <i className="fa fa-plus" onClick={() => dispatch(increase(id))}></i>
        </div>):
        (<div className="btnAddRemove-negative" onClick={() => dispatch(increase(id))}>
            <span>ADD</span>
            <i className="fa fa-plus" ></i>
        </div>)}
    </div>
  )
}

export default ButtonAddRemoveItem