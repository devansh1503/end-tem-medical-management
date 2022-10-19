import React from 'react'
import {Link} from 'react-router-dom'
function Navbar() {
  return (
    <div className='navbar'>
      <h1>HeartCare</h1>
      <ul>
        <li><Link to='/home' className='linkText'>Home</Link></li>
        <li><Link to='/appointment' className='linkText'>Appointment</Link></li>
        <li><Link to='/prescription' className='linkText'>Prescription</Link></li>
        <li><Link to='/users' className='linkText'>Users</Link></li>
        <li><Link to='/' className='linkText'>Log Out</Link></li>
      </ul>
    </div>
  )
}

export default Navbar
