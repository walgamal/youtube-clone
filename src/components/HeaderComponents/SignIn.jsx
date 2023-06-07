import React from 'react'

function SignIn(props) {
  return (
    <div className='sign-in-container'>
        {props.isDots && <img className='sign-in-dots-menu' src="/assets/dotsMenu.svg" alt="dots-menu" />}
        <button className='sign-in-button'>
            <img className='user-icon' src="/assets/userIcon.svg" alt="user-icon" />
            <div className='sign-in-text'>Sign in</div>
        </button>
    </div>
  )
}

export default SignIn