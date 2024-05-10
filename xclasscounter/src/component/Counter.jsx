import React, {Component} from 'react';

class Counter extends Component{

    constructor(props){
        super(props);
        this.state={valueOfCount:0};
    }

    handleIncrement = () =>{
        this.setState((prevState)=>({valueOfCount:prevState.valueOfCount+1}));
    }

    handleDecrement = () => {
        this.setState((prevState)=>({valueOfCount:prevState.valueOfCount-1}));
    }

    render(){
        const{valueOfCount} = this.state;

        return(
            <div>
                <h1>Counter App</h1>
                <p>Count: {valueOfCount}</p>
                <div>
                    <button name="Increment" onClick={this.handleIncrement}>Increment</button>
                    <button name="Decrement" onClick={this.handleDecrement}>Decrement</button>
                </div>
            </div>
        );
    }
}

export default Counter;