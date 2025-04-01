import React, { useState, useEffect } from "react";
import "./registerstepone.css";
import { RegisterValidatedTextInputName } from "../../registermodal/registertextinput/RegisterValidatedTextInputName";
import { RegisterValidatedTextInputEmail } from "../../registermodal/registertextinput/RegisterValidatedTextInputEmail";
import { RegisterNextButton } from "../../registernextbutton/RegisterNextButton";
import { useSelector, useDispatch } from "react-redux";
import { AppDispatch, RootState } from "../../../../../../redux/Store";
import { incremenetStep } from "../../../../../../redux/slices/RegisterSlice";

export const RegisterStepOne: React.FC = () => {
  const state = useSelector((state: RootState) => state.register);
  const dispatch: AppDispatch = useDispatch();

  const [buttonActive, setButtonActive] = useState<boolean>(false);

  const nextPage = () => {
    dispatch(incremenetStep());
  };

  useEffect(() => {
    if (state.nameValid && state.usernameValid && state.emailValid) {
      setButtonActive(true);
    } else setButtonActive(false);
  }, [state]);

  return (
    <div className="reg-step-one-container">
      <div className="reg-step-one-content">
        <div className="row">
          <img
            className="reg-step-one-image"
            src={`${process.env.PUBLIC_URL}/assets/images/coconut_tree.png`}
            alt="placeholder"
          />
          <h1 className="reg-step-one-title">
            Let's begin to create your account!
          </h1>
        </div>
        <div className="row">
          <RegisterValidatedTextInputName
            valueName="name"
            value={state.name}
            maxLength={50}
          />
          <RegisterValidatedTextInputName
            valueName="username"
            value={state.username}
            maxLength={25}
          />
        </div>
        <RegisterValidatedTextInputEmail value={state.email} />
      </div>
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
