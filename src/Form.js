import React from "react";
import MeasurementCalc from "./MeasurementCalc"

class Form extends React.Component {    
    render() {
        return (
            <form>
                < MeasurementCalc scale="px" />
                < MeasurementCalc scale="rem" />
            </form>
        )
    }
}

export default Form;
