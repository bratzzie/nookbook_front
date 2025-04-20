import React, { useState, useEffect } from "react";
import "../registersteps.css";
import { RegisterValidatedTextInputName } from "../../registermodal/registertextinput/RegisterValidatedTextInputName";
import { RegisterValidatedTextInputEmail } from "../../registermodal/registertextinput/RegisterValidatedTextInputEmail";
import { RegisterNextButton } from "../../registernextbutton/RegisterNextButton";
import { useSelector, useDispatch } from "react-redux";
import { AppDispatch, RootState } from "../../../../../../redux/Store";
import {
  incremenetStep,
  updateRegister,
} from "../../../../../../redux/slices/RegisterSlice";

export const RegisterStepOne: React.FC = () => {
  const state = useSelector((state: RootState) => state.register);
  const dispatch: AppDispatch = useDispatch();

  const [buttonActive, setButtonActive] = useState<boolean>(false);

  const nextPage = () => {
    dispatch(updateRegister({ name: "error", value: "" }));
    dispatch(incremenetStep());
  };

  useEffect(() => {
    if (state.nameValid && state.usernameValid && state.emailValid) {
      setButtonActive(true);
    } else setButtonActive(false);
  }, [state]);

  return (
    <div className="reg-step-container">
      <div className="reg-step-content">
        <div className="row">
          <img
            className="w-1/4"
            src={`${process.env.PUBLIC_URL}/assets/images/coconut_tree.png`}
            alt="placeholder"
          />
          <h1 className="reg-step-title">
            Let's begin to create your account!
          </h1>
        </div>
        <div className="row">
          <RegisterValidatedTextInputName
            label="My name is"
            valueName="name"
            value={state.name}
            maxLength={16}
            obligatory={true}
          />
          <RegisterValidatedTextInputName
            label="My username is"
            valueName="username"
            value={state.username}
            maxLength={25}
            obligatory={true}
          />
        </div>
        <RegisterValidatedTextInputEmail value={state.email} label="Email" />
      </div>
      <p className="reg-step-paragraph">
        Please note: Fields marked with '*' are obligatory.
      </p>
      <RegisterNextButton
        disabled={!buttonActive}
        color={buttonActive ? "success" : "black"}
        active={buttonActive}
        onClick={nextPage}
      >
        Next!
      </RegisterNextButton>
    </div>
  );
};
