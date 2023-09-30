import { fetchBackend } from "@/app/Functions";
import React, { useEffect } from "react";

export default function Videos() {
  const initializeVideos = async () => {
    const videos = await fetchBackend("/videos");
  };

  useEffect(() => {}, []);

  return (
    <>
      <h1>Videos</h1>;
      <iframe
        class="w-full aspect-video"
        src="https://www.youtube.com/embed/tgbNymZ7vqY"
      ></iframe>
    </>
  );
}
