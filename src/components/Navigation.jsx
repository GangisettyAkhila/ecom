import React from 'react'
import { Link } from 'react-router-dom'

export default function Nav() {
  return (
    <div>
      <Link to="/">Home</Link>
      <Link to="/">Login</Link>
      <Link to="/">Register</Link>
    </div>
  )
}
