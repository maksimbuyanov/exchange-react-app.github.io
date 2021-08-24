import React from 'react';
import './Main.css'

import Calc from './Calc/Calc'

class Main extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            base: 'EUR',
            date: new Date(),
            rates: {
                CAD: 1.4682,
                USD: 1.1139,
                RUB: 71.0786,
                EUR: 1,
                BTC: 0.0002
            }
        }
    }

    render() {
        return (
            <div className='main'>
                <div className='container'>
                    <h3 className='main-date'> Курс валют на {this.state.date.toLocaleDateString()}</h3>
                    <div className='flex-container'>
                        {Object.keys(this.state.rates).map(i => {

                            return (
                                <div className='flex-item' key={i}>
                                    <div className='currency-name'>{i}</div>
                                    <p className='currency-promt'>{this.state.rates[i]} {i}<br/> за 1 {this.state.base}</p>
                                    
                                </div>)
                        })
                        }
                    </div>
                    <Calc rate={this.state.rates}/>
                </div>
            </div>
        )
    }
}
export default Main