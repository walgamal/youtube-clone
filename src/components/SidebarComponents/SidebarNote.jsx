import React from 'react'

function SidebarNote(props) {
  return (
    <div>
      <p className='sidebar-note'>{props.note}</p>
    </div>
  )
}

export default SidebarNote