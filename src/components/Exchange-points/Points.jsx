import React from 'react';
import Point from './Point';
import './Points.css'

class Points extends React.Component {
    constructor(props) {
        super(props);
        this.pointsContainer = React.createRef();
    }

    componentDidMount () {
        setTimeout(()=>this.pointsContainer.current.classList.remove('points-none') ,700)
        
    }

    render() {
        return (
            <div className='container points points-none' ref={this.pointsContainer}>
                {Object.values(this.props.data).map (i => {
                    return <Point key={i.pointName} title={i.pointName} text={i.about} address={i.address} img={i.img} tel={i.tel}/>
                })}
                 {Object.values(this.props.data).map (i => {
                    return <Point key={i.pointName} title={i.pointName} text={i.about} address={i.address} img={i.img} tel={i.tel}/>
                })}
                 {Object.values(this.props.data).map (i => {
                    return <Point key={i.pointName} title={i.pointName} text={i.about} address={i.address} img={i.img} tel={i.tel}/>
                })}
            </div>
        )
    }
}

export default Points