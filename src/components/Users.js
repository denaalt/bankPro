import React from "react";
import "../assets/css/data/App.css";
import UserItem from "./UserItem";
import { getAllusers } from "../api/auth";
import { useQuery } from "@tanstack/react-query";

const Users = () => {
  const { data: users } = useQuery({
    queryKey: ["Users"],
    queryFn: getAllusers,
  });
  const usersListDis = users?.map((user) => <UserItem user={user} />);
  return (
    <div>
      <div className="Users">{usersListDis}</div>
    </div>
  );
};

export default Users;
