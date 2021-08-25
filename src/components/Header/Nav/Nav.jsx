import React from 'react';
import './Nav.css';


class Nav extends React.Component {


    render() {
        return (
            <nav className='header-nav container'>
                    <li className='header-nav__item'><a className='header-nav__link' href='/'>Главная</a></li>
                    <li className='header-nav__item'><a className='header-nav__link' href='/exchange-points'>Пункты обмена</a></li>
                    <li className='header-nav__item'><a className='header-nav__link' href='contacts'>Контакты</a></li>
            </nav>
        )
    }

}

export default Nav