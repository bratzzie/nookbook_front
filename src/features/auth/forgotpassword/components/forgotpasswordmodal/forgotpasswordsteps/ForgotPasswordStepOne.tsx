import React, { useState } from "react";
import { RegisterValidatedTextInputName } from "../../../../register/components/registermodal/registertextinput/RegisterValidatedTextInputName";
import { RegisterNextButton } from "../../../../register/components/registernextbutton/RegisterNextButton";
import { updateForgotPassword } from "../../../../../../redux/slices/ForgotPasswordSlice";

import axios from "axios";
import {
  validateEmail,
  validateName,
} from "../../../../../../services/Validators";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../../../../redux/Store";
import { incrementStep } from "../../../../../../redux/slices/ForgotPasswordSlice";

const ForgotPasswordStepOne: React.FC = () => {
  const [buttonActive, setButtonActive] = useState<boolean>(false);
  const [credential, setCredential] = useState<string>("");
  const [error, setError] = useState<boolean>(false);
  const state = useSelector((state: RootState) => state.forgotPassword);
  const dispatch: AppDispatch = useDispatch();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCredential(e.target.value);
    setButtonActive(true);
  };

  const searchUser = async () => {
    let findUserDTO = {
      email: "",
      username: "",
    };

    if (validateEmail(credential))
      findUserDTO = { ...findUserDTO, email: credential };
    else if (validateName(credential, 25))
      findUserDTO = { ...findUserDTO, username: credential };

    try {
      setError(false);
      let res = await axios.get(
        "http://localhost:8080/auth/forgot/credentials",
        { params: findUserDTO }
      );
      let data = await res.data;
      dispatch(updateForgotPassword({ name: "email", value: data }));

      axios.post("http://localhost:8080/auth/forgot/code", {
        email: data,
      });

      dispatch(incrementStep());
    } catch (error) {
      setError(true);
    }
  };

  return (
    <div className="reg-step-container">
      <div className="reg-step-content">
        <div className="row">
          <img
            className="w-1/5"
            src={`${process.env.PUBLIC_URL}/assets/images/pocketbook.png`}
            alt="placeholder"
          />
          <h1 className="reg-step-title pt-7">Find your account!</h1>
        </div>
        <p className="mg-0 text-base mb-6">
          Enter your email / username assocaited with your account to change
          your password.
        </p>
        <RegisterValidatedTextInputName
          label="Enter your email OR username"
          valueName="forgot"
          value={credential}
          maxLength={100}
          obligatory={true}
          updateValue={handleChange}
          nameValid={credential.length < 100}
        />
        {error ? (
          <p className="text-sm ml-4 text-error ">User not found</p>
        ) : (
          <></>
        )}
      </div>

      <RegisterNextButton
        disabled={!buttonActive}
        color={buttonActive ? "success" : "black"}
        active={buttonActive}
        onClick={searchUser}
      >
        Find account
      </RegisterNextButton>
    </div>
  );
};

export default ForgotPasswordStepOne;
