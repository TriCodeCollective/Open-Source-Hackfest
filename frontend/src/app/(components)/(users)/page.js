import axios from "@/api/axios";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";

export default function Users() {
  const [users, setUsers] = useState("");

  useEffect(() => {
    let isMounted = true;
    const controller = new AbortController(); //to cancel a request if a component dismounts

    const getUsers = async () => {
      try {
        const response = await axios.get("/users", {
          signal: controller.signal, // cancel if we need to
        });
        console.log("response: ", response.data);
        isMounted && setUsers(response.data); // if isMounted is true, setUsers
      } catch (err) {
        console.log("err: ", err);
      }
    };

    getUsers();

    return () => {
      isMounted = false;
      controller.abort();
    }; //cleanUp function runs as the component unmounts
  });

  return (
    <>
      <h2>Users</h2>
      {users.length ? (
        <ul>
          {users.map((user, i) => (
            <li key={i}>{user.username}</li>
          ))}
        </ul>
      ) : (
        <p>No users to display</p>
      )}
    </>
  );
}
