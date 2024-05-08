import React, { useEffect } from "react";
import { Container } from "reactstrap";
import CreateButton from "../Components/Account/CreateButton";
import ModalCreateNewAccount from "../Components/Account/CreateNewAccount/ModalCreateNewAccount";
import ResultForm from "../Components/Account/ResultForm";
import {useDispatch, useSelector} from 'react-redux';
import { closeFormAction, showFormAction } from "../redux/action/FormAction";
import { actionAddNewAccountAPI, actionDeleteAccountAPI, actionFetchListAccountAPI, actionUpdateAccountAPI } from "../redux/action/AccountAction";
import { actionFetchListDepartmentAPI } from './../redux/action/DepartmentAction';
import { actionFetchListPositionAPI } from './../redux/action/PositionAction';
import ModalUpdateAccount from "../Components/Account/UpdateAccount/ModalUpdateAccount";
import { actionFetchAccountUpdateInfoRedux, actionTogleFormRedux } from "../redux/action/FormUpdateAction";

function AccountContainer(props) {

  let dispatchRedux = useDispatch();

  let stateRedux = useSelector((state)=> state);
  // console.log(stateRedux)

  let onHandleCreateButtuon = () => {

    dispatchRedux(showFormAction()); // setShowForm(true);
  };

  let onHandleCloseModal = () => {

    dispatchRedux(closeFormAction()); // setShowForm(false);

  };

  let onHandleCreateNewAccount = (accountNew) => {
    
    // addAccountNewApi(accountNew).then((response) => {
    // });
    dispatchRedux(actionAddNewAccountAPI(accountNew));
    dispatchRedux(closeFormAction()) // setShowForm(false);
  };

  let onHandleDeleteAccount =(id)=> {
    dispatchRedux(actionDeleteAccountAPI(id));
  }

  useEffect(() => {

    dispatchRedux(actionFetchListAccountAPI());
    dispatchRedux(actionFetchListDepartmentAPI());
    dispatchRedux(actionFetchListPositionAPI());
  }, []);

  let onHandleUpdate = async (accountUpdate)=> {
    let id_update = stateRedux.formUpdate.accountUpdateInfo.id;
    let accountUpdate_API = {
      id: id_update,
      account_Update: accountUpdate,
    };
    
    await dispatchRedux(actionUpdateAccountAPI(accountUpdate_API));
    await dispatchRedux(actionTogleFormRedux());
    await dispatchRedux(actionFetchListAccountAPI());
  }

  let onHandleEdit =(accountEdit)=> {
    dispatchRedux(actionFetchAccountUpdateInfoRedux(accountEdit)); //lưu tt account cần update vào redux
    dispatchRedux(actionTogleFormRedux());
  };

  return (
    <Container>
      {/* Nút thêm mới */}
      <CreateButton onHandleCreateButtuon={onHandleCreateButtuon} />
      {/* Form thêm mới Account*/}
      <ModalCreateNewAccount
        onHandleCloseModal={onHandleCloseModal}
        onHandleCreateNewAccount={onHandleCreateNewAccount}
      />
      <ModalUpdateAccount onHandleUpdate = {onHandleUpdate} />
      {/* Form kết quả */}
      <ResultForm 
        // listAccount={listAccount}
        onHandleDeleteAccount = {onHandleDeleteAccount}
        onHandleEdit = {onHandleEdit} 
      />
    </Container>
  );
}

export default AccountContainer;
