"use client";
import CreateGame from "@/app/elements/CreateGame";
import Warboard from "../../../../public/warboard.svg";
import { useUserContext } from "@/app/context/AuthContext";
import JoinGame from "@/app/elements/JoinGame";
import SignIn from "@/app/elements/SignIn";

const Home = () => {
  // const { userLoggedIn, currentUser, isLoading } = useUserContext();
  const userLoggedIn = false;

  return (
    <>
      <div className="flex-col h-full">
        <div className="h-1/2 flex items-center justify-center">
          <Warboard height="50%"/>
        </div>

        {/* {userLoggedIn && !isLoading && (
          <div className="grid grid-col-1 mt-5">
            <LoggedInUser currentUser={currentUser} />
          </div>
        )} */}
        <div className="h-1/2 border border-white">
          <div
            className={`w-full h-full border border-white grid grid-cols-1 py-5 sm:grid-cols-2 lg:grid-cols-${
              userLoggedIn ? "2" : "3"
            }`}
          >
            <CreateGame />
            {!userLoggedIn && <SignIn />}

            <JoinGame />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
