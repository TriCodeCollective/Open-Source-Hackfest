"use client";

import React from "react";
import Users from "../users/page";
import RequiredAuth from "../RequiredAuth";

const Admin = () => {
  return (
    <>
      <RequiredAuth>
        <h1>Just admins</h1>
        <br></br>
        <Users></Users>
        <br></br>
      </RequiredAuth>
    </>
  );
};

export default Admin;
