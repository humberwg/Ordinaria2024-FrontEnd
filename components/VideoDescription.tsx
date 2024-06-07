import { FunctionalComponent } from "preact";
import { Video } from "../types.ts";

const VideoDescription: FunctionalComponent<{ video: Video }> = ({ video }) => {
  return (
    <div class="video-frame">
      <iframe
        width="100%"
        height="400px"
        src={`https://www.youtube.com/embed/${video.youtubeid}`}
        title={video.title}
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      >
      </iframe>
    </div>
  );
};

export default VideoDescription;
