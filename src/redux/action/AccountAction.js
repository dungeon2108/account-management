import { addAccountNewApi, deleteAccountAPI, getListAccount, updateAccountAPI } from "../../API/accountAPI"
import { delete_account, fetch_account_list } from "../ActionType/ActionType"

export const actionFetchListAccountAPI = () => {
    return (dispatch) => {
        return getListAccount().then((response) => {
            dispatch(actionFetchListAccountRedux(response))
        })
    }
}

export const actionFetchListAccountRedux =(listAccount)=> {
    return {
        type: fetch_account_list,
        payload: listAccount,
    }
}

export const actionAddNewAccountAPI =(newAccount)=> {
    return(dispatch) => {
        return addAccountNewApi(newAccount).then((response)=> {
            dispatch(actionFetchListAccountAPI());
        });
    }
}

export const actionDeleteAccountAPI =(id)=> {
    return (dispatch) => {
        return deleteAccountAPI(id).then((response) => {
            dispatch(deleteAccountRedux(id));
        })
    }
}

export const deleteAccountRedux = (id) => {
    return {
        type: delete_account,
        payload: id,
    }
}

export const actionUpdateAccountAPI =(accountUpdate_API)=> {
    return (dispatch) =>{
        return updateAccountAPI(accountUpdate_API).then((response) => {

        });
    };
};