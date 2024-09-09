import React from "react";
import "../assets/css/data/App.css";
import { useQuery } from "@tanstack/react-query";
import TransactionItem from "./TransactionItem";
import { getAlltransactions } from "../api/auth";

const Transaction = () => {
  const { data: transactions } = useQuery({
    queryKey: ["transaction"],
    queryFn: getAlltransactions,
  });
  const transactionsListDis = transactions?.map((item) => (
    <TransactionItem item={item} />
  ));
  return (
    <div>
      <div className="Transaction">
        <div>{transactionsListDis}</div>
      </div>
    </div>
  );
};

export default Transaction;
