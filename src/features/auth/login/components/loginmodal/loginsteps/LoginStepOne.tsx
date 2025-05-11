import React, { useState } from "react";
import { AppDispatch, RootState } from "../../../../../../redux/Store";
import { useDispatch, useSelector } from "react-redux";
import {
  updateLogin,
  verifyUsername,
} from "../../../../../../redux/slices/UserSlice";
import "../../../../register/components/registersteps/registersteps.css";
import { RegisterValidatedTextInputEmail } from "../../../../register/components/registermodal/registertextinput/RegisterValidatedTextInputEmail";
import { RegisterNextButton } from "../../../../register/components/registernextbutton/RegisterNextButton";
import { RegisterValidatedTextInputName } from "../../../../register/components/registermodal/registertextinput/RegisterValidatedTextInputName";
import {
  validateEmail,
  validateName,
} from "../../../../../../services/Validators";
import { incrementStep } from "../../../../../../redux/slices/UserSlice";

interface LoginStepOneProps {
  noAccount: () => void;
  forgotPassword: () => void;
}

export const LoginStepOne: React.FC<LoginStepOneProps> = ({
  noAccount,
  forgotPassword,
}) => {
  const state = useSelector((state: RootState) => state.user);
  const dispatch: AppDispatch = useDispatch();

  const [credentialEmail, setCredentialEmail] = useState<string>("");
  const [credentialUsername, setCredentialUsername] = useState<string>("");
  const [credentialUsernameValid, setCredentialUsernameValid] =
    useState<boolean>(true);
  const [credentialEmailValid, setCredentialEmailValid] =
    useState<boolean>(true);
  const [buttonActive, setButtonActive] = useState<boolean>(false);

  const nextPage = () => {
    dispatch(updateLogin({ name: "error", value: "" }));
    dispatch(incrementStep());
  };

  const updateValue = (e: React.ChangeEvent<HTMLInputElement>): void => {
    if (e.target.name === "email") {
      let valid = validateEmail(e.target.value);
      setCredentialEmail(e.target.value);
      setCredentialEmailValid(valid);
      setButtonActive(valid);
      setCredentialUsername("");
      setCredentialUsernameValid(true);
    } else if (e.target.name === "username") {
      let valid = validateName(e.target.value, 25);
      setCredentialUsernameValid(valid);
      setCredentialUsername(e.target.value);
      setButtonActive(valid);
      setCredentialEmail("");
      setCredentialEmailValid(true);
    }
  };

  const findUsername = async (): Promise<void> => {
    let answer;
    if (credentialEmailValid && credentialEmail != "") {
      answer = await dispatch(
        verifyUsername({
          email: credentialEmail,
          username: "",
        })
      );
    } else if (credentialUsernameValid && credentialUsername != "") {
      answer = await dispatch(
        verifyUsername({ email: "", username: credentialUsername })
      );
    }

    if (verifyUsername.fulfilled.match(answer)) nextPage();
  };

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
          value={credentialEmail}
          label="Sign in with email"
          valid={credentialEmailValid}
          updateValue={updateValue}
          obligatory={false}
        />
        <div className="w-full flex justify-evenly items-center mb-5">
          <div className="w-full h-0.5 bg-sand"></div>
          <p className="m-0 text-base ml-2 mr-2 text-sand">or</p>
          <div className="w-full h-0.5 bg-sand"></div>
        </div>
        <RegisterValidatedTextInputName
          label="Sign in with username"
          valueName="username"
          value={credentialUsername}
          maxLength={25}
          obligatory={false}
          updateValue={updateValue}
          nameValid={credentialUsernameValid}
        />
        {state.error ? (
          <p className="text-sm text-error ml-4">Unable to find user</p>
        ) : (
          <></>
        )}
      </div>

      <RegisterNextButton
        disabled={!buttonActive}
        color={buttonActive ? "success" : "black"}
        active={buttonActive}
        onClick={findUsername}
      >
        Login
      </RegisterNextButton>

      <button
        className="w-3/4 mt-6 h-12 text-primary_dark_green bg-white text-base rounded-[30px] hover:cursor-pointer"
        onClick={forgotPassword}
      >
        Forgot Password?
      </button>
      <p className="reg-step-paragraph mt-10">
        Don't have an account?{" "}
        <span className="reg-step-link" onClick={noAccount}>
          Sign Up
        </span>
      </p>
    </div>
  );
};
