import { fetch_account_update, togle_form_update } from "../ActionType/ActionType"

var initialState = {
    isShowFormUpdate: false,
    accountUpdateInfo: {},
  };  

const FormUpdateReducer =(state = initialState, action)=>{
    switch(action.type) {
        case togle_form_update:
            return {
                ...state,
                isShowFormUpdate: !state.isShowFormUpdate,
            };
        case fetch_account_update:
            return {
                ...state,
                accountUpdateInfo: action.payload,
            };
        default: 
            return {...state};
    }
};

export default FormUpdateReducer;