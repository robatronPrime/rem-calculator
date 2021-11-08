import React from "react";

function Calc(scale, value) {
    if (scale === 'px') {
        return `${value/16}rem`;
    } else if (scale === 'rem') {
        return `${value*16}px`;
    }
}

class Output extends React.Component {
    constructor(props) {
        super(props);
        this.state = '';
    }
    
    render() {
        return (
            <div className="App-output">
                <h3>{this.props.value}{this.props.scale} is equal to {Calc(this.props.scale, this.props.value)}</h3>
            </div>
        )
    }
}

export default Output;