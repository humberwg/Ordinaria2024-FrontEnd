import { FreshContext, Handlers, PageProps } from "$fresh/server.ts";
import VideoComponent from "../../components/VideoComponent.tsx";
import { ResponseData, Video } from "../../types.ts";

export const handler: Handlers<Video, ResponseData> = {
  GET: async (_req: Request, ctx: FreshContext<ResponseData, Video>) => {
    const userid = ctx.state.id;

    const { videoid } = ctx.params;

    const response = await fetch(
      `https://videoapp-api.deno.dev/video/${userid}/${videoid}`,
    );

    if (!response.ok) {
      return new Response(null, {
        status: 404,
      });
    } else {
      const data: Video = await response.json();

      return ctx.render(data);
    }
  },
};

const Page = (props: PageProps<Video, ResponseData>) => {
  const video = props.data;
  const userID = props.state.id;
  return <VideoComponent video={video} userid={userID} />;
};

export default Page;
