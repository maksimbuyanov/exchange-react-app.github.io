import React from 'react';
import './Calc.css'

class Calc extends React.Component {
    calculate = (e) => {
        const value = e.target.value
        this.props.callback(value)
    }
    render() {
        const selectArr = Object.values(this.props.allCurrency).map(i => {
            let value = i === this.props.currency ? true : false
            return (
                <option selected={value} key={i}>{i}</option>
            )
        })
        return (
            <div className='calc'>
                <div  className='calc-form'>
                    <p className='calc-form__text'>Что бы получить:</p>
                    <select onChange={this.calculate} className='calc-form__select' name="type">
                        {selectArr}
                    </select>
                    <input onChange={this.calculate} className='calc-form__input' type="number" defaultValue={this.props.cash} />
                </div>
                <div className='calc-result'>
                    <h4 className='calc-result__title'>Нужно</h4>
                    <div className='calc-result__number'>
                        {this.props.result}
                    </div>
                    <p className='calc-result__currency'>{this.props.base}</p>
                </div>
            </div>
        )

    }
}
export default Calc