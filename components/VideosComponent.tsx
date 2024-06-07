import { FunctionalComponent } from "preact";
import { Video } from "../types.ts";
import VideoList from "./VideoList.tsx";

const VideosComponent: FunctionalComponent<
  { videos: Video[]; userid: string }
> = ({ videos, userid }) => {
  return (
    <div class="video-page-container">
      <h1 class="video-list-title">Curso Deno Fresh</h1>
      <VideoList videos={videos} userid={userid} />
    </div>
  );
};

export default VideosComponent;
