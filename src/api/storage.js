const setToken = (token) => {
  localStorage.setItem("token", token);
};

const getToken = () => {
  const token = localStorage.getItem("token");
  return token;
};

const checkToken = () => {
  const token = localStorage.getItem("token");
  if (token) {
    return true;
  } else return false;
};

const removeToken = () => {
  localStorage.removeItem("token");
};

export { setToken, getToken, checkToken, removeToken };
