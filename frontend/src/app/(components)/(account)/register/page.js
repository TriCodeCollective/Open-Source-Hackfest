"use client";
import { fetchBackend } from "@/app/Functions";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Register() {
  const [revealPassword, setRevealPassword] = useState(false);

  const router = useRouter();
  const generateRandomColors = () => {
    const colors = [];
    for (let i = 0; i <= 4; i++) {
      var randomColor = Math.floor(Math.random() * 16777215).toString(16);
      colors.push(`${randomColor.toLowerCase()}`);
    }
    return colors;
  };

  const createPfp = async () => {
    let url = `https://source.boringavatars.com/marble/60/${username}?colors=`;
    for (let color of generateRandomColors()) {
      console.log("color: ", color);
      url = url + color + ",";
    }
    url = url.substring(0, url.length - 1);
    setPfp(url);
    console.log("url: ", url);
    //await fetchBackend("/", "POST", {pfpSrc: url})
  };

  const validEmail = (email) => {
    const regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
    const result = regex.test(email);
    if (result) {
      return email;
    }
    return email;
  };

  const validPassword = (password) => {
    const regex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/g;
    const result = regex.test(password);
    if (result) {
      return result;
    }
    return password;
  };

  const register = async () => {
    const email = validEmail(document.getElementById("email").value);
    const password = validPassword(document.getElementById("password").value);
    const span = document.getElementById("ErrorRegisterFormP");
    if (email && password) {
      try {
        await fetchBackend("/sign-up-JWT", "POST", {
          email: email,
          password: password,
        }); 
        span.textContent = "";
        router.push("/profile");
      } catch (error) {
        console.log("error: ", error);
        span.textContent = "Something went wrong!";
      }
    } else {
      span.textContent = "Username or password not valid";
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
        <p class="text-red-500 text-xs italic" id="ErrorRegisterFormP"></p>
      </form>
    </div>
  );
}
