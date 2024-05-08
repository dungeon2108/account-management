import React from "react";
import { Button, Container, Modal, ModalBody, ModalFooter, ModalHeader } from "reactstrap";
import UpdateForm from "./updateForm";
import { useDispatch, useSelector } from "react-redux";
import { actionTogleFormRedux } from "../../../redux/action/FormUpdateAction";

function ModalUpdateAccount (props) {
    
    let { onHandleUpdate } = props;

    let dispatchRedux = useDispatch();

    let stateRedux = useSelector(state=>state.formUpdate);
    let isOpen = stateRedux.isShowFormUpdate;
    let handleCloseModal =()=> {
        dispatchRedux(actionTogleFormRedux())
    }
    return (
        <Container>
            <br />
            <Modal isOpen = {isOpen}>
                <ModalHeader>
                    <h3>Update Account</h3>
                </ModalHeader>
                <ModalBody>
                    <UpdateForm onHandleUpdate = {onHandleUpdate}/>
                </ModalBody>
                <ModalFooter>
                    <Button color="danger" onClick={handleCloseModal}>
                        Close
                    </Button>
                </ModalFooter>
            </Modal>
        </Container>
    );
}

export default ModalUpdateAccount;