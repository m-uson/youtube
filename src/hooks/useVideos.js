import React, { useEffect, useState } from "react";
import youtube from "../apis/youtube";

const useVideos = () => {
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);

  const search = async (term) => {
    const response = await youtube.get("/search", {
      params: {
        q: term,
      },
    });
    setVideos(response.data.items);
    setSelectedVideo(response.data.items[0]);
  };

  useEffect(() => {
    search("football");
  }, []);

  return [videos, search, selectedVideo, setSelectedVideo];
};

export default useVideos;
