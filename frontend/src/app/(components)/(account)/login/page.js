"use client";
// import { fetchBackend } from "@/app/Functions";
import React, { useState } from "react";
import useAuth from "@/app/(hooks)/useAuth";
import { useRouter } from "next/navigation";

export default function SignUpForm() {
  const { setAuth, setIsLoggedIn } = useAuth();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [revealPassword, setRevealPassword] = useState(false);

  const router = useRouter();

  const login = (e) => {
    console.log("logging in");
    e.preventDefault();
    const result = true;
    setAuth({
      username: "Dora",
      description: "Buenas",
      pfp: "https://source.boringavatars.com/marble/60/${username}?colors=123123,123432",
      email: "email@emasdsadsadail.com",
      gender: "Female",
      birthday: "Jan 31, 2000",
      joiningDate: "Nov 17, 2016",
    });
    setIsLoggedIn(true);
    // await fetchBackend("/", "POST", {
    //   email: email,
    //   password: password,
    // });
    const span = document.getElementById("ErrorFormP");
    if (!result) {
      span.textContent = "Error! Password or email invalid";
    } else {
      span.textContent = "";
    }
    router.push("/profile");
  };

  return (
    <div class="flex flex-col h-screen justify-center items-center">
      <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <h3 class="block text-gray-700 text-xl font-bold mb-2 text-center ">
          Log in
        </h3>
        <div class="mb-4">
          <label class="block text-gray-700 text-sm font-bold mb-2" for="email">
            Email
          </label>
          <input
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            type="text"
            placeholder="Introduce email"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          ></input>
        </div>
        <div class="mb-6">
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
            onChange={(e) => {
              setPassword(e.target.value);
            }}
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
            onClick={login}
          >
            Sign In
          </button>
          <a
            class="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
            href="#"
          >
            Forgot Password?
          </a>
        </div>
      </form>
    </div>
  );
}
