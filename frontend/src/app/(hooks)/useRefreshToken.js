import React from "react";
import axios from "../../api/axios";

const useRefreshToken = () => {
  const refresh = async () => {
    const response = await axios.get("/refresh", {
      withCredentials: true,
    });
  };

  return (
    <>
      <div></div>
    </>
  );
};

export default useRefreshToken;
