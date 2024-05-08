import React from "react";
import { useSelector } from "react-redux";
import { Button } from "reactstrap";



function ResultFormItem(props) {

  let handleDelete =(id)=> {
    props.onHandleDeleteAccount(id);
  };

  let HandleEdit =(accountEdit)=>{
    props.onHandleEdit(accountEdit);
  }

  let item = "";
  let stateRedux = useSelector((state) => state);
  let listAccount = stateRedux.listAccount;
  if(listAccount) {
    item = listAccount.map((account) => {
      return (
        <tr>
          <td>{account.id}</td>
          <td>{account.email}</td>
          <td>{account.username}</td>
          <td>{account.fullname}</td>
          <td>{account.department}</td>
          <td>{account.position}</td>
          <td>{account.createDate}</td>
          <td>
            <Button color="warning" onClick={()=>HandleEdit(account)}>Edit</Button>
          </td>
          <td>
            <Button color="warning" onClick={()=> handleDelete(account.id)}>Delete</Button>
          </td>
        </tr>
      );
    })
  }
  return item;
}


export default ResultFormItem;