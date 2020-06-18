import React from 'react';
import Screen from './Screen';
import MinusButton from './MinusButton';
import PlusButton from './PlusButton';

class Counter extends React.Component {
    state = {
        count: 0
    };

    handleMinus = () => {
        console.log('clicked minus');
        this.setState((state)=>{
           return {
                count: state.count - 1
            }
        });

    };

    handlePlus = () => {
        console.log('clicked plus');
        this.setState({
            count: this.state.count + 1
        });

    };

    render() {
        return (
            <div>
                <MinusButton click={this.handleMinus} />
                <Screen count={this.state.count} />
                <PlusButton click={this.handlePlus} />
            </div>
        )
    }
}

export default Counter;