import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState, AppDispatch } from "../../../../../../redux/Store";
import { RegisterValidatedTextInputName } from "../../../../register/components/registermodal/registertextinput/RegisterValidatedTextInputName";
import { RegisterNextButton } from "../../../../register/components/registernextbutton/RegisterNextButton";
import { ValidatedTextInput } from "../../../../../../components/TextInput/ValidatedInput/ValidatedTextInput";
import {
  validateForgotPasswordCode,
  requestForgotPasswordCodeVerification,
} from "../../../../../../redux/slices/ForgotPasswordSlice";

const ForgotPasswordStepTwo: React.FC = () => {
  const state = useSelector((state: RootState) => state.forgotPassword);
  const dispatch: AppDispatch = useDispatch();
  const [code, setCode] = React.useState<string>("");

  const encryptEmail = (email: string): string => {
    let encryptedEmail = "";
    let domain = false;
    for (let i = 0; i < email.length; i++) {
      if (i < 2) encryptedEmail += email.charAt(i);
      else if (email.charAt(i) === "@") {
        encryptedEmail += email.charAt(i++);
        encryptedEmail += email.charAt(i);
        domain = true;
      } else if (domain && email.charAt(i) === ".")
        encryptedEmail += email.charAt(i);
      else encryptedEmail += "*";
    }

    return encryptedEmail;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCode(e.target.value);
  };

  const validateCode = async () => {
    dispatch(validateForgotPasswordCode({ email: state.email, code: code }));
  };

  const requestCode = async () => {
    dispatch(requestForgotPasswordCodeVerification(state.email));
  };

  return (
    <div className="reg-step-container">
      <div className="reg-step-content">
        <div className="row">
          <img
            className="w-1/5"
            src={`${process.env.PUBLIC_URL}/assets/images/phone.png`}
            alt="placeholder"
          />
          <h1 className="reg-step-title pt-7">Confirm it's you!</h1>
        </div>
        <p className="mg-0 text-base mb-6">
          Before you can change your password, we need to make sure it's really
          you.
        </p>
        <p className="mg-0 text-base mb-6 text-success">
          Please enter a confirmation code sent to {encryptEmail(state.email)}
        </p>
        <ValidatedTextInput
          valid={true}
          name={"code"}
          label={"Confirmation code"}
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
        disabled={code ? false : true}
        color={code ? "success" : "black"}
        active={code ? true : false}
        onClick={validateCode}
      >
        Verify
      </RegisterNextButton>
    </div>
  );
};

export default ForgotPasswordStepTwo;
