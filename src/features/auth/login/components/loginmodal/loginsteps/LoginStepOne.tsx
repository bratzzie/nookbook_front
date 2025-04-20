import React, { useState } from "react";
import "../../../../register/components/registersteps/registersteps.css";
import { RegisterValidatedTextInputEmail } from "../../../../register/components/registermodal/registertextinput/RegisterValidatedTextInputEmail";
import { RegisterNextButton } from "../../../../register/components/registernextbutton/RegisterNextButton";
import { RegisterValidatedTextInputName } from "../../../../register/components/registermodal/registertextinput/RegisterValidatedTextInputName";
export const LoginStepOne: React.FC = () => {
  const [buttonActive, setButtonActive] = useState<boolean>(false);
  const nextPage = () => {};
  return (
    <div className="reg-step-container">
      <div className="reg-step-content">
        <div className="row">
          <img
            className="w-1/5"
            src={`${process.env.PUBLIC_URL}/assets/images/lifeservice.png`}
            alt="placeholder"
          />
          <h1 className="reg-step-title pt-7">Sign in your account!</h1>
        </div>
        <RegisterValidatedTextInputEmail
          value={"state.email"}
          label="Sign in with email"
        />
        <div className="w-full flex justify-evenly items-center mb-5">
          <div className="w-full h-0.5 bg-sand"></div>
          <p className="m-0 text-base ml-2 mr-2 text-sand">or</p>
          <div className="w-full h-0.5 bg-sand"></div>
        </div>
        <RegisterValidatedTextInputName
          label="Sign in with username"
          valueName="username"
          value={"state.username"}
          maxLength={25}
          obligatory={false}
        />
      </div>
      <RegisterNextButton
        disabled={!buttonActive}
        color={buttonActive ? "success" : "black"}
        active={buttonActive}
        onClick={nextPage}
      >
        Login
      </RegisterNextButton>

      <button className="w-3/4 mt-6 h-12 text-primary_dark_green bg-white text-base rounded-[30px] hover:cursor-pointer">
        Forgot Password?
      </button>
      <p className="reg-step-paragraph mt-10">
        Don't have an account? <span className="reg-step-link">Sign Up</span>
      </p>
    </div>
  );
};
