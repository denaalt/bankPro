import instance from ".";

import { setToken } from "./storage";

const login = async (userInfo) => {
  try {
    const { data } = await instance.post(
      "/mini-project/api/auth/login",
      userInfo
    );
    setToken(data.token);
    return data;
  } catch (error) {
    console.log(error);
  }
};

const register = async (userInfo) => {
  try {
    const formData = new FormData();
    for (const key in userInfo) {
      formData.append(key, userInfo[key]);
    }
    const { data } = await instance.post(
      "/mini-project/api/auth/register",
      formData
    );
    setToken(data.token);
    return data;
  } catch (error) {
    console.log(error);
  }
};

const logout = () => {
  localStorage.removeItem("token");
};

const me = async () => {
  const { data } = await instance.get("/mini-project/api/auth/login");
  return data;
};

const getAllusers = async () => {
  const { data } = await instance.get("/mini-project/api/auth/users");
  return data;
};
const getAlltransactions = async () => {
  const { data } = await instance.get("/mini-project/api/transactions/my");
  return data;
};
//
const getAll = async () => {
  const { data } = await instance.get("/mini-project/api/auth/me");
  return data;
};
const depositOrWithdraw = async (type, amount) => {
  const { data } = await instance.put(
    `/mini-project/api/transactions/${type}`,
    { amount: amount }
  );
  return data;
};

export {
  login,
  me,
  logout,
  getAllusers,
  register,
  getAlltransactions,
  getAll,
  depositOrWithdraw,
};
