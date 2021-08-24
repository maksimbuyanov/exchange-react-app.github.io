import React from 'react';
import './Nav.css';


class Nav extends React.Component {


    render() {
        return (
            <nav>
                <ul className='flex-container'>
                    <li className='flex-item nav-item'><a href='/'>Главная</a></li>
                    <li className='flex-item nav-item'><a href='/exchange-points'>Пункты обмена</a></li>
                    <li className='flex-item nav-item'><a href='contacts'>Контакты</a></li>
                </ul>
            </nav>
        )
    }

}

export default Nav