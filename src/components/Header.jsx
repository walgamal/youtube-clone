import React from 'react'
import HamburgerMenu from './HeaderComponents/HamburgerMenu'
import Logo from './HeaderComponents/Logo'
import Searchbar from './HeaderComponents/Searchbar'
import SignIn from './HeaderComponents/SignIn'

function Header() {
  return (
    <div className='site-header'>
        <HamburgerMenu />
        <Logo />
        <Searchbar />
        <SignIn isDots={true}/>
    </div>
  )
}

export default Header