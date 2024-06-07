import { FunctionalComponent } from "preact";
import LogoutButton from "../islands/LogoutButton.tsx";

const Header: FunctionalComponent<{ name: string }> = ({ name }) => {
  return (
    <header class="header-container">
      <div class="header-content">
        <span class="user-name">{name}</span>
        <LogoutButton />
      </div>
    </header>
  );
};

export default Header;
