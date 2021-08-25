import React from 'react';
import './Footer.css';


class Footer extends React.Component {

    render() {
        return (
            <footer className='footer'>
                <div className='footer-container container'>
                    <div className='footer-container__item'>
                        <h1 className='footer-container_title'>
                            <a href='http://vk.com/buyanovmaks'>
                                2021 &copy; React developer
                            </a>
                        </h1>
                        <p className='footer-container_subtitle'> All Rights Fuckoff</p>
                    </div>
                    <div className='footer-container__item'>
                        <p className='footer-container__text'>Далеко-далеко за словесными горами в стране гласных и согласных живут рыбные тексты. Обеспечивает несколько свое она языком залетают города безопасную
                        </p>
                    </div>
                    <div className='footer-container__item'>
                        <p className='footer-container__text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore libero placeat dolorem eius odio nemo omnis.
                        </p>
                    </div>
                </div>
            </footer>
        )
    }
}

export default Footer