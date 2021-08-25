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
        this.CalcComp = React.createRef()
    }

    selectCurrency = (event) => {
        const ratesArray = Object.keys(this.state.rates)
        if (ratesArray.includes(event.target.firstChild.textContent)) {
            this.CalcComp.current.select.current.value = event.target.firstChild.textContent
        }
    }

    render() {
        return (
            <div className='main'>
                <div className='container'>
                    <h3 className='main__date'> Курс валют на {this.state.date.toLocaleDateString()}</h3>
                    <div className='main__content'>
                        {Object.keys(this.state.rates).map(i => {
                            return (
                                <div className='main__item' key={i} onClick={this.selectCurrency}>
                                    <div className='main__item-name'>{i}</div>
                                    <p className='main__item-promt'>{this.state.rates[i]} {i}<br /> за 1 {this.state.base}</p>
                                </div>)
                        })
                        }
                    </div>
                    <Calc rate={this.state.rates} base={this.state.base} ref={this.CalcComp}/>
                </div>
            </div>
        )
    }
}
export default Main