import { delete_account, fetch_account_list } from "../ActionType/ActionType";

const initialState = [
  {
    id: "",
    name: "",
    email: "",
  },
];
const AccountReducer = (state = initialState, action) => {
  switch (action.type) {
    case fetch_account_list: {
        console.log(action.paylod)
        return [...action.payload];
    }
      

    case delete_account:
      let idDelete = action.payload;
      let listAccountState = state;
      let indexDelete = listAccountState.findIndex(
        (account) => account.id === idDelete
      );
      listAccountState.splice(indexDelete, 1);
      return listAccountState;

    default:
      return state;
  }
};

export default AccountReducer;
