import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../assets/images/logo.png';

export const Header = () => (
  <header className='header container'>
    <div className='logo-container'>
      <NavLink exact to='/'>
        <img src={logo} alt='logo' className='header__logo'/>
      </NavLink>
    </div>
    <nav className='nav header__nav'>
      <ul className='nav__list'>
        <li className='nav__item'>
          <NavLink 
            exact
            to='/' 
            className='nav__link'
            activeClassName='nav__link--active'
          >
            Home
          </NavLink>
        </li>
        <li className='nav__item'>
          <NavLink 
            to='/about' 
            className='nav__link'
            activeClassName='nav__link--active'
          >
            About us
          </NavLink>
        </li>
      </ul>
    </nav>
  </header>
);