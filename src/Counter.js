import React, {useState, useEffect } from 'react';
import Screen from './Screen';
import MinusButton from './MinusButton';
import PlusButton from './PlusButton';
import {connect} from 'react-redux';
import * as actions from './store/actions';

/* class Counter extends React.Component {
constructor(props){
    super(props)
    this.state = {show: true};
    console.log('Counter constructor');
}

componentDidMount(){
    console.log('Counter componentDidMount');
}

componentDidUpdate(){
    console.log('Counter componentDidUpdate');
}



clickHnadler = ()=>{
    this.setState({show: !this.state.show});
};

    render() {
        console.log('Counter render');
        // console.log('this.props.tasks', this.props.tasks);
        return (
            <div>
                <MinusButton />
                {this.state.show && <Screen  />}
                <PlusButton />
                <button onClick = {this.props.getTasks}>Get tasks</button>
                <button onClick = {this.clickHnadler}>Click me</button>

            </div>
        )
    }
}

   const mapDispatchToProps = {
        getTasks: actions.getTasks
   };

export default connect(null, mapDispatchToProps)(Counter); */

function Counter(props) {
   
            console.log('Counter render');

            const [show, toggle] =  useState(true);

             /*    const show = state[0];
                const toggle = state[1]; */

            const [inputValue, setInputValue] =  useState('');

           const clickHandler = ()=>{
            toggle(!show);
           }

           //componentDidMount, componentDidUpdate
        useEffect(()=>{
            console.log('Counter useEffect', 1);
        });

        //componentDidMount
        useEffect(()=>{
            console.log('Counter useEffect', 2);
        }, []);

        //componentDidMount, componentDidUpdate
        useEffect(()=>{
            console.log('Counter useEffect', 3);
        }, [show]);

 

            return (
                <div>
                    <MinusButton />
                    {show && <Screen  />}
                    <PlusButton />
                    <button onClick = {props.getTasks}>Get tasks</button>
                    <button onClick = {clickHandler}>Click me</button>
                    <input type='text'
                    value = {inputValue}
                     onChange={(event)=> setInputValue(event.target.value)}
                     ></input>

                    <h1>{inputValue}</h1>
                </div>)

    }
    
       const mapDispatchToProps = {
            getTasks: actions.getTasks
       };
    
    export default connect(null, mapDispatchToProps)(Counter);