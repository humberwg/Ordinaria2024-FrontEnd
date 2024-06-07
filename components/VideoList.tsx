import { FunctionalComponent } from "preact";
import { Video } from "../types.ts";
import FavButton from "../islands/FavButton.tsx";

const VideoList: FunctionalComponent<{ videos: Video[]; userid: string }> = (
  { videos, userid },
) => {
  return (
    <div class="video-list-container">
      {videos &&
        videos.map((video) => {
          return (
            <div class="video-item" data-fresh-key={video.id}>
              <a
                href={`/video/${video.id}`}
                class="video-link"
              >
                <img
                  src={`https://i.ytimg.com/vi/${video.youtubeid}/hqdefault.jpg`}
                  alt={video.title}
                  class="video-thumbnail"
                />
                <div class="video-info">
                  <h3 class="video-title">{video.title}</h3>
                  <p class="video-description">{video.description}</p>
                  <p class="video-release-date">Release date: {video.date}</p>
                </div>
              </a>
              <FavButton video={video} userid={userid} />
            </div>
          );
        })}
    </div>
  );
};

export default VideoList;
