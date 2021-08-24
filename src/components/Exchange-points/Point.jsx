import React from 'react';
import './Point.css'


class Point extends React.Component {


    render() {
        let host = window.location.origin
        return (
            
            <div className='points-card container point-card-flex'>
                <picture>
                    <source srcSet={host+this.props.img}/>
                    <img src={host+this.props.img} alt='exchange-point'/>
                </picture>
                <div>
                    <h3 className='points-title'> {this.props.title}</h3>
                    <p className='points-text'>{this.props.text}</p>
                    <address className='points-contact'>{this.props.address}</address>
                    <a className='points-tel' href={'tel:'+this.props.tel}>{this.props.tel}</a>
                </div>
            </div>
        )
    }
}
export default Point