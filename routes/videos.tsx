import { FreshContext, Handlers, PageProps } from "$fresh/server.ts";
import VideosComponent from "../components/VideosComponent.tsx";
import { ResponseData, Video } from "../types.ts";

export const handler: Handlers<Video[], ResponseData> = {
  GET: async (_req: Request, ctx: FreshContext<ResponseData, Video[]>) => {
    const userID = ctx.state.id;
    const response = await fetch(
      `https://videoapp-api.deno.dev/videos/${userID}`,
    );

    if (!response.ok) {
      return new Response(null, {
        status: 404,
      });
    } else {
      const data: Video[] = await response.json();
      return ctx.render(data);
    }
  },
};

const Page = (props: PageProps<Video[], ResponseData>) => {
  const videos = props.data;
  const userID = props.state.id;
  return <VideosComponent videos={videos} userid={userID} />;
};

export default Page;
