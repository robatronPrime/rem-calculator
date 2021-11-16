import React from "react";

class MeasurementCalc extends React.Component {
    render() {
        const handleChange = this.props.handleChange;
        const value = this.props.value;

        return (
            <fieldset className="App-fieldset">
                <legend>Enter your measurement:</legend>
                <input 
                    className="App-input"
                    type="number" 
                    value={value.join('')} 
                    onChange={handleChange} />
            </fieldset>
        )
    }
}

export default MeasurementCalc;