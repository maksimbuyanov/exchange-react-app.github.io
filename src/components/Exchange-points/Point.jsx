import React from 'react';
import './Point.css'


class Point extends React.Component {


    render() {
        let host = window.location.origin
        return (
            
            <div className='point-card container'>
                <picture className='point-card__pic'>
                    <source srcSet={host+this.props.img}/>
                    <img src={host+this.props.img} alt={this.props.title}/>
                </picture>
                <div className='point-card__info'>
                    <h3 className='point-card__title'> {this.props.title}</h3>
                    <p className='point-card__text'>{this.props.text}</p>
                    <address className='point-card__contact'>{this.props.address}</address>
                    <a className='point-card__tel' href={'tel:'+this.props.tel}>{this.props.tel}</a>
                </div>
            </div>
        )
    }
}
export default Point