import React from 'react'
import Header from './components/Header'
import Sidebar from './components/Sidebar'
import Body from './components/Body'

function App() {
  return (
    <div className='app'>
      <div className='site-header-container'>
        <Header />
      </div>
      <div className='site-body'>
        <Sidebar/>
        <Body />
      </div>
    </div>
  )
}

export default App