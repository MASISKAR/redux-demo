import React from 'react';
import Screen from './Screen';
import MinusButton from './MinusButton';
import PlusButton from './PlusButton';
import {connect} from 'react-redux';
import * as actions from './store/actions';

class Counter extends React.Component {

    render() {
        // console.log('this.props.tasks', this.props.tasks);
        return (
            <div>
                <MinusButton />
                <Screen  />
                <PlusButton />
                <button onClick = {this.props.getTasks}>Get tasks</button>
            </div>
        )
    }
}

const mapStateToProps = (state)=>{
 return {
     tasks: state.tasks
 }
};

/* const mapDispatchToProps = (dispatch)=>{
    return {
        getTasks: ()=> dispatch(actions.getTasks())
    }
   }; */

   const mapDispatchToProps = {
        getTasks: actions.getTasks
   };

export default connect(mapStateToProps, mapDispatchToProps)(Counter);