import { useState } from 'react';
import './App.css';
import Form from './components/Form';
import Transfer from './components/Transfer';
function App() {
  const [customer,setCustomer] = useState(null)
  function receiveCustData(selectedCustomer){
    // console.log(selectedCustomer)
    setCustomer(selectedCustomer)
  }
  return (
    <div>
      <h1>!! Welcome !!</h1>
      <Form receiveCustData = {receiveCustData}/>
      <Transfer {...customer}/>
    </div>
  );
}

export default App;
