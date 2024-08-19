"use client";
import CreateGame from "@/app/elements/home/CreateGame";
import Warboard from "../../../../public/warboard.svg";
import { useUserContext } from "@/app/context/AuthContext";
import JoinGame from "@/app/elements/home/JoinGame";
import SignIn from "@/app/elements/home/SignIn";
import FullSpinner from "@/app/elements/Loader";

const Home = () => {
  const { userLoggedIn, currentUser, isLoading } = useUserContext();
  // console.log(userLoggedIn)
  return (
    <>
      {isLoading ? (
        <FullSpinner />
      ) : (
        <div className="flex-col h-full">
          <div className="h-1/2 flex items-center justify-center">
            <Warboard height="50%" />
          </div>

          {/* {userLoggedIn && !isLoading && (
          <div className="grid grid-col-1 mt-5">
            <LoggedInUser currentUser={currentUser} />
            </div>
            )} */}
          <div className="h-1/2">
            <div
              className={`grid grid-cols-1 py-5 sm:grid-cols-2 lg:grid-cols-${
                userLoggedIn ? "2" : "3"
              }`}
            >
              <CreateGame />
              {!userLoggedIn && <SignIn />}

              <JoinGame />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Home;
