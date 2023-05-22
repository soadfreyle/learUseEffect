import React, { useState, useEffect } from "react";
import getUsers from "./helpers/getUsers";
const initialUser = {
  name: "soad",
  email: "soadfre@gmail.com",
};

const FetchCard = () => {
  const [user, setuser] = useState(initialUser);
  const updateUser = () => {
    getUsers().then((newUsers) => {
      setuser(newUsers);
    });
  };
  useEffect(() => {
    updateUser();
  }, []);

  return (
    <div>
      <h1>NAME: {user.name}</h1>
      <h1>EMAIL: {user.email}</h1>
    </div>
  );
};

export default FetchCard;
