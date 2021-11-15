import React from "react";
import MeasurementCalc from "./MeasurementCalc"
import Button from "./Button"
import Output from "./Calculator";

class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: '0',
            measurement: '0',
            buttons: [
                "0",
                "1",
                "2",
                "3",
                "4",
                "5",
                "6",
                "7",
                "8",
                "9"
            ]
        };

        this.onClick = this.handleClick.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleClick(event) {
        event.preventDefault();
        const target = event.target;
        console.log(this.state.measurement);
        // this.setState({measurement: target.dataset.value});
    }

    handleChange(event) {
        console.log(this.state.measurement);
        this.setState({measurement: event.target.value});
    }
    
    render() {
        const buttons = this.state.buttons;

        return (
            <form>
                < Output scale="px" value={this.state.measurement}/>
                < Output scale="rem" value={this.state.measurement}/>
                < MeasurementCalc handleChange={this.handleChange} />
                <div>
                    {
                        buttons.map((button,index)=>{
                            return < Button key={index} value={button} handleClick={this.handleClick} />;
                        })
                    }
                </div>
            </form>
        )
    }
}

export default Form;
