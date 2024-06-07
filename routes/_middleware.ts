import { FreshContext } from "$fresh/server.ts";
import { verify } from "jsonwebtoken";

export const handler = (req: Request, ctx: FreshContext) => {
  if (ctx.destination !== "route") {
    return ctx.next();
  }

  const cookies = req.headers.get("cookie");

  if (ctx.route !== "/register" && ctx.route !== "/login") {
    if (cookies) {
      const allCookies = cookies.split("; ");
      const authCookies = allCookies.find((cookie) =>
        cookie.startsWith("auth=")
      );

      if (!authCookies) {
        const headers: Headers = new Headers({
          location: "/login",
        });

        return new Response(null, {
          status: 302,
          headers,
        });
      } else {
        const credentials = JSON.parse(authCookies.split("=")[1]);

        if (!credentials) {
          const headers: Headers = new Headers({
            location: "/login",
          });

          return new Response(null, {
            status: 302,
            headers,
          });
        } else {
          const myCredentials = verify(credentials, Deno.env.get("JWT_SECRET"));
          ctx.state = myCredentials;
        }
      }
    } else {
      const headers: Headers = new Headers({
        location: "/login",
      });

      return new Response(null, {
        status: 302,
        headers,
      });
    }
  }

  return ctx.next();
};
