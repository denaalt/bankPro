import React, { useState } from "react";
import "../assets/css/data/App.css";
import { useQuery } from "@tanstack/react-query";
import TransactionItem from "./TransactionItem";
import { getAlltransactions } from "../api/auth";

const Transaction = () => {
  const [search, setSearch] = useState("");
  const { data: transactions } = useQuery({
    queryKey: ["transaction"],
    queryFn: getAlltransactions,
  });
  const transactionsListDis = transactions
    ?.filter((item) => item.amount?.toString().includes(search))
    ?.map((item) => <TransactionItem item={item} />);

  return (
    <div>
      <div className="Transaction">
        <input
          className="search"
          style={{ margin: 25 }}
          name="search"
          onChange={(e) => setSearch(e.target.value)}
        />
        <div>{transactionsListDis}</div>
      </div>
    </div>
  );
};

export default Transaction;
