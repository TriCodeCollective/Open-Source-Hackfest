"use client";
import { useEffect, useState } from "react";
import { fetchBackend } from "@/app/Functions";
import { useRouter } from "next/navigation";

export default function Profile() {
  const router = useRouter();

  const [username, setUsername] = useState("Username");
  const [email, setEmail] = useState("email@email.com");
  const [description, setDescription] = useState("Brief description");
  const [gender, setGender] = useState("Male/Female");
  const [birthday, setBirthday] = useState("1 Jan 2000");
  const [pfp, setPfp] = useState(
    "https://source.boringavatars.com/marble/60/?colors=e2c1dc,63e00c,e1b7b,f070b8,4b63f3"
  );
  const [joiningDate, setJoiningDate] = useState("1 Jan 2023");
  const [connectedStatus, setConnectedStatus] = useState("Active");
  const [expandOptions, setExpandOptions] = useState(false);

  window.addEventListener("blur", () => {
    setConnectedStatus("Ausent");
    setTimeout(() => {
      setConnectedStatus("Offline");
    }, 10 * 60 * 1000);
  });

  window.addEventListener("focus", () => {
    setConnectedStatus("Active");
  });

  const buildContributionsTags = (id, contributions) => {
    const contributionsList = document.getElementById(id);

    {
      /* REFERENCE
       <li>
            <div class="text-teal-600">
              Owner at Her Company Inc.
            </div>
            <div class="text-gray-500 text-xs">
              March 2020 - Now
            </div>
          </li> */
    }

    for (let contribution of contributions) {
      if (!contributionsList.innerHTML.includes(contribution.link)) {
        contributionsList.innerHTML += `<li>
                <a href="${contribution.link}" class="text-teal-600">
                ${contribution.title}
              </a>
              <div class="text-gray-500 text-xs">
              ${contribution.date}
                
              </div>
          </li>`;
      }
    }
  };

  const formatEmail = () => {
    if (email.length > 15) {
      return email.substring(0, 12) + "...";
    }
    return email;
  };

  const initializeProfileDetails = async () => {
    const accountDetails = await fetchBackend("/accountDetails");
    // exampleObj = {
    //   username: "Dora",
    //   description: "Buenas",
    //   email: "email@emasdsadsadail.com",
    //   gender: "Female",
    //   birthday: "Jan 31, 2000",
    //   joiningDate: "Nov 17, 2016",
    // };
    setUsername(accountDetails.username);
    setDescription(accountDetails.description);
    setEmail(accountDetails.email);
    setPfp(accountDetails.pfpSrc);
    setJoiningDate(accountDetails.joiningDate);
    setGender(accountDetails.gender);
    setBirthday(accountDetails.birthday);
  };

  const initializeProfileContributions = async () => {
    const accountContributions = await fetchBackend(
      "/accountContributions",
      "POST",
      { username: username }
    );

    // exampleObj = {
    //   videos: [{ title: "Video", link: "https://youtube.com", date: "Jan 21" }],
    //   articles: [
    //     {
    //       title: "Article",
    //       link: "https://youtube.com",
    //       date: "Jan 31",
    //     },
    //   ],
    // };

    const videos = accountContributions.videos;
    const articles = accountContributions.articles;

    buildContributionsTags("articlesList", articles);
    buildContributionsTags("videosList", videos);
  };

  useEffect(() => {
    initializeProfileDetails();
    initializeProfileContributions();
  }, []);

  return (
    <>
      <div
        class="bg-blue-100 h-screen"
        onClick={() => {
          if (expandOptions) {
            setExpandOptions(false);
          }
        }}
      >
        <div class="container mx-auto my-5 p-5">
          <div class="md:flex no-wrap md:-mx-2 ">
            {/* <!-- Left Side --> */}
            <div class="w-full md:w-3/12 md:mx-2">
              {/* <!-- Profile Card --> */}
              <div class="bg-white p-3 border-t-4 border-green-400">
                <div class="image overflow-hidden">
                  <img
                    class="h-auto w-full mx-auto"
                    src="https://lavinephotography.com.au/wp-content/uploads/2017/01/PROFILE-Photography-112.jpg"
                    alt=""
                  ></img>
                </div>
                <h1 class="text-gray-900 font-bold text-xl leading-8 my-1">
                  {username}
                </h1>
                <p class="text-sm text-gray-500 hover:text-gray-600 leading-6">
                  {description}
                </p>
                <ul class="bg-gray-100 text-gray-600 hover:text-gray-700 hover:shadow py-2 px-3 mt-3 divide-y rounded shadow-sm">
                  <li class="flex items-center py-3">
                    <span>Status</span>
                    <span class="ml-auto">
                      <span class="bg-green-500 py-1 px-2 rounded text-white text-sm">
                        {connectedStatus}
                      </span>
                    </span>
                  </li>
                  <li class="flex items-center py-3">
                    <span>Member since</span>
                    <span class="ml-auto">{joiningDate}</span>
                  </li>
                </ul>
              </div>
              {/* <!-- End of profile card --> */}
              <div class="my-4"></div>
            </div>
            {/* <!-- Right Side --> */}
            <div class="w-full md:w-9/12 mx-2 h-64">
              {/* <!-- Profile tab --> */}
              {/* <!-- About Section --> */}
              <div class="bg-white p-3 shadow-sm rounded-sm">
                <div class="flex items-center space-x-2 font-semibold text-gray-900 leading-8">
                  <span clas="text-green-500">
                    <svg
                      class="h-5"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                      />
                    </svg>
                  </span>
                  <span class="tracking-wide">About</span>
                </div>
                <div class="text-gray-700">
                  <div class="grid md:grid-cols-2 text-sm">
                    <div class="grid grid-cols-2">
                      <div class="px-4 py-2 font-semibold">Username</div>
                      <div class="px-1 py-2">{username}</div>
                    </div>
                    <div class="grid grid-cols-2">
                      <div class="px-4 py-2 font-semibold">Gender</div>
                      <div class="px-1 py-2">{gender}</div>
                    </div>
                    <div class="grid grid-cols-2">
                      <div class="px-4 py-2 font-semibold">Email</div>
                      <div class="px-1 py-2">
                        <a class="text-blue-800" href={"mailto:" + email}>
                          {formatEmail(email)}
                        </a>
                      </div>
                    </div>
                    <div class="grid grid-cols-2">
                      <div class="px-4 py-2 font-semibold">Birthday</div>
                      <div class="px-1 py-2">{birthday}</div>
                    </div>
                  </div>
                </div>
                <button
                  onClick={() => {
                    router.push("/profile/edit-profile");
                  }}
                  class="block w-full text-blue-800 text-sm font-semibold rounded-lg hover:bg-gray-100 focus:outline-none focus:shadow-outline focus:bg-gray-100 hover:shadow-xs p-3 my-4"
                >
                  Edit profile
                </button>
              </div>
              {/* <!-- End of about section --> */}

              <div class="my-4"></div>

              {/* <!-- Experience and education --> */}
              <div class="bg-white p-3 shadow-sm rounded-sm">
                <div class="grid grid-cols-2">
                  <div>
                    <div class="flex items-center space-x-2 font-semibold text-gray-900 leading-8 mb-3">
                      <span clas="text-green-500">
                        <svg
                          class="h-5"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                          />
                        </svg>
                      </span>
                      <span class="tracking-wide">Articles</span>
                    </div>
                    <ul id="articlesList" class="list-inside space-y-2"></ul>
                  </div>
                  <div>
                    <div class="flex items-center space-x-2 font-semibold text-gray-900 leading-8 mb-3">
                      <span clas="text-green-500">
                        <svg
                          viewBox="0 0 1024 1024"
                          xmlns="http://www.w3.org/2000/svg"
                          id="IconChangeColor"
                          height="20"
                          width="20"
                        >
                          <path
                            fill="#000000"
                            d="M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896zm0 832a384 384 0 0 0 0-768 384 384 0 0 0 0 768zm-48-247.616L668.608 512 464 375.616v272.768zm10.624-342.656 249.472 166.336a48 48 0 0 1 0 79.872L474.624 718.272A48 48 0 0 1 400 678.336V345.6a48 48 0 0 1 74.624-39.936z"
                            id="mainIconPathAttribute"
                            stroke-width="2"
                            stroke="#000000"
                          ></path>
                        </svg>
                      </span>
                      <span class="tracking-wide">Videos</span>
                    </div>
                    <ul id="videosList" class="list-inside space-y-2"></ul>
                  </div>
                </div>
                {/* <!-- End of Experience and education grid --> */}
              </div>
              {/* <!-- End of profile tab --> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
