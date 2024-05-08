import { act } from "react";
import { fetch_position_list } from "../ActionType/ActionType";

const initialState = [];

export const PositionReducer =(state = initialState, action)=> {
    switch(action.type) {
        case fetch_position_list:
            state = action.payload;
            return [...state]
        default : 
            return [...state]
    }
}