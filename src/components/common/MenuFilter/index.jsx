import React, { forwardRef } from 'react'
import FilterByPrice from './FilterByPrice';
import FilterByType from './FilterByType';
import './styles.css'
const MenuFilter = forwardRef(({}, ref) => (
    <div className='filter-container' ref={ref} >
      <FilterByPrice />
      <FilterByType />
    </div>
  ));
export default MenuFilter