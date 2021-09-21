import React from 'react';
import './Main.css'

import Calc from './Calc/Calc'

class Main extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            base: '',
            date: '',
            rates: {}
        }
        this.currency = ['USD', 'RUB', 'CAD', 'BTC']
        this.CalcComp = React.createRef()
    }
    getRate = () => {
        fetch('http://api.exchangeratesapi.io/v1/latest?access_key=a43674db18bb90b8fd9efb1ac1506bde')
            .then(data => {
                return data.json()
            })
            .then(data => {
                this.setState({date: data.date});
                this.setState({base: data.base});
                let result={};
                this.currency.forEach(item => {
                    result[item]=data.rates[item]
                })
                this.setState({rates: result})
            })
    }
    selectCurrency = (event) => {
        const ratesArray = Object.keys(this.state.rates)
        if (ratesArray.includes(event.target.firstChild.textContent)) {
            this.CalcComp.current.select.current.value = event.target.firstChild.textContent
        }
    }
    componentDidMount() {
        this.getRate()
    }
    render() {
        return (
            <div className='main'>
                <div className='container'>
                    <h3 className='main__date'> Курс валют на {this.state.date}</h3>
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
                    <Calc rate={this.state.rates} base={this.state.base} ref={this.CalcComp} />
                </div>
            </div>
        )
    }
}
export default Main