import * as types from '../ActionType/ActionType'

export const showFormAction =()=> {
    return {
        type: types.SHOW_FORM,
    };
};

export const closeFormAction =()=> {
    return {
        type: types.CLOSE_FORM,
    }
};