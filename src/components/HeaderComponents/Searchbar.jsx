import React from 'react'

function Searchbar() {
  return (
    <div className='site-search-bar-container'>
        <div className='search-bar-border'>
            <input 
                className='site-search-input' 
                type='text'
                placeholder='Search'
                name='searchText'
                id='searchBar'
            />
        </div>
        <div className='search-button-container'>
            <button className='search-button'>
                <img className='search-icon' src="/assets/searchIcon.svg" alt="search-icon" />
            </button>
        </div>
        <img className='microphone-icon' src="/assets/microphoneIcon.svg" alt="mic-icon" />
    </div>
  )
}

export default Searchbar