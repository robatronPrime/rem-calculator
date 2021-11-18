import React from "react";

class Output extends React.Component {
    constructor(props) {
        super(props);
        
        this.calc = this.calc.bind(this);
    }

    calc(scale, value) {
        if (value) {
            value = value.join('');
        }
        if (scale === 'px') {
            return `${value/16}rem`;
        } else if (scale === 'rem') {
            return `${value*16}px`;
        }
    }

    render() {
        const value = this.props.value;
        let valueOutput;
        console.log(value.length);

        if (value.length == 0) {
            valueOutput = 0;
        } else {
            valueOutput = this.props.value;
        }

        return (
            <div className="App-output">
                <h3>{valueOutput}{this.props.scale} is equal to {this.calc(this.props.scale, value)}</h3>
            </div>
        )
    }
}

export default Output;