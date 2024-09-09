import React from "react";

const TransactionItem = ({ item }) => {
  console.log(item.date);
  return (
    <div className="TransactionItem">
      <p>{item.amount}</p>
      <p>{item.type}</p>
      <p>{new Date(item.createdAt).toLocaleDateString()}</p>
      <img></img>
    </div>
  );
};

export default TransactionItem;
