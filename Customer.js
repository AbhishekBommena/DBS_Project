import { useEffect, useState } from "react";

function Customer(props){
    const custDetails = props.custDetails
    // useEffect(()=>{props.sendCustData("madhu babu")},[props])
   
    return (
        <>
        {/* <p>hello- {custDetails.acctHolderName }</p> */}
        <label>Account Holder Name : </label>
        <input id="ac" type="text" value={custDetails?.acctHolderName ?? ""} readOnly/><br/>
        <label>Clear Balance : </label>
        <input type="text" value={custDetails?.clearBalance ?? ""}/><br/>
        <label>Currency : </label>
        <input type="text" value={custDetails?.currency ?? ""}/>
        </>
    )
}
export default Customer;