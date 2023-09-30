"use client";
import { fetchBackend } from "@/app/Functions";
import React, { useEffect } from "react";

export default function Videos() {
  const generateVideosFeed = () => {
    const categories = [
      "web3",
      "open_source",
      "javascript",
      "SQL",
      "web_design",
    ];

    const categoriesBtns = document.getElementById("categoriesList");
    const fragment = document.createDocumentFragment();
    for (let category of categories) {
      if (!categoriesBtns.innerHTML.includes(`${category}`)) {
        const button = document.createElement("button");
        button.id = category;
        button.className =
          "text-gray-900 border border-white hover:border-gray-200 dark:border-gray-900 dark:bg-gray-900 dark:hover:border-gray-700 bg-white focus:ring-4 focus:outline-none focus:ring-gray-300 rounded-full text-base font-medium px-5 py-2.5 text-center mr-3 mb-3 dark:text-white dark:focus:ring-gray-800";
        button.onclick = () => {
          initializeVideos(category);
        };
        button.textContent = (
          category.charAt(0).toUpperCase() + category.substring(1)
        ).replace("_", " ");
        fragment.appendChild(button);
      }
    }
    categoriesBtns.appendChild(fragment);
  };

  const initializeVideos = async (category = "all") => {
    const videos = [
      {
        id: "Bohemia Rhaps",
        link: "https://www.youtube.com/embed/tgbNymZ7vqY",
        tags: ["web3", "javascript"],
      },
      {
        id: "Bohemia Rhadwa",
        link: "https://www.youtube.com/embed/tgbNymZ7vqY",
        tags: ["web3", "javascript"],
      },
      {
        id: "Bohemia Rhadwaad dwdaps",
        link: "https://www.youtube.com/embed/tgbNymZ7vqY",
        tags: ["web_design", "SQL", "javascript"],
      },
      {
        id: "Bohemia Rhaawdps da dddwdaps",
        link: "https://www.youtube.com/embed/tgbNymZ7vqY",
        tags: ["web3", "SQL", "javascript"],
      },
      {
        id: "Bohemia Rhaps",
        link: "https://www.youtube.com/embed/tgbNymZ7vqY",
        tags: ["web3", "SQL"],
      },
      {
        id: "Bohemia Rhadwaaddddd d ddddd dd",
        link: "https://www.youtube.com/embed/tgbNymZ7vqY",
        tags: ["web3", "SQL"],
      },
      {
        id: "Bohemia Rhadwdaad dddd ddddddd ddddddddd dddddd dwdaps",
        link: "https://www.youtube.com/embed/tgbNymZ7vqY",
        tags: ["javascript", "SQL"],
      },
      {
        id: "Bohemia Rhaawdps dddawaw  wdaps",
        link: "https://www.youtube.com/embed/tgbNymZ7vqY",
        tags: ["open_source", "SQL"],
      },
    ]; //await fetchBackend("/videos", "POST", {category: category});

    const videosContainer = document.getElementById("videosFeed");
    videosContainer.innerHTML = "";
    for (let video of videos) {
      if (!video.tags.includes(category) && category !== "all") {
        continue;
      }
      console.log("video: ", video.id);
      if (!videosContainer.innerHTML.includes(video.id)) {
        videosContainer.innerHTML += `<div>
        <iframe
          class="w-full aspect-video h-auto max-w-full rounded-lg"
          src="${video.link}"
        ></iframe>
        <p  className="fitContent"  class="max-w-xs break-before-auto">
        ${video.id}
        </p>
      </div>`;
      }
    }
  };

  useEffect(() => {
    initializeVideos();
    generateVideosFeed();
  }, []);

  return (
    <>
      <h1>Videos</h1>
      <div
        class="flex items-center justify-center py-4 md:py-8 flex-wrap"
        id="categoriesList"
      >
        <button
          onClick={() => {
            initializeVideos();
          }}
          class="text-gray-900 border border-white hover:border-gray-200 dark:border-gray-900 dark:bg-gray-900 dark:hover:border-gray-700 bg-white focus:ring-4 focus:outline-none focus:ring-gray-300 rounded-full text-base font-medium px-5 py-2.5 text-center mr-3 mb-3 dark:text-white dark:focus:ring-gray-800"
        >
          All categories
        </button>
      </div>
      <br></br>
      <div class="grid grid-cols-2 md:grid-cols-3 gap-4" id="videosFeed"></div>
    </>
  );
}
