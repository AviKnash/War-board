"use client"
import { Button } from "@/components/ui/button";
import { useUserContext } from "../../context/AuthContext";
import { UserCommentIcon } from "./UserCommentIcon";
import signOut from "/logout.png";
import { doSignOut } from "../../firebase/api";
import Logout from "../../../../public/logout.svg"

const UserStatsPopup = () => {
  const { currentUser } = useUserContext();
  console.log(currentUser);

  const logOut = () => {
    try {
      doSignOut().then(() => {
        window.location.reload();
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="grid grid-cols-1 h-full w-full">
      <div >
        <div className="flex items-center">
          <UserCommentIcon icon={currentUser?.photoURL} />
          <div>
            <h3 className="text-md">{currentUser?.displayName}</h3>
            <p className="text-gray-500">{currentUser?.email}</p>
          </div>
        </div>
      </div>
      <div >
        <div className="flex items-center">
          <div className="w-full p-4">
            <h3 className="w-full text-sm text-end p-4 border-b border-t">Total Games Played - {currentUser?.totalGames}</h3>
            <h3 className="w-full text-sm text-end p-4 border-b border-t">Total Games Won - {currentUser?.gamesWon}</h3>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center p-2">
        <Button onClick={logOut} className="w-full border-b border-t">
          <div className="flex justify-between items-center w-full">
            <span>Sign Out</span>
            <Logout />
          </div>
        </Button>
      </div>

      <div className="flex justify-end items-end">
        <h3 className="text-xs text-neutral-500 pr-5">Version - 1.1</h3>
      </div>
    </div>
  );
};

export default UserStatsPopup;
