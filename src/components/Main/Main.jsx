import React from 'react';
import './Main.css'

import Calc from './Calc/Calc'

class Main extends React.Component {
    constructor(props) {
        super(props)
        this.currency = ['USD', 'RUB', 'CAD', 'BTC']
        this.state = {
            base: 'EUR',
            date: '01-01-1990',
            rates: {
                'USD': 2,
                'RUB': 3,
                'CAD': 4,
                'BTC': 0.002
            },
            selectedCurrency: '',
            cash: 100,
            result: 0
        }
    }
    getRate = () => {
        fetch('http://api.exchangeratesapi.io/v1/latest?access_key=a43674db18bb90b8fd9efb1ac1506bde')
            .then(data => {
                return data.json()
            })
            .then(data => {
                this.setState({ date: data.date });
                this.setState({ base: data.base });
                let result = {};
                this.currency.forEach(item => {
                    result[item] = data.rates[item]
                })
                this.setState({ rates: result })
            })
    }
    _setSelectedCurrency = (currency = this.currency[2]) => {
        let obj = { currency: currency, rate: this.state.rates[currency] }
        this.setState({ selectedCurrency: obj })
    }
    _recalculateUpdateCurrency =  (newcurrency) => {
        let rate = this.state.rates[newcurrency]
        this.setState({ result: (this.state.cash / rate).toFixed(2)})
    }
    calculate = (value) => {
        let cash = this.state.cash 
        if (this.currency.includes(value)) {
            this._setSelectedCurrency(value)
            this._recalculateUpdateCurrency(value)
        } else if (typeof Number(value) === 'number') {
            this.setState({ cash: Number(value) })
            cash = Number(value)
            this.setState({ result: (cash / this.state.rates[this.state.selectedCurrency.currency]).toFixed(2)})
        } 
    }
    selectCurrency = (event) => {
        const ratesArray = Object.keys(this.state.rates)
        if (ratesArray.includes(event.target.firstChild.textContent)) {
            let value = event.target.firstChild.textContent
            this._setSelectedCurrency(value)
            this._recalculateUpdateCurrency(value)
        } else if (ratesArray.includes(event.target.parentElement.firstChild.textContent)) {
            let value = event.target.parentElement.firstChild.textContent
            this._setSelectedCurrency(value)
            this._recalculateUpdateCurrency(value)
        }
    }
    componentDidMount() {
        this.getRate()
        this._setSelectedCurrency()
    }
    render() {
        const renderCardCurrency = Object.keys(this.state.rates).map(i => {
            return (
                <div className='main__item' key={i} onClick={this.selectCurrency}>
                    <div className='main__item-name'>{i}</div>
                    <p className='main__item-promt'>{this.state.rates[i]} {i}<br /> за 1 {this.state.base}</p>
                </div>)
        });

        return (
            <div className='main'>
                <div className='container'>
                    <h3 className='main__date'> Курс валют на {this.state.date}</h3>
                    <div className='main__content'>
                        {renderCardCurrency}
                    </div>
                    <Calc
                        allCurrencyArr={this.currency}
                        selectedCurrency={this.state.selectedCurrency.currency}
                        base={this.state.base}
                        callback={this.calculate}
                        result={this.state.result}
                        cash={this.state.cash}
                    />
                </div>
            </div>
        )
    }
}
export default Main