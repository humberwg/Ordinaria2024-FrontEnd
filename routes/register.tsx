import { Handlers } from "$fresh/server.ts";
import RegisterComponent from "../components/RegisterComponent.tsx";
import { ResponseData } from "../types.ts";
import { sign } from "jsonwebtoken";

export const handler: Handlers = {
  POST: async (req: Request) => {
    const form = await req.formData();
    const email = form.get("email")!.toString();
    const password = form.get("password")!.toString();
    const name = form.get("name")!.toString();

    const response = await fetch(`https://videoapp-api.deno.dev/register`, {
      method: "post",
      body: JSON.stringify({
        email,
        password,
        name,
      }),
    });

    if (!response.ok) {
      const headers: Headers = new Headers({
        location: "/register",
      });
      return new Response(null, {
        status: 302,
        headers,
      });
    } else {
      const data: ResponseData = await response.json();
      const myCookie = {
        email: data.email,
        name: data.name,
        id: data.id,
      };

      const token = sign(myCookie, Deno.env.get("JWT_SECRET"));

      const headers: Headers = new Headers({
        location: "/videos",
        "set-cookie": `auth=${JSON.stringify(token)}`,
      });

      return new Response(null, {
        status: 302,
        headers,
      });
    }
  },
};

const Page = () => {
  return <RegisterComponent />;
};

export default Page;
