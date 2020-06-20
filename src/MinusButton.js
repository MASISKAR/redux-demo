import React from 'react';
import { connect } from "react-redux";
import * as actionTypes from './store/actionTypes';

function MinusButton(props){

        return (
            <button 
            onClick = {props.onCountSub}
            >
            -
            </button>
        );

}


const mapDispatchToProps = (dispatch) =>{
    return {
        onCountSub: ()=> dispatch({type: actionTypes.SUB_COUNT})
    };
};

export default connect(null, mapDispatchToProps)(MinusButton);
