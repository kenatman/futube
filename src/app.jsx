import React, { useCallback, useEffect, useState } from "react";
import styles from "./app.module.css";
import SearchHeader from "./components/search_header/search_header";
import VideoDetail from "./components/video_detail/video_detail";
import VideoList from "./components/video_list/video_list";

function App({ youtube }) {
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);
  useEffect(() => {
    youtube
      .mostPopular() //
      .then((videos) => setVideos(videos));
  }, [youtube]);

  const handleSearch = useCallback(
    (term) => {
      setSelectedVideo(null);
      youtube
        .search(term) //
        .then((videos) => setVideos(videos));
    },
    [youtube]
  );

  const handleSelect = useCallback(
    (video) => {
      setSelectedVideo(video);
    },
    [setSelectedVideo]
  );

  return (
    <div className={styles.app}>
      <SearchHeader onSearch={handleSearch} />
      <section className={styles.content}>
        {selectedVideo && (
          <div className={styles.detail}>
            <VideoDetail video={selectedVideo} />
          </div>
        )}
        <div className={styles.list}>
          <VideoList
            videos={videos}
            onSelect={handleSelect}
            display={selectedVideo ? `list` : `grid`}
          />
        </div>
      </section>
    </div>
  );
}

export default App;
