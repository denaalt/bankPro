import React, { useState } from "react";
import "../assets/css/data/App.css";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { depositOrWithdraw, getAll } from "../api/auth";

const Home = () => {
  const queryClient = useQueryClient();
  const { data: profile } = useQuery({
    queryKey: ["profile"],
    queryFn: getAll,
  });

  const [transactionType, setTransactionType] = useState("");
  const [amount, setAmount] = useState(0);
  const [balance, setBalance] = useState(profile?.balance || 0);

  const { mutate } = useMutation({
    mutationKey: ["depositWithdraw"],
    mutationFn: () => depositOrWithdraw(transactionType, amount),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["profile"] });
    },
  });

  const handleTransaction = async (e) => {
    e.preventDefault();
    await mutate();
    setAmount(0);
  };

  return (
    <div className="wrapper3 Home">
      <div className="Transaction-box">
        <h1>Your available balance: {profile?.balance}</h1>
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
            // value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Home;
