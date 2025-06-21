import React, { useState } from "react";
import { ValidatedTextInput } from "../../../../../../components/TextInput/ValidatedInput/ValidatedTextInput";
import { RegisterNextButton } from "../../../../register/components/registernextbutton/RegisterNextButton";
import { VisibilityOutlined, VisibilityOffOutlined } from "@mui/icons-material";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../../../../redux/Store";
import { updatePasswordByEmail } from "../../../../../../redux/slices/ForgotPasswordSlice";

interface ForgotPasswordStepThreeProps {
  toggleModal: () => void;
}

const ForgotPasswordStepThree: React.FC<ForgotPasswordStepThreeProps> = ({
  toggleModal,
}) => {
  const [passwordToggle, setPasswordToggle] = useState<boolean>(false);
  const [password, setPassword] = useState<string>("");
  const state = useSelector((state: RootState) => state.forgotPassword);
  const dispatch: AppDispatch = useDispatch();

  const sendPassword = async () => {
    let res = await dispatch(
      updatePasswordByEmail({ email: state.email, password: password })
    );

    if (res.meta.requestStatus === "fulfilled") {
      toggleModal();
    }
  };
  const togglePassword = () => {
    setPasswordToggle(!passwordToggle);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
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
          <h1 className="reg-step-title ">Create a new password</h1>
        </div>
        <p className="reg-step-paragraph">
          <span className="text-base">Rules: </span>
          <br />
          - at least 8 characters, maximum is 20
          <br />- must contain at least 1 uppercase letter, 1 lowercase letter,
          and 1 number
          <br />- can contain special characters
        </p>

        <div className="row">
          <ValidatedTextInput
            valid={true}
            label={"Password"}
            name={"password"}
            changeValue={handleChange}
            attributes={{
              minLength: 8,
              maxLength: 20,
              type: passwordToggle ? "text" : "password",
            }}
          />
          <div className="pt-6 pl-2 cursor-pointer" onClick={togglePassword}>
            {passwordToggle ? (
              <VisibilityOutlined sx={{ fontSize: "34px", color: "#6b5e53" }} />
            ) : (
              <VisibilityOffOutlined
                sx={{ fontSize: "34px", color: "#6b5e53" }}
              />
            )}
          </div>
        </div>
        {state.error ? (
          <p className="text-error text-sm ml-2 mt-1">{state.error}</p>
        ) : (
          <></>
        )}
      </div>
      <RegisterNextButton
        active={password.length >= 8 && password.length <= 20}
        disabled={!(password.length >= 8)}
        onClick={sendPassword}
        color={""}
      >
        Complete registration
      </RegisterNextButton>
    </div>
  );
};

export default ForgotPasswordStepThree;
