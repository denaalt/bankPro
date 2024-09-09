import React from "react";

const UserItem = ({ user }) => {
  return (
    <div className="user">
      <p>{user.username}</p>
      <p>balance:{user.balance}</p>

      <img></img>
    </div>
  );
};

export default UserItem;
