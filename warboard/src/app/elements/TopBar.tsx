import Logo from "../../../public/logo.svg";

const TopBar = () => {
  //   const { userLoggedIn ,currentUser} = useUserContext();
  const userLoggedIn = false;
  const homeLink = `/start-game`;
  const leaderboardLink = `/start-game/leaderboard`;

  return (
    <nav className="flex justify-between shadow h-16 p-1">
      <div className="items-center m-1">
        <Logo height="100%" />
      </div>
      <div className="items-center border-white border">
        <Logo height="100%" />
      </div>
    </nav>
  );
};

export default TopBar;
