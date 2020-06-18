import React from 'react';
import { connect } from "react-redux";


class Screen extends React.Component{



    render(){
        const style = {
            fontSize: '22px',
            fontWeight: 600,
            margin: '0 15px'
        };

        return (
            <span style = {style}>{this.props.cnt}</span>
        );
    }
}


const mapStateToProps = (state) =>{
    return {
        cnt: state.counter
    };
};


export default connect(mapStateToProps)(Screen);
