import axios from "axios";
import Receiver from "./Receiver";
const { useState, useEffect } = require("react");

function ReceiverForm(props){

    const [bic,setBic] = useState("")
    const [receiverDetails,setReceiverDetails] = useState({})
    const [receiverNotFound,setReceiverNotFound] = useState(null)
    useEffect( () => {
        const lengthOfBic = bic.length
        if( lengthOfBic === 11){
            axios.get(`http://localhost:8080/api/banks/${bic}`)
            .then((res) => { 
                setReceiverDetails(res.data) 
                setReceiverNotFound(null)
            })
            .catch(err => { 
                setReceiverDetails({})
                setReceiverNotFound("Receiver BIC Not Found ")
            })
        }
        else{
            if( lengthOfBic > 0){
            setReceiverNotFound("Please enter valid BIC")
            }
            setReceiverDetails({})
        }
    },[bic])
    const handleWithreceiver = (event) => {
        event.preventDefault()
        setBic(event.target.value)
    }
    useEffect(()=>{props.receiveData(receiverDetails)},[receiverDetails])
    return (
        <>
        <div >
            <input type="text" placeholder="BIC"
                value={bic} 
                onChange={handleWithreceiver} />
                { receiverNotFound && <p>{receiverNotFound}</p>}
        </div>
        <Receiver receiverDetails ={receiverDetails}/>
        <hr/>
        </>
    )
}
export default ReceiverForm;