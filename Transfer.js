import { useEffect, useState } from "react"
function Transfer(props){
    const [amountToBeTransfered,setAmountToBeTransfered] = useState("")
    const [transferFee,setTransferFee] = useState(0);
    const [afterTransferClearBalance,setAfterTransferClearBalance] = useState(0)
    const [amountExceedingErr,setAmountExceedingErr] = useState("")
    useEffect( () => {
        setAmountToBeTransfered("")
    },[props])
    useEffect(()=>{
        if( props.overdraft === "yes"){
            setTransferFee((amountToBeTransfered*0.25)/100)
            setAfterTransferClearBalance( parseFloat(props.clearBalance)-(parseFloat(amountToBeTransfered)+parseFloat(transferFee)).toString())
        }
        else{
            if( amountToBeTransfered > props.clearBalance){
                setAmountExceedingErr("cannot send")
            }
            else{
                setTransferFee((amountToBeTransfered*0.25)/100)
                setAfterTransferClearBalance( parseFloat(props.clearBalance)-(parseFloat(amountToBeTransfered)+parseFloat(transferFee)))
                setAmountExceedingErr("")
            }
        }        
    },[amountToBeTransfered])
    return (
        <>
            <label for="transferType">Transfer Type : </label>
            <select name="transferType" id="transferType">
            <option value="customer">Customer</option>
            <option value="bank for own">Bank for Own</option>
            <option value="bank">Bank</option>
            </select>
            <br/>
            <label for="messageCode">Message Code : </label>
            <select name="" id="">
            <option value="CHQB">CHQB</option>
            <option value="CORT">CORT</option>
            <option value="HOLD">HOLD</option>
            <option value="INTC">INTC</option>
            <option value="PHOB">PHOB</option>
            <option value="PHOI">PHOI</option>
            <option value="PHON">PHON</option>
            <option value="REPA">REPA</option>
            <option value="SDVA">SDVA</option>
            </select>
            <br/>
            <label>Amount : </label>
            <input type="text" value={amountToBeTransfered} onChange={event => setAmountToBeTransfered(event.target.value)}/>
            <br/>
            <p>{amountExceedingErr}</p>
            <p>{transferFee}</p>
            <label>Transfer Fee : </label>
            <input type="text" value={transferFee} />
            <br/>
            <label>Clear Balance : </label>
            <input type="text" value={afterTransferClearBalance} />

        </>
    )
}

export default Transfer;