import React from 'react';
import './Header.css';

import Nav from '../Header/Nav/Nav'


class Header extends React.Component {

    render() {
        return (
            <header className='header'>
                <div className='top-bar'></div>
                <div className='main-header'>
                    <div className='container'>
                        <h1 className='site-title'>ExChange</h1>
                    </div>
                </div>
                <div className='header-nav'>
                    <div className='container'>
                        <Nav />
                    </div>
                </div>
            </header>
        )
    }
}

export default Header