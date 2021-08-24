import React from 'react'
import { NavLink } from 'react-router-dom'

export const Navbar = () =>{
   return (
      <div className='Navbar'>
            <nav className='Navbar__column'>
                  <li className='Navbar__row'>
                  <NavLink className='Navbar__link _active' exact to='/'>Главная</NavLink>
                  </li>
                  <li className='Navbar__row'>
                  <NavLink className='Navbar__link' exact to='/about'>О сайте</NavLink>
                  </li>
                  <li className='Navbar__row'>
                  <NavLink className='Navbar__link' exact to='/about'>Популярное</NavLink>
                  </li>
                  <li className='Navbar__row'>
                  <NavLink className='Navbar__link' exact to='/auth'>Логин</NavLink>
                  </li>
            </nav>
      </div>
   )
}