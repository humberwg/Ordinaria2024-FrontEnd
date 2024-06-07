const LogoutButton = () => {
  const onLogout = () => {
    document.cookie = `auth=; max-age=0,1`;
  };
  return (
    <a
      class="logout-button"
      href={"/login"}
      onClick={() => {
        onLogout();
      }}
    >
      Logout
    </a>
  );
};

export default LogoutButton;
