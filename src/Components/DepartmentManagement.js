import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function DepartmentManagement() {
    let navigate = useNavigate();
    useEffect(()=>{
        let user_login = JSON.parse(localStorage.getItem("user_login"));
        if (!user_login) {
            return navigate("/Login");
        }
    },[])
    return(
        <div>
            <p>This is Department Management</p>
        </div>
    )
}

export default DepartmentManagement;