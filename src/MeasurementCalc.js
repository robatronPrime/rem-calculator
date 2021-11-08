import React from "react";
import Output from "./Calculator";

const scaleNames = {
    px: 'Pixels',
    rem: 'Root EM'
}

class MeasurementCalc extends React.Component {
    constructor(props) {
        super(props);
        this.state = {measurement: ''};

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({measurement: event.target.value});
    }

    render() {
        const measurement = this.state.measurement;
        const scale = this.props.scale;

        return (
            <fieldset className="App-fieldset">
                <legend>Enter your measurement in {scaleNames[scale]}:</legend>
                <input 
                    className="App-input"
                    type="number" 
                    value={measurement} 
                    onChange={this.handleChange} />
                < Output scale={scale} value={measurement}/>
            </fieldset>
        )
    }
}

export default MeasurementCalc;