import React from 'react'

function FooterButton(props) {
  return (
    <button className='sidebar-footer-button'>
        {props.text}
    </button>
  )
}

export default FooterButton