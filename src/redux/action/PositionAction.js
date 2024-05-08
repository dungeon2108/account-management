import { getListPositionAPI } from "../../API/positionAPI"
import { fetch_position_list } from "../ActionType/ActionType"

export const actionFetchListPositionAPI=()=> {
    return(dispatch) => {
        return getListPositionAPI().then((response)=> {
            dispatch(actionFetchListPositionRedux(response))
        })
    }
}

export const actionFetchListPositionRedux =(listPosition)=> {
    return {
        type: fetch_position_list,
        payload: listPosition,
    }
}