import React from "react";

class Button extends React.Component {
    render() {
        const value = this.props.value;
        const handleClick = this.props.handleClick;

        return (
            <button onClick={handleClick} data-value={value}>
                {value}
            </button>
        )
    }
}

export default Button;