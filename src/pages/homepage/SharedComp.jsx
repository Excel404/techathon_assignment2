import React from 'react'
import { Outlet } from 'react-router-dom'
import NavBar from './Navbar/NavBar'

const SharedComp = () => {
  return (
    <div>
        <NavBar />
        <Outlet />

    </div>
  )
}

export default SharedComp