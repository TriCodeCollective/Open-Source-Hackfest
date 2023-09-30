"use client";
import React, { useContext, useState } from "react";
import { createContext } from "react";

const AuthContext = createContext();

const AuthProvider = (props) => {
  const [auth, setAuth] = useState({
    username: undefined,
    description: undefined,
    pfp: undefined,
    email: undefined,
    gender: undefined,
    birthday: undefined,
    joiningDate: undefined,
  });
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const value = {
    auth,
    setAuth,
    isLoggedIn,
    setIsLoggedIn,
  };

  return (
    <AuthContext.Provider value={value}>{props.children}</AuthContext.Provider>
  );
};

export { AuthProvider, AuthContext };
