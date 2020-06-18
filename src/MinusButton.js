import React from 'react';
import { connect } from "react-redux";

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
        onCountSub: ()=> dispatch({type: 'SUB_COUNT'})
    };
};

export default connect(null, mapDispatchToProps)(MinusButton);
