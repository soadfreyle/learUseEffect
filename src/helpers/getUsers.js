import React from "react";

const getUsers = async () => {
  const url = "https://jsonplaceholder.typicode.com/users/1";
  const res = await fetch(url);
  const user = await res.json();

  return user;
};

export default getUsers;
