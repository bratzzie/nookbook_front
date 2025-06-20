import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { ValidatedTextInput } from "../../../../../../components/TextInput/ValidatedInput/ValidatedTextInput";
import { AppDispatch, RootState } from "../../../../../../redux/Store";
import { RegisterNextButton } from "../../registernextbutton/RegisterNextButton";
import "../registersteps.css";
import {
  requestEmailVerification,
  verifyEmail,
} from "../../../../../../redux/slices/RegisterSlice";

export const RegisterStepFive: React.FC = () => {
  const state = useSelector((state: RootState) => state.register);

  const [code, setCode] = useState<string>("");
  const dispatch: AppDispatch = useDispatch();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCode(e.target.value);
  };

  const requestCode = async () => {
    dispatch(requestEmailVerification(state.username));
  };

  const verify = () => {
    dispatch(
      verifyEmail({
        username: state.username,
        code: code,
      })
    );
  };

  return (
    <div className="reg-step-container">
      <div className="reg-step-content">
        <div className="row">
          <img
            className="w-1/4 "
            src={`${process.env.PUBLIC_URL}/assets/images/book.png`}
            alt="placeholder"
          />
          <h1 className="reg-step-title ">
            We sent you a verifiation code on your email
          </h1>
        </div>

        <p className="reg-step-paragraph">
          Enter it below to verify your account
        </p>
        <ValidatedTextInput
          valid={true}
          name={"code"}
          label={"Verification code"}
          changeValue={handleChange}
        />
        <p className="reg-step-paragraph">
          Didn't recieve a message?{" "}
          <span className="reg-step-link" onClick={requestCode}>
            Click here.
          </span>
        </p>
        {state.error ? (
          <p className="text-error text-sm ml-2 mt-1">{state.error}</p>
        ) : (
          <></>
        )}
      </div>
      <RegisterNextButton
        active={code ? true : false}
        disabled={code ? false : true}
        color={code ? "success" : ""}
        onClick={verify}
      >
        Verify
      </RegisterNextButton>
    </div>
  );
};
