import React from 'react';
import './Calc.css'

class Calc extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            result: 0,
            selectedCurrency: ''
        }
        this.select = React.createRef()
    }

    calculate = (e) => {
        e.preventDefault()
        const elements = e.target.elements
        const type = (elements.type.value)
        const count = (elements.count.value)
        this.setState({ result: (count / this.state.rate[type]).toFixed(2) })
    }
    static getDerivedStateFromProps(props, state) {
        return { rate: props.rate }
    }
    componentDidMount() {
        this.setState({selectedCurrency: this.select.current.value })
    }
    render() {
        return (
            <div className='calc'>
                <form className='calc-form' onSubmit={this.calculate}>
                    <p className='calc-form__text'>Что бы получить:</p>
                    <select className='calc-form__select' name="type" ref={this.select}>
                        {Object.keys(this.props.rate).map(i => {
                            return (
                                <option key={i}>{i}</option>
                            )
                        })}
                    </select>
                    <input className='calc-form__input' type="number" defaultValue='100' name='count' />
                    <input className='calc-form__input' type="submit" value="Расчитать" />
                </form>
                <div className='calc-result'>
                    <h4 className='calc-result__title'>Нужно</h4>
                    <div className='calc-result__number'>
                        {this.state.result}
                    </div>
                    <p className='calc-result__currency'>{this.props.base}</p>
                </div>
            </div>
        )

    }
}
export default Calc