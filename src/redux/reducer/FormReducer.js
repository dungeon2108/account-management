import * as TYPES from '../ActionType/ActionType'

let initState = false;

let FormReducer = (state = initState, action) => {
    switch(action.type) {
        case TYPES.SHOW_FORM: 
            return true;
        case TYPES.CLOSE_FORM: 
            return false;
        default:    
            return state;
    }
}

export default FormReducer;