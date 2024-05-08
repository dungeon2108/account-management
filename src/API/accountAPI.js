import { api } from "./api"

const getListAccount =()=> {
    return api("GET", "accounts/", null)
};

const addAccountNewApi =(accountNew)=> {
    return api("POST","accounts/", accountNew);
};

const deleteAccountAPI =(id)=> {
    let url = "accounts/" + id;
    return api("DELETE",url, null)
};

const updateAccountAPI =(accountUpdate)=> {
    let url = "accounts/" + accountUpdate.id;
    return api("PUT",url, accountUpdate.account_Update);
};

export {
    getListAccount,
    addAccountNewApi,
    updateAccountAPI,
    deleteAccountAPI,
};