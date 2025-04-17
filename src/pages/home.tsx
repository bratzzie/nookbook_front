import React, { useState } from "react";
import "./home.css";
import "../assets/global.css";
import { RegisterModal } from "../features/auth/register/components/registermodal/RegisterModal";
import { RightSideBar } from "../features/landing/rightsidebar/RightSideBar";
export const Home: React.FC = () => {
  const [register, setRegister] = useState<boolean>(false);
  const toggleRegister = () => {
    setRegister(!register);
  };

  return (
    <div className="bg-color">
      {register ? <RegisterModal toggleModal={toggleRegister} /> : <></>}
      <div className="w-full h-screen overflow-y-scroll grid grid-cols-2">
        <div className="h-full">
          <img
            className="w-full h-full object-cover background-cover background-center background-no-repeat"
            src={`${process.env.PUBLIC_URL}/assets/images/landing.png`}
            alt="Landing Image"
          />
        </div>
        <div className="w-full flex align-center justify-center h-screen">
          <RightSideBar
            toggleLogin={() => {}}
            toggleRegister={toggleRegister}
          />
        </div>
      </div>
    </div>
  );
};
