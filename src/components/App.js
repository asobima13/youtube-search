import React, { useState } from "react";
import SearchBar from "./SearchBar";
import youtube from "../api/youtube";
import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";
import "./App.css";

/**
  FUNCTION COMPONENT VERSION
**/
const App = () => {
  // The list of videos from YouTube API will be saved in 'videos' array, And the video we chosen to watch will be associated to 'selectedVideo' variable.
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);

  // Fetch list of videos from YouTube API

  const onTermSubmit = async (term) => {
    const response = await youtube.get("/search", {
      params: {
        q: term,
      },
    });

    // Associate the data to 'state.videos' array
    setVideos(response.data.items);

    // Choose the 1st item to be rendered in the UI after the user search for videos.
    setSelectedVideo(response.data.items[0]);
  };
  
  return (
    <div className="ui container">
      <SearchBar onFormSubmit={onTermSubmit} />
      <div className="ui grid">
        <div className="ui row">
          <div className="eleven wide column">
            <VideoDetail video={selectedVideo} />
          </div>
          <div className="five wide column">
            <VideoList onVideoSelect={setSelectedVideo} videos={videos} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;