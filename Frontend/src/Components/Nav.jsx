import React from 'react'
import { NavLink } from 'react-router-dom'

const Nav = () => {
  return (
    <nav className="bg-[#0f0f0f] px-6 py-4 flex justify-between items-center shadow-lg border-b border-gray-800">
      {/* Logo */}
      <h1 className="text-3xl font-extrabold text-white tracking-wide">
        <span className="text-indigo-500">E</span>COMM
      </h1>

      {/* Links */}
      <div className="flex gap-6 text-sm font-medium">
        <NavLink
          to="/"
          className="text-gray-400 hover:text-white hover:underline underline-offset-4 transition-all duration-200 ease-in-out"
        >
          Home
        </NavLink>

        <NavLink
          to="/login"
          className="text-gray-400 hover:text-white hover:underline underline-offset-4 transition-all duration-200 ease-in-out"
        >
          Login
        </NavLink>
        
        <NavLink
          to="/products"
          className="text-gray-400 hover:text-white hover:underline underline-offset-4 transition-all duration-200 ease-in-out"
        >
          Products
        </NavLink>

        <NavLink
          to="/cart"
          className="text-gray-400 hover:text-white hover:underline underline-offset-4 transition-all duration-200 ease-in-out"
        >
          Cart
        </NavLink>

      </div>
    </nav>
  )
}

export default Nav
