"use client"
import Link from "next/link";
import Logo from "../../../public/logo.svg";
import { AvatarDemo } from "./home/UserIcon";
import { useUserContext } from "../context/AuthContext";

const TopBar = () => {
  const { userLoggedIn, currentUser } = useUserContext();
  const homeLink = `/start-game`;
  const leaderboardLink = `/leaderboard`;

  return (
    <nav className="flex justify-between shadow h-16 p-1">
      <div className="items-center m-1 ml-5">
        <Logo height="100%" />
      </div>
      <div className="flex items-center space-x-4 p-4">
        <Link href={leaderboardLink}>Leaderboard</Link>
        {userLoggedIn && (
            <Link href="#" className="hover:text-gray-300">
              <AvatarDemo currentUser={currentUser}/>
            </Link>
          )}
      </div>
    </nav>
  );
};

export default TopBar;
