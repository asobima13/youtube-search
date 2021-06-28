import React from "react";
import VideoItem from "./VideoItem";

const VideoList = ({ videos, onVideoSelect }) => {
  // Map over the list of videos from YouTube API and pass each video's data to VideoItem component as a prop
  const renderedList = videos.map((video, i) => {
    if (!video.id.channelId) {
      return (
        <VideoItem
          video={video}
          onVideoSelect={onVideoSelect}
          key={video.id.videoId}
        />
      );
    }
    return null
  });

  return <div className="ui relaxed divided list">{renderedList}</div>;
};

export default VideoList;