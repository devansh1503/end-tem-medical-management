import React from 'react'
import {Link} from 'react-router-dom'

function StartingPage() {
  return (
    <div className='startpage'>
      <div className='start'>
        <button><Link to='/login' className='linkText'>Login</Link></button>
        <button><Link to='/register' className='linkText'>New User/Register</Link></button>
      </div>
    </div>
  )
}

export default StartingPage
