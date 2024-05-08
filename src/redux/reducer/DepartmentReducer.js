import { fetch_department_list } from "../ActionType/ActionType";

const initialState = [];

export const DepartmentReducer =(state = initialState, action)=> {
    switch(action.type) {
        case fetch_department_list:
            state = action.payload;
            return [...state]
        default : 
            return [...state]
    }
}