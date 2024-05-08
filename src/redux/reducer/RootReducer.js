import { combineReducers } from "redux";
import FormReducer from "./FormReducer";
import AccountReducer from "./AccountReducer";
import { DepartmentReducer } from "./DepartmentReducer";
import { PositionReducer } from "./PositionReducer";
import FormUpdateReducer from "./FormUpdateReducer";

const rootReducer = combineReducers({
    showForm: FormReducer,
    listAccount: AccountReducer,
    listDepartment: DepartmentReducer,
    listPosition: PositionReducer,
    formUpdate: FormUpdateReducer,
});

export default rootReducer;