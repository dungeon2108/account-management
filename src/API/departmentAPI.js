import { api } from "./api"

export const getListDepartment =()=> {
   return api("GET","/departments/", null);
};