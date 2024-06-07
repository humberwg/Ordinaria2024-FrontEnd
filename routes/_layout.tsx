import { PageProps } from "$fresh/server.ts";
import Header from "../components/Header.tsx";
import { ResponseData } from "../types.ts";

const Layout = (props: PageProps<unknown, ResponseData>) => {
  const Component = props.Component;
  const name = props.state.name;

  if (props.route === "/login" || props.route === "/register") {
    return <Component />;
  } else {
    return (
      <div class="page-container">
        <Header name={name} />
        <Component />
      </div>
    );
  }
};

export default Layout;
