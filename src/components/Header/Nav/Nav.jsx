import React from 'react';
import './Nav.css';
import { NavLink } from 'react-router-dom';


class Nav extends React.Component {


    render() {
        return (
            <nav className='header-nav container'>
                    <li className='header-nav__item'><NavLink className='header-nav__link' to='/'>Главная</NavLink></li>
                    <li className='header-nav__item'><NavLink className='header-nav__link' to='/exchange-points'>Пункты обмена</NavLink></li>
                    <li className='header-nav__item'><NavLink className='header-nav__link' to='contacts'>Контакты</NavLink></li>
            </nav>
        )
    }

}

export default Nav