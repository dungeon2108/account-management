import { api } from "./api"

export const getListPositionAPI =()=> {
    return api("GET", "possitions/", null)
}