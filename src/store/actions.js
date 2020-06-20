import * as actionTypes from './actionTypes';



export const addCount = () => {
    return { type: actionTypes.ADD_COUNT };
};

export const subCount = () => {
    return { type: actionTypes.SUB_COUNT };
};


export const getTasks = () => {
    return (dispatch)=> {
        fetch('http://localhost:3001/tasks')
        .then(res => res.json())
        .then(tasks => {
            dispatch({ type: actionTypes.GET_TASKS_SUCCESS, tasks: tasks });
        })
        .catch(error => {
            // console.log(error);
            dispatch({ type: actionTypes.GET_TASKS_FAILURE, error: error.toString() });
        });

    };
};