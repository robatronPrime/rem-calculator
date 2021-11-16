import React from "react";
import MeasurementCalc from "./MeasurementCalc"
import Button from "./Button"
import Output from "./Calculator";

class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: '0',
            calc: [],
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
                "9",
                "."
            ]
        };

        this.handleClick = this.handleClick.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleClick(event) {
        this.setState((prevState) => ({
            calc: [...prevState.calc, event.target.value]
        }));
        event.preventDefault();
    }

    handleChange(event) {
        this.setState({calc: [event.target.value]});
    }
    
    render() {
        const buttons = this.state.buttons;

        return (
            <form>
                < Output scale="px" value={this.state.calc}/>
                < Output scale="rem" value={this.state.calc}/>
                < MeasurementCalc handleChange={this.handleChange} value={this.state.calc} />
                <div>
                    {
                        buttons.map((button,index)=>{
                            return < Button key={index} value={button} handleClick={this.handleClick}/>;
                        })
                    }
                </div>
            </form>
        )
    }
}

export default Form;
