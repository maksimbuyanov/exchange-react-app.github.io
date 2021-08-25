import React from 'react';
import './Header.css';

import Nav from '../Header/Nav/Nav'


class Header extends React.Component {

    render() {
        return (
            <header className='header'>
                <div className='header__top-bar'>Тут могла быть Ваша реклама</div>
                <div className='container'>
                    <h1 className='header__title'>ExChange</h1>
                </div>
                <Nav />
            </header>
        )
    }
}

export default Header