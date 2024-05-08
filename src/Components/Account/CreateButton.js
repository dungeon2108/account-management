import React from "react";
import { Container, Button } from "reactstrap";


function CreateButton(props) {

  let handleCreateNewAccount =()=>{
    props.onHandleCreateButtuon();
  }

  return (
    <Container>
      <br />
      <Button class="bg-primary text-white" onClick={handleCreateNewAccount}>Create New Account</Button>
    </Container>
  );
}


export default CreateButton;