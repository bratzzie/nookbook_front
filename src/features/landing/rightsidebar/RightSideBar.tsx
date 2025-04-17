import React from "react";
import { RightSideBarButton } from "./buttons/RightSideBarButton";
import "./rightsidebar.css";
interface RightSideBarProps {
  toggleRegister: () => void;
  toggleLogin: () => void;
}
export const RightSideBar: React.FC<RightSideBarProps> = ({
  toggleRegister,
  toggleLogin,
}) => {
  return (
    <div className="right-side-bar-container w-full flex flex-col justify-center items-start p-9">
      <h1 className="text-8xl text-primary_brown mb-10 text-fink">
        Happening now
      </h1>
      <h2 className="text-4xl m-0 mb-8 text-primary_brown">
        Join NookBook today!
      </h2>
      <div className="w-72 flex flex-col">
        <div className="w-full flex justify-evenly items-center flex-col">
          <RightSideBarButton
            handleClick={toggleRegister}
            text="Create Account"
            inactiveColor="bg-success"
            activeColor="hover:bg-primary_blue"
          />
          <p className="text-xs m-0 mb-5 text-light_gray ">
            By signing up, you agree to the{" "}
            <span className="text-link hover:cursor-pointer">
              Terms of Service
            </span>{" "}
            and{" "}
            <span className="text-link hover:cursor-pointer">
              Privacy Policy
            </span>
            , including{" "}
            <span className="text-link hover:cursor-pointer">Cookie Use</span>.
          </p>
        </div>
        <div className="w-72 flex flex-col m-0 mt-10">
          <h2 className="text-4xl text-sand mb-2 text-center">
            Already have an account?
          </h2>
          <RightSideBarButton
            handleClick={toggleLogin}
            text="Sign In"
            inactiveColor="bg-primary_green"
            activeColor="hover:bg-island"
          />
        </div>
      </div>
    </div>
  );
};
