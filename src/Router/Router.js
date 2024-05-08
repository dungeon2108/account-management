import { Route, Routes } from "react-router-dom";

import About from "../Components/About";
import AccountManagement from "../Components/AccountManagement";
import DepartmentManagement from "../Components/DepartmentManagement";
import Error from "../Components/Error";
import Home from "../Components/Home";
import Login from "../Components/Login";
import SignUp from "../Components/SignUp";

export const routes = (
  <Routes>
    <Route path="/" element={<Home />} exact />
    <Route path="/home" element={<Home />} exact />
    <Route path="/about" element={<About />} exact />
    <Route path="/AccountManagement" element={<AccountManagement />} />
    <Route path="/DepartmentManagement" element={<DepartmentManagement />} />
    <Route path="/Login" element={<Login />} />
    <Route path="/Sign_Up" element={<SignUp />} />
    {/* <Route path="/AccountDetail/:ID" element={<AccountDetail />} exact /> */}
    <Route path="*" element={<Error />} />
  </Routes>
);