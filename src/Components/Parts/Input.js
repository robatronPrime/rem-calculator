import React from "react";

class Input extends React.Component {
    render() {
        const handleChange = this.props.handleChange;
        const value = this.props.value;

        return (
            <fieldset className="App-fieldset">
                <legend>Enter your measurement:</legend>
                <input 
                    className="App-input"
                    type="text" 
                    value={value.join('')} 
                    onChange={handleChange} />
            </fieldset>
        )
    }
}

export default Input;