import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Container, Button, Form, FormGroup, Label, Input } from "reactstrap";


function UpdateForm(props) {

    let stateRedux = useSelector((state) => state);
    let listDepartment = stateRedux.listDepartment;
    let listPosition = stateRedux.listPosition;

    let [FullName, setFullName] = useState("");
    let [Department, setDepartment] = useState("");
    let [Position, setPosition] = useState("");

    let stateAccountUpdateInfoRedux = stateRedux.formUpdate.accountUpdateInfo;

    useEffect (()=>{

        let depId = listDepartment.find(
            (department) => department.name === stateAccountUpdateInfoRedux.department
        ).id;

        let posId = listPosition.find(
            (position) => position.name === stateAccountUpdateInfoRedux.position
        ).id;

        setFullName(stateAccountUpdateInfoRedux.fullName);
        setDepartment(depId);
        setPosition(posId);

    },[]);
    

    let handleUpdate =()=> {
        let accountUpdate = {
            fullName: FullName,
            departmentId: Department,
            positionId: Position,
        }
        props.onHandleUpdate(accountUpdate);
    }

    let handleReset =()=> {
        setFullName("");
    }

    let departmentItem = listDepartment.map((department, index) => {
        return (
            <option value={department.id} key={index}>
                {department.name}
            </option>
        )
    });

    let positionItem = listPosition.map((position,index)=> {
        return (
            <option value={position.id} key={index}>
                {position.name}
            </option>
        )
    })

    return (
        <Container>
            <Form>
                <FormGroup>
                    <Label for="FullName">FullName: </Label>
                    <Input
                        id=""
                        placeholder=""
                        type=""
                        name=""
                        value={FullName}
                        onChange={(e)=>{setFullName(e.target.value)}} 
                    />
                </FormGroup>
                <FormGroup>
                    <Label for="Department">Select a Department: </Label>
                    <Input
                        id="Department"
                        name="Department"
                        type="select"
                        value={Department}
                        onChange={(event) => {
                        setDepartment(event.target.value);
                        }}
                    >
                        {departmentItem}
                    </Input>
                </FormGroup>

                <FormGroup>
                    <Label for="Position">Select a Position: </Label>
                    <Input
                        id="Position"
                        name="Position"
                        type="select"
                        value={Position}
                        onChange={(event) => {
                        setPosition(event.target.value);
                        }}
                    >
                        {positionItem}
                    </Input>
                </FormGroup>
            </Form>
            <Button color="primary" onClick={handleUpdate}>
                Update
            </Button>
            <Button color="danger" onClick={handleReset}>
                Reset
            </Button>

        </Container>
    )
}

export default UpdateForm;