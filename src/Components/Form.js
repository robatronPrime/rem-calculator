import React, {usestate} from "react";
import Input from "./Parts/Input"
import Button from "./Parts/Button"
import Output from "./Parts/Output";

function Form(props) {
    const [value, setValue] = usestate('0');
    const [calc, setCalc] = usestate([]);
    const [buttons, setButtons] = usestate([
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
    ]);

    // function handleClick(event) {
    //     
    // }

    render() {
        const buttons = this.state.buttons;

        return (
            <form>
                < Output scale="px" value={this.state.calc}/>
                < Output scale="rem" value={this.state.calc}/>
                < Input handleChange={this.handleChange} value={this.state.calc} />
                <div>
                    {
                        buttons.map((button,index)=>{
                            return < Button key={index} value={button} handleClick={(event) => setCalc([...calc, event.target.value])}/>;
                        })
                    }
                </div>
            </form>
        )
    }

}

class FormOld extends React.Component {
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
    
    
}

export default Form;
