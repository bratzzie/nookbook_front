import React, { useState } from "react";
import { ValidatedTextInput } from "../../../../../../components/TextInput/ValidatedInput/ValidatedTextInput";
import { RegisterValidatedTextInputEmail } from "../../../../register/components/registermodal/registertextinput/RegisterValidatedTextInputEmail";
import { RegisterValidatedTextInputName } from "../../../../register/components/registermodal/registertextinput/RegisterValidatedTextInputName";
import { RegisterNextButton } from "../../../../register/components/registernextbutton/RegisterNextButton";

interface ForgotPasswordStepOneProps {
  setCredential: (name: string) => void;
  error: boolean;
}
const ForgotPasswordStepOne: React.FC<ForgotPasswordStepOneProps> = ({
  setCredential,
  error,
}) => {
  const [buttonActive, setButtonActive] = useState<boolean>(false);
  const [credential, updateCredential] = useState<string>("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCredential(e.target.value);
    updateCredential(e.target.value);
    setButtonActive(true);
  };

  const findUsername = () => {};

  return (
    <div className="reg-step-container">
      <div className="reg-step-content">
        <div className="row">
          <img
            className="w-1/5"
            src={`${process.env.PUBLIC_URL}/assets/images/lifeservice.png`}
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
          nameValid={!error}
        />
        {error ? <p className="text-sm ml-2 mt-1 ">User not found</p> : <></>}
      </div>

      <RegisterNextButton
        disabled={!buttonActive}
        color={buttonActive ? "success" : "black"}
        active={buttonActive}
        onClick={findUsername}
      >
        Login
      </RegisterNextButton>
    </div>
  );
};

export default ForgotPasswordStepOne;
