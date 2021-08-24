import React from 'react';
import './Calc.css'

class Calc extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            result: 0
        }
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
    render() {
        return (
            <div className='calc'>
                <form className='flex-container' onSubmit={this.calculate}>
                    <p className='calc-text'>Что бы получить:</p>
                    <select name="type" >
                        {Object.keys(this.props.rate).map(i => {
                            return (
                                <option key={i}>{i}</option>
                            )
                        })}
                    </select>
                    <input type="number" defaultValue='100' name='count' />
                    <input type="submit" value="Расчитать" />
                </form>
                <div className='calc-result'>
                    <h4>Нужно</h4>
                    <div>
                        {this.state.result}
                    </div>
                    <p>EUR</p>
                </div>
            </div>
        )

    }
}
export default Calc