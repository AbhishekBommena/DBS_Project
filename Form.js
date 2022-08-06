import axios from "axios";
import Customer from "./Customer"
const { useState, useEffect } = require("react");

function Form(props){

    const [customerId,setCustomerId] = useState("")
    const [custDetails,setCustDetails] = useState({})
    const [custIdNotFound,setCustIdNotFound] = useState(null)
    useEffect( () => {
        const lengthOfCustomerId = customerId.length
        if( lengthOfCustomerId === 5){
            axios.get(`http://localhost:8080/Customers/${customerId}`)
            .then((res) => { 
                setCustDetails(res.data) 
                setCustIdNotFound(null)
            })
            .catch(err => { 
                setCustDetails({})
                setCustIdNotFound("Customer ID Not Found ")
            })
        }
        else{
            if( lengthOfCustomerId > 0){
            setCustIdNotFound("Please enter 5 digits Customer ID")
            }
            setCustDetails({})
        }
    },[customerId])
    const handleWithCustId = (event) => {
        event.preventDefault()
        setCustomerId(event.target.value)
    }
    useEffect(()=>{props.receiveCustData(custDetails)},[custDetails])
    return (
        <>
        <div >
            <input type="text" placeholder="Customer ID"
            // value attribute basically has the control and 
                // to see the characters we update the state using onChange event
                value={customerId} 
                onChange={handleWithCustId} />
                { custIdNotFound && <p>{custIdNotFound}</p>}
        </div>
        <Customer custDetails ={custDetails}/>
        <hr/>
        </>
    )
}
export default Form;