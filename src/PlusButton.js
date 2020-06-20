import React from 'react';
import { connect } from "react-redux";
import * as actions from './store/actions';

function PlusButton(props){
// console.log('PlusButton', props)
    return (
        <button 
        onClick = {props.onCountAdd}
        >
        +
        </button>
    );

}


const mapDispatchToProps = (dispatch) =>{
    return {
        onCountAdd: ()=> dispatch(actions.addCount())
    };
};

export default connect(null, mapDispatchToProps)(PlusButton);
