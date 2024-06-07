import { FunctionalComponent } from "preact";
import { Video } from "../types.ts";
import VideoDescription from "./VideoDescription.tsx";
import FavButton from "../islands/FavButton.tsx";

const VideoComponent: FunctionalComponent<{ video: Video; userid: string }> = (
  { video, userid },
) => {
  return (
    <div class="video-detail-container">
      <a href="/videos" class="back-button">← Go Back to List</a>
      {video &&
        <VideoDescription video={video} />}

      <h2 class="video-detail-title">{video.title}</h2>
      <p class="video-detail-description">{video.description}</p>
      <FavButton video={video} userid={userid} />
    </div>
  );
};

export default VideoComponent;
