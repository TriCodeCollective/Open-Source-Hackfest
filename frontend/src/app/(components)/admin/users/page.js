"use client";
import { useAxiosPrivate } from "../../../(hooks)/useAxiosPrivate";
import useRefreshToken from "@/app/(hooks)/useRefreshToken";
import { useRouter } from "next/navigation";
import React, { useState, useEffect } from "react";

export default function Users() {
  const [users, setUsers] = useState("");
  const refresh = useRefreshToken();
  const axiosPrivate = useAxiosPrivate();
  const router = useRouter();

  useEffect(() => {
    let isMounted = true;
    const controller = new AbortController(); //to cancel a request if a component dismounts

    const getUsers = async () => {
      try {
        const response = await axiosPrivate.get("/users", {
          signal: controller.signal, // cancel if we need to
        });
        console.log("response: ", response.data);
        isMounted && setUsers(response.data); // if isMounted is true, setUsers
      } catch (err) {
        console.log("err: ", err);
        router.push("/login");
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
      <button
        onClick={() => {
          refresh();
        }}
      >
        Refresh
      </button>
    </>
  );
}
