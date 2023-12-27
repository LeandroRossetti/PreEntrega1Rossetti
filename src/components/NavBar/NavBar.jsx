import React from 'react'
import CartWidget from '../CartWidget/CartWidget'

const NavBar = () => {
  return (
    <header  className='flex flex-row bg-blue-400 items-center justify-around mb-px border-solid border-2 border-black'>
      <h1 className='text-3xl'>Tienda Equipo Sonder</h1>

      <nav >
        <ul>
            <li className='inline-block m-4 cursor-pointer hover:text-blue-800'>Equipo</li>
            <li className='inline-block m-4 cursor-pointer hover:text-blue-800'>Tests</li>
            <li className='inline-block m-4 cursor-pointer hover:text-blue-800'>Terapias</li>
        </ul>


      </nav>
      <CartWidget />
      
    </header>
  )
}

export default NavBar