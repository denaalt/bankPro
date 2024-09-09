import React, { useState } from "react";
import "../assets/css/data/App.css";
import { useQuery } from "@tanstack/react-query";
import { getAll } from "../api/auth";

const Home = () => {
  const { data: profile } = useQuery({
    queryKey: ["profile"],
    queryFn: getAll,
  });

  const [transactionType, setTransactionType] = useState("");
  const [amount, setAmount] = useState(0);
  const [balance, setBalance] = useState(profile?.balance || 0);

  const handleTransaction = (e) => {
    e.preventDefault();
    const transactionAmount = parseFloat(amount);

    if (transactionType == "deposit") {
      setBalance(balance + transactionAmount);
    } else if (transactionType == "withdraw" && transactionAmount <= balance) {
      setBalance(balance - transactionAmount);
    } else {
      alert("Invalid Transaction or Insufficient Balance");
    }

    setAmount(0);
  };

  return (
    <div className="wrapper3 Home">
      <div className="Transaction-box">
        <h1>Your available balance: {balance}</h1>
        <p>Hidden for the sake of your dignity</p>

        <form onSubmit={handleTransaction}>
          <label>
            <input
              type="radio"
              name="transactionType"
              value="deposit"
              onChange={(e) => setTransactionType(e.target.value)}
            />
            Deposit
          </label>
          <label>
            <input
              type="radio"
              name="transactionType"
              value="withdraw"
              onChange={(e) => setTransactionType(e.target.value)}
            />
            Withdraw
          </label>
          <input
            type="number"
            placeholder="Amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Home;
