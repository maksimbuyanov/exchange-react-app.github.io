import React from 'react';
import './Footer.css';


class Footer extends React.Component {
    // constructor(props) {
    //     super(props)
    // }
    render() {
        return (
            <footer className='footer'>
                
                <div className='footer-bottom'>
                    <div className='container'>
                        <div className='flex-container'>
                            <div className='flex-item'>
                                <h1 className='footer-title'>
                                    <a href='http://vk.com/buyanovmaks'>
                                        2021 &copy; React developer
                                    </a>
                                </h1>
                                <p> All Rights Fuckoff</p>
                            </div>
                            <div className='flex-item'>
                                Далеко-далеко за словесными горами в стране гласных и согласных живут рыбные тексты. Обеспечивает несколько свое она языком залетают города безопасную

                            </div>
                            <div className='flex-item'>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore libero placeat dolorem eius odio nemo omnis.

                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        )
    }
}

export default Footer