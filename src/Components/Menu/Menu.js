import React, { useEffect, useState } from 'react';
import { Navbar, NavbarBrand, Nav, NavItem, NavLink, Button } from 'reactstrap';

const Header = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const handleLogout = () => {
        // Xóa thông tin đăng nhập khỏi localStorage
        localStorage.removeItem("user_login");
        // Cập nhật trạng thái đăng nhập
        setIsLoggedIn(false);
    };
    
    // Kiểm tra trạng thái đăng nhập khi component được render
    useEffect(() => {
        const user_login = localStorage.getItem("user_login");
        if (user_login) {
            setIsLoggedIn(true);
        }
    }, []);
    return (
        <Navbar color="light" light expand="md">
            <NavbarBrand href="/">VTI ACADEMY</NavbarBrand>
            <Nav className="mr-auto" navbar>
                <NavItem className='mx-3'>
                    <NavLink href="/home">Home</NavLink>
                </NavItem>
                <NavItem className='mx-3'>
                    <NavLink href="/about">About</NavLink>
                </NavItem>
                <NavItem className='mx-3'>
                    <NavLink href="/AccountManagement">Account Management</NavLink>
                </NavItem>
                <NavItem className='mx-3'>
                    <NavLink href="/DepartmentManagement">Department Management</NavLink>
                </NavItem>
            </Nav>
            <Nav className="ml-auto" navbar>
                {/* Hiển thị nút Login hoặc Logout tùy thuộc vào trạng thái đăng nhập */}
                {isLoggedIn ? (
                    <>
                        <NavItem className='mx-2'>
                            <Button color="secondary" onClick={handleLogout}>Logout</Button>
                        </NavItem>
                    </>
                ) : (
                    <>
                        <NavItem className='mx-2'>
                            <Button color="secondary" href="/Login">Login</Button>
                        </NavItem>
                        <NavItem className='mx'>
                            <Button color="secondary" href="/Sign_Up">SignUp</Button>
                        </NavItem>
                    </>
                )}
            </Nav>
        </Navbar>
    );
};

export default Header;
