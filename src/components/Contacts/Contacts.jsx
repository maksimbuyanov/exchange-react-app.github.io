import React from 'react';
import './Contacts.css'

class Contacts extends React.Component {

    render() {
        return (
           <div className='contacts-container'>
               <p className='contacts-container__text'>Сайт разработан в учебных целях, все совпадения с реальными валютами считать случайными</p>
               <p className='contacts-container__text'>При разработке сайта были использованы технологии: React, React-router, adaptive-design, BEM, API, Flex</p>
               <p className='contacts-container__text'>По поводу идей, доработок и прочих рабочих рабочих моментов писать на почту <a href='email:maksim.buyanov@gmail.com'>maksim.buyanov@gmail.com</a> </p>
           </div>
        )
    }
}
export default Contacts