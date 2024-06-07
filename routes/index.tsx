import { Handlers } from "$fresh/server.ts";

export const handler: Handlers = {
  GET: () => {
    const headers: Headers = new Headers({
      location: "/login",
    });

    return new Response(null, {
      status: 302,
      headers,
    });
  },
};
