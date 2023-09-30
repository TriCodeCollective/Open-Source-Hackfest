"use client";
import { fetchBackend } from "@/app/Functions";
import React, { useEffect } from "react";

export default function Articles() {
  const generateArticlesFeed = () => {
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
          initializeArticles(category);
        };
        button.textContent = (
          category.charAt(0).toUpperCase() + category.substring(1)
        ).replace("_", " ");
        fragment.appendChild(button);
      }
    }
    categoriesBtns.appendChild(fragment);
  };

  const initializeArticles = async (category = "all") => {
    const articles = [
      {
        id: "Hackers Guide web3 - javascript",
        link: "https://medium.com/illumination/that-time-my-kid-googled-me-and-i-was-no-longer-dad-c6ee368114f7",
        author: "Author",
        tags: ["web3", "javascript"],
      },
      {
        id: "Hackers Guide 2 web3 - javascript",
        link: "https://medium.com/illumination/that-time-my-kid-googled-me-and-i-was-no-longer-dad-c6ee368114f7",
        author: "Author",
        tags: ["web3", "javascript"],
      },
      {
        id: "Hackers Guide 3 web design - javascript - SQL",
        link: "https://medium.com/illumination/that-time-my-kid-googled-me-and-i-was-no-longer-dad-c6ee368114f7",
        author: "Author",
        tags: ["web_design", "SQL", "javascript"],
      },
      {
        id: "Hackers Guide 4 web3 - javascript - SQL",
        link: "https://medium.com/illumination/that-time-my-kid-googled-me-and-i-was-no-longer-dad-c6ee368114f7",
        author: "Author",
        tags: ["web3", "SQL", "javascript"],
      },
      {
        id: "Hackers Guide 5  web3 - SQL",
        link: "https://medium.com/illumination/that-time-my-kid-googled-me-and-i-was-no-longer-dad-c6ee368114f7",
        author: "Author",
        tags: ["web3", "SQL"],
      },
      {
        id: "Hackers Guide 6  web3  - SQL",
        link: "https://medium.com/illumination/that-time-my-kid-googled-me-and-i-was-no-longer-dad-c6ee368114f7",
        author: "Author",
        tags: ["web3", "SQL"],
      },
      {
        id: "Hackers Guide 7  javascript - SQL",
        link: "https://medium.com/illumination/that-time-my-kid-googled-me-and-i-was-no-longer-dad-c6ee368114f7",
        author: "Author",
        tags: ["javascript", "SQL"],
      },
      {
        id: "Hackers Guide 8  open source - SQL",
        link: "https://medium.com/illumination/that-time-my-kid-googled-me-and-i-was-no-longer-dad-c6ee368114f7",
        author: "Author",
        tags: ["open_source", "SQL"],
      },
    ]; //await fetchBackend("/videos", "POST", {category: category});

    const articlesContainer = document.getElementById("ArticlesFeed");
    articlesContainer.innerHTML = "";
    for (let article of articles) {
      console.log("article: ", article.tags);
      if (!article.tags.includes(category) && category !== "all") {
        continue;
      }
      if (!articlesContainer.innerHTML.includes(article.id)) {
        articlesContainer.innerHTML += `
        
        <hr
    class="my-12 h-px border-t-0 bg-transparent bg-gradient-to-r from-transparent via-neutral-500 to-transparent opacity-25 dark:opacity-100" /><li class="pb-3 sm:pb-50 list-none">
            <div class="flex items-center space-x-4">
            <div class="flex-shrink-0"></div>
            <div class="flex-1 min-w-0">
                <a
                  href="${article.link}"
                  class="text-xl text-gray-900 truncate dark:text-black font-black"
                >
                  ${article.id}
                </a>
                <p class="text-sm text-gray-500 truncate dark:text-gray-400">
                  By: ${article.author}
                </p>
              </div>
            </div>
          </li>
          <hr
    class="my-12 h-px border-t-0 bg-transparent bg-gradient-to-r from-transparent via-neutral-500 to-transparent opacity-25 dark:opacity-100" />
        `;
      }
    }
  };

  useEffect(() => {
    initializeArticles();
    generateArticlesFeed();
  }, []);

  return (
    <>
      <h1>Articles</h1>
      <div
        class="flex items-center justify-center py-4 md:py-8 flex-wrap"
        id="categoriesList"
      >
        <button
          onClick={() => {
            initializeArticles();
          }}
          class="text-gray-900 border border-white hover:border-gray-200 dark:border-gray-900 dark:bg-gray-900 dark:hover:border-gray-700 bg-white focus:ring-4 focus:outline-none focus:ring-gray-300 rounded-full text-base font-medium px-5 py-2.5 text-center mr-3 mb-3 dark:focus:ring-gray-800 dark:text-white"
        >
          All categories
        </button>
      </div>

      <div id="ArticlesFeed">
        <ul class="max-w-md divide-y divide-gray-200 dark:divide-red-700"></ul>
      </div>
    </>
  );
}
