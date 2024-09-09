import React from "react";

const UserItem = ({ user }) => {
  return (
    <div className="user">
      <img
        image
        src={"https://react-bank-project.eapi.joincoded.com/" + user.image}
        style={{ width: 100 }}
      ></img>
      <p>{user.username}</p>
      <p>balance:{user.balance}</p>
    </div>
  );
};

export default UserItem;
