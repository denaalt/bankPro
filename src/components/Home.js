import React, { useState } from 'react'
import "../assets/css/data/App.css";
//import Transaction from './Transaction'
//import { useState } from 'react';

const Home = () =>{ 
    
 const[transactionType,setTransactionType] = useState("");
 const [amount,setAmount] = useState(0);
 const[balance,setBalance] = useState(0);
 const handleTransaction = (e) =>{
    e.preventDefault();
    if (transactionType ==="deposit"){
    setBalance(balance + parseFloat(amount));
  }else if( transactionType === "withraw" && amount)
  {
    setBalance(balance - parseFloat(amount));
  }else{
    alert ("Invalid Transaction");
  }
   setAmount(0);

   
  }
  //const[balance,setBalance] = useState(0);
  //const [amount,setAmount] = useState('');
  //const[transactionType,setTransactionType] = useState("deposit");
 // const handleTransaction = (e) =>{
   // e.preventDefault();
   // if (transactionType ==="deposit"){
       // setBalance(balance + parseFloat(amount));
    //}else{
   // setBalance(balance - parseFloat(amount));
   // }
   // setAmount("");
        
  //}<div className="balance-info"> </div>
  //<div className="transaction-type">


  return (
  
     <div className=" wrapper3 Home">
     <div className="Transaction-box">
     
      
        
          <h1>Your available balance:
           kd</h1>

        
        <form onSubmit={handleTransaction}>
       
        <label>
         <input
         type="radio"
         name="transactionType"
         value="deposit"
         onChange={(e)=>
          setTransactionType(e.target.value)}
         />
         deposit
        </label>
        <label>
        <input 
        type='radio'
        name="transactionType"
        value="withdraw"
        onChange={(e)=>
            setTransactionType(e.target.value) }
        />
        withdraw
        </label>
         <input
         type='number'
         placeholder="Amount"
         value={amount}
         onChange={(e)=>
        setAmount(e.target.value) }
         />
        < button type='submit'>submit</button>
        </form>
        </div>
        </div>
       
  );
};


export default Home;