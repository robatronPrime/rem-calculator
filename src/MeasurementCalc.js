import React from "react";

class MeasurementCalc extends React.Component {
    render() {
        const handleChange = this.props.handleChange;

        return (
            <fieldset className="App-fieldset">
                <legend>Enter your measurement:</legend>
                <input 
                    className="App-input"
                    type="number" 
                    value={handleChange.measurement} 
                    onChange={handleChange} />
            </fieldset>
        )
    }
}

export default MeasurementCalc;