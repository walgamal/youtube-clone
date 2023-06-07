import React from 'react'

function FilterButton(props) {
  return (
    <button className='filter-button'>
        {props.text}
    </button>
  )
}

export default FilterButton