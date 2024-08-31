import React from 'react'
import logo from '../assets/logo.png'
import moon from '../assets/moon.png'

const Header = () => {

  return (
    <div className="filter invert-[1] flex justify-between items-center text-3xl">
      <img src={logo} alt="" />
      <i className='bx bxs-sun'></i>
    </div>
  )
}

export default Header
