import React, { useState } from "react";
import { Container, Button, Form, FormGroup, Label, Input } from "reactstrap";
// import { generateId } from "../../../Storage/Utils/Helpers/generateId";
// import { getNowDate } from "../../../Storage/Utils/Helpers/getNowDate";
import { useSelector } from "react-redux";


function InputForm(props) {

  let [Email, setEmail] = useState("");
  let [UserName, setUserName] = useState("");
  let [FullName, setFullName] = useState("");
  let [Department, setDepartment] = useState("");
  let [Postion, setPosition] = useState("");

  let stateRedux = useSelector((state)=>state);

  let listDepartment = stateRedux.listDepartment;
  let listPosition = stateRedux.listPosition;


  let handleCreateNewAccount =()=> {
    let newAccount = {
      // id: generateId(),
      email: Email,
      username: UserName,
      fullname: FullName,
      departmentId: Department,
      positionId: Postion,
      // createDate: getNowDate(),
    };
    props.onHandleCreateNewAccount(newAccount);

  };

  let handleReset =()=>{
    setEmail("");
    setUserName("");
    setFullName("");
  };

  let departmentItem = listDepartment?.map((department, index) => {
    return (
      <option value={department.id} key={index}>
        {department.name}
      </option>
    );
  });

  let positionItem = listPosition?.map((position, index) => {
    return (
      <option value={position.id} key={index}>
        {position.name}
      </option>
    );
  });


  return (
    <Container>
      <Form>
        {/* Email */}
        <FormGroup>
          <Label for="Email">Email: </Label>
          <Input
            id="Email"
            name="Email"
            placeholder="Input Email"
            type="email"
            value={Email}
            onChange={(e) => {setEmail(e.target.value);}}
          />
        </FormGroup>


        {/* Username */}
        <FormGroup>
          <Label for="Username">Username: </Label>
          <Input
            id="Username"
            name="Username"
            placeholder="Input Username"
            type="text"
            value={UserName}
            onChange={(e) => {setUserName(e.target.value);}}
          />
        </FormGroup>


        {/* Fullname */}
        <FormGroup>
          <Label for="Fullname">Fullname: </Label>
          <Input
            id="Fullname"
            name="Fullname"
            placeholder="Input Fullname"
            type="text"
            value={FullName}
            onChange={(e) => {setFullName(e.target.value)}}
          />
        </FormGroup>


        {/* Department */}
        <FormGroup>
          <Label for="Department">Select a Department: </Label>
          <Input id="Department" name="Department" type="select" value={Department} onChange={(e) => {setDepartment(e.target.value)}}>
            {departmentItem}
          </Input>
        </FormGroup>


        {/* Postion */}
        <FormGroup>
          <Label for="Postion">Select a Postion: </Label>
          <Input id="Postion" name="Postion" type="select" value={Postion} onChange={(e)=> {setPosition(e.target.value)}} >
            {positionItem}
          </Input>
        </FormGroup>
      </Form>
      {/* Nút xử lý */}
      <Button color="primary" onClick={handleCreateNewAccount}>
        Create
      </Button>
      <Button color="danger" onClick={handleReset}>Reset</Button>
    </Container>
  );
}


export default InputForm;
