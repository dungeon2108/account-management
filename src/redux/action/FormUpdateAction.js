import { fetch_account_update, togle_form_update } from "../ActionType/ActionType"

export const actionTogleFormRedux =()=> {
    return {
        type: togle_form_update,
    }
}

// lưu tt acc update vào redux
export const actionFetchAccountUpdateInfoRedux =(accountUpdate)=> {
    return {
        type: fetch_account_update,
        payload: accountUpdate,
    }
}