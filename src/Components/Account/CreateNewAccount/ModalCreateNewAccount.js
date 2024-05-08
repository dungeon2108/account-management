import React from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Container,
} from "reactstrap";
import InputForm from "./InputForm";
import { useSelector } from "react-redux";


function ModalCreateNewAccount(props) {

  let {onHandleCreateNewAccount} = props;
  let stateRedux = useSelector((state) => state); //trả về toàn bộ state hiện tại của Redux store mỗi khi có thay đổi 
  let showForm = stateRedux.showForm;
  let handleCloseModal =()=> {
    props.onHandleCloseModal();
  }
  return (
    <Container>
      <br />
      <Modal isOpen={showForm}>
        <ModalHeader>
          <h3>Create New Account</h3>
        </ModalHeader>
        <ModalBody>
          
          <InputForm  
            onHandleCreateNewAccount={onHandleCreateNewAccount} 
            // listDepartment = {props.listDepartment}
            // listPosition = {props.listPosition}
          />

        </ModalBody>
        <ModalFooter>
          <Button color="danger" onClick={handleCloseModal}>Close</Button>
        </ModalFooter>
      </Modal>
    </Container>
  );
}


export default ModalCreateNewAccount;
