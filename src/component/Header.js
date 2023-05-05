import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <div>
        <Link to='/read'>
            <button className='btn '>read</button>
        </Link>
        <Link to='/create'>
            <button className='btn '>create</button>
        </Link>
    </div>
  )
}

export default Header