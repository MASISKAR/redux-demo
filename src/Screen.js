import React, { useEffect, memo } from 'react';
import { connect } from "react-redux";


/* class Screen extends React.Component{

    constructor(props){
        super(props)
        console.log('Screen constructor');
    }
    
    componentDidMount(){
        console.log('Screen componentDidMount');
    }
    
    componentDidUpdate(){
        console.log('Screen componentDidUpdate');
    }

    componentWillUnmount(){
        console.log('Screen componentWillUnmount');
    }

    render(){
        console.log('Screen render');
        const style = {
            fontSize: '22px',
            fontWeight: 600,
            margin: '0 15px'
        };

        return (
            <span style = {style}>{this.props.cnt}</span>
        );
    }
} */

function Screen(props) {
    console.log('Screen render');

    const style = {
        fontSize: '22px',
        fontWeight: 600,
        margin: '0 15px'
    };

    //componentDidMount, componentWillUnount
    useEffect(() => {
        console.log('Screen useEffect');
        return function () {
            console.log('Screen componentWillUnount')
        }

    }, []);


    return (
        <span style={style}>{props.cnt}</span>
    );
}

const mapStateToProps = (state) => {
    return {
        cnt: state.counter
    };
};


export default connect(mapStateToProps)(memo(Screen));
