"use client";
import { fetchBackend } from "@/app/Functions";
import { useState } from "react";

export default function Register() {
  const [password, setPassword] = useState(false);
  const [email, setEmail] = useState(false);
  const [revealPassword, setRevealPassword] = useState(false);

  const validEmail = (e) => {
    regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
    result = regex.test(e.target.value);
    console.log("result: ", result);
    if (result) {
      setEmail(password);
    }
    return result;
  };

  const validPassword = (e) => {
    regex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/g;
    result = regex.test(e.target.value);
    console.log("result: ", result);
    if (result) {
      setPassword(password);
    }
    return result;
  };

  const register = () => {
    if (email !== "" && password !== "") {
      const result = true;
      // await fetchBackend("/", "POST", {email:email, password:password})
      const span = document.getElementById("FormErrorSpan");
      if (result) {
        span.textContent = "";
      } else {
        span.textContent = "Something went wrong!";
      }
    }
  };

  return (
    <div class="flex flex-col h-screen justify-center items-center">
      <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <h3 class="block text-gray-700 text-xl font-bold mb-2 text-center ">
          Register
        </h3>
        <div class="mb-5">
          <label class="block text-gray-700 text-sm font-bold mb-2" for="email">
            Email
          </label>
          <input
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            type="text"
            placeholder="Introduce email"
            onChange={validEmail}
          ></input>
        </div>
        <div class="mb-0">
          <label
            class="block text-gray-700 text-sm font-bold mb-2"
            for="password"
          >
            Password
          </label>
          <input
            class="shadow appearance-none border rounded  w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            id="password"
            type={revealPassword ? "text" : "password"}
            placeholder="Introduce password"
            onChange={validPassword}
          ></input>
          <button
            type="button"
            onClick={() => {
              setRevealPassword(!revealPassword);
            }}
            class="text-xs text-right  appearance-none  w-full  text-gray-700 mb-0 leading-tight focus:outline-none focus:shadow-outline"
          >
            {!revealPassword ? "Show" : "Hide"}
          </button>
        </div>
        <div class="mb-2">
          <label
            class="block text-gray-700 text-sm font-bold mb-2"
            for="password"
          >
            Confirm password
          </label>
          <input
            class="shadow appearance-none border rounded  w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            id="confirmPassword"
            type={revealPassword ? "text" : "password"}
            placeholder="Introduce password"
            onChange={validPassword}
          ></input>
          <button
            type="button"
            onClick={() => {
              setRevealPassword(!revealPassword);
            }}
            class="text-xs text-right  appearance-none  w-full  top-px text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
          >
            {!revealPassword ? "Show" : "Hide"}
          </button>

          <p class="text-red-500 text-xs italic" id="ErrorFormP"></p>
        </div>
        <div class="flex items-center justify-between">
          <button
            class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="button"
            onClick={register}
          >
            Create account
          </button>
        </div>
        <span id="FormErrorSpan"></span>
      </form>
    </div>
  );
}
