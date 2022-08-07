import { useEffect, useState } from "react";

function Receiver(props){
    const receiverDetails = props.receiverDetails

    const[accountholdernumber,setAccountHolderNumber]=useState("")
    const[accountholdername,setAccountHolderName]=useState("")

    const handleAccountHolderNumber=(e)=>{
        setAccountHolderNumber(e.target.value);
    }

    const handleAccountHolderName=(e)=>{
        setAccountHolderName(e.target.value);
    }





   
    return (
        <>
        <label>Bank Name : </label>
        <input id="ac" type="text" value={receiverDetails?.bankname ?? ""} readOnly/><br/>
        <label>Receiver Account Holder Number : </label>
        <input type="text" value={accountholdernumber} onChange={accountholdernumber}/><br/>
        <label>Receiver Account Holder Name: </label>
        <input type="text" value={accountholdername} onChange={accountholdername}/>
        </>
    )
}
export default Receiver;