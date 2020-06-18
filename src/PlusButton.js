import React from 'react';
import { connect } from "react-redux";


function PlusButton(props){
console.log('PlusButton', props)
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
        onCountAdd: ()=> dispatch({type: 'ADD_COUNT'})
    };
};

export default connect(null, mapDispatchToProps)(PlusButton);
