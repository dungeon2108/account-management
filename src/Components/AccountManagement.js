import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
// import moduleName from 'AccountContainer'
import AccountContainer from './../Container/AccountContainer';

function AccountManagement() {
    let navigate = useNavigate();

    useEffect(()=> {
        let userLogin = JSON.parse(localStorage.getItem("user_login"));
        if (!userLogin) {
            return navigate("/Login");
        }
    },[])

    

    return (
        <div className="row">
            <AccountContainer />
        </div>

    )
};

export default AccountManagement;