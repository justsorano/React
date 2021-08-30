import React from 'react'
import { NavLink } from 'react-router-dom'

export const Navbar = () =>{
return (
      <div className='Navbar'>
            <nav className='Navbar__column'>
                  <li className='Navbar__row'>
                  <NavLink className='Navbar__link _active _icon-trophy' exact to='/'>Главная</NavLink>
                  </li>
                  <li className='Navbar__row'>
                  <NavLink className='Navbar__link' exact to='/about'>О сайте</NavLink>
                  </li>
                  <li className='Navbar__row'>
                  <NavLink className='Navbar__link' exact to='/popular'>Популярное</NavLink>
                  </li>
                  <li className='Navbar__row'>
                  <NavLink className='Navbar__link _icon-login' exact to='/auth'>Логин</NavLink>
                  </li>
            </nav>
      </div>
)
}