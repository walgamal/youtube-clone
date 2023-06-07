import React from 'react'

function SidebarButton(props) {
  return (
    <div>
        <button className='sidebar-button'>
            <div className='sidebar-button-img-container'>
              <img className='sidebar-button-img' src={`/assets/SidebarIcons/${props.buttonText}Icon.svg`}  alt={props.buttonImg} />
            </div>
            <p className='sidebar-button-text'>{props.buttonText}</p>
        </button>
    </div>
  )
}

export default SidebarButton