import * as actionTypes from './actionTypes';

const defaultState = {
    counter: 0,
    text: 'Hello',
    tasks: [],
    error: null
  };

const reducer = (state = defaultState, action) => {
    // console.log(action);

    switch (action.type) {
      case actionTypes.ADD_COUNT:
        return {
          ...state,
          counter: state.counter + 1
        };
  
      case actionTypes.SUB_COUNT:
        return {
          ...state,
          counter: state.counter - 1
        };
    case actionTypes.GET_TASKS_SUCCESS:{
        return {
            ...state,
            tasks: action.tasks
          };
    }
    case actionTypes.GET_TASKS_FAILURE:{
        return {
            ...state,
            error: action.error
          };
    }
  
      default: return state;
    }
  
  };

  export default reducer;