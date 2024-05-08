import { getListDepartment } from "../../API/departmentAPI"
import { fetch_department_list } from "../ActionType/ActionType"

export const actionFetchListDepartmentAPI =()=> {
    return (dispatch) => {
        return getListDepartment().then((response)=>{
            dispatch(actionFetchListDepartmentRedux(response));
        })
    }
}

export const actionFetchListDepartmentRedux =(listDepartment)=> {
    return {
        type: fetch_department_list,
        payload: listDepartment,
    }
}