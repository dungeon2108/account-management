import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Container, Row, Col, Button } from 'reactstrap';

function Login(props) {
  // Khai báo các state để lưu dữ liệu cho các ô nhập liệu
  let [Email, SetEmail] = useState("");
  let [Password, SetPassword] = useState("");

  let navigate = useNavigate();

  // Hàm xử lý khi nhấn nút Login
  let handleLogin = () => {
    let user_LocalStorage = JSON.parse(
      localStorage.getItem("user_LocalStorage")
    );
    if (
      user_LocalStorage.Email === Email &&
      user_LocalStorage.Password === Password
    ) 
    {
      alert("Đăng nhập thành công");
      let user_login = {
        Email: Email,
        Password: Password,
      };
      // Nếu đăng nhập thành công thì thực hiện lưu thông tin user_login xuống localStorage để xử lý
      localStorage.setItem("user_login", JSON.stringify(user_login));
      navigate("/AccountManagement");
    } 
    else {
      alert("Kiểm tra lại thông tin!!!");
    }

  };

  // Check User login, nếu đã Login thì chuyển tới trang login, trường hợp chưa login sẽ render giao diện bên dưới

  useEffect(() => {
    let user_login = JSON.parse(localStorage.getItem("user_login"));
    if (user_login) {
      // TH này khi User đã login sẽ chuyển tới trang home
      return navigate("/AccountManagement");
    }
  }, []);


  return (
    <Container style={{ width: "70%" }}>
      <Row className="mt-5">
        <Col xs={12} sm={8} md={6} lg={4} className="mx-auto">
          <h3 className="text-center">LOGIN</h3>
          <br />
          <div className="form-group">
            <label htmlFor="Email" >Email:</label>
            <input
              type="email"
              className="form-control"
              placeholder="Enter email"
              value={Email}
              onChange={(event) => SetEmail(event.target.value)}
            />
          </div>
          <div className="mt-3"></div>
          <div className="form-group">
            <label htmlFor="Password">Password:</label>
            <input
              type="Password"
              className="form-control"
              placeholder="Enter Password"
              value={Password}
              onChange={(event) => SetPassword(event.target.value)}
            />
          </div>
          <div className="text-center mt-3">
            <Button type="button" color="info" className="btn-block" onClick={handleLogin}>
              Login
            </Button>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Login;
