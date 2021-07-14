import React from "react";
import VideoItem from "../video_item/video_item";
import styles from "./video_list.module.css";

const VideoList = ({ videos, onSelect, display }) => (
  <ul className={styles.videos}>
    {videos.map((video) => (
      <VideoItem
        video={video}
        key={video.id}
        onSelect={onSelect}
        display={display}
      />
    ))}
  </ul>
);

export default VideoList;
