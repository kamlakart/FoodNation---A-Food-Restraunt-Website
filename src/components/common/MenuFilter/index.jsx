import React from 'react'
import './styles.css'
const MenuFilter = () => {
  return (
    <div className='filter-container'>
        <div className="filterOptions">
            <h3>Price</h3>
            <div className="filterByPrice">
                <h4>ASC <i className="fa fa-arrow-up"></i></h4>
                <h4>DSC <i className="fa fa-arrow-down"></i></h4>
            </div>
        </div>
    </div>
  )
}

export default MenuFilter