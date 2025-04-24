import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../../../../redux/Store";
import { ValidatedTextInput } from "../../../../../../components/TextInput/ValidatedInput/ValidatedTextInput";
import { DisabledValidatedTextInput } from "../../../../../../components/TextInput/ValidatedInput/DisabledValidatedTextInput";
import { VisibilityOffOutlined, VisibilityOutlined } from "@mui/icons-material";
import { RegisterNextButton } from "../../../../register/components/registernextbutton/RegisterNextButton";
import { loginUser } from "../../../../../../redux/slices/UserSlice";
import { AppDispatch } from "../../../../../../redux/Store";
import { validatePassword } from "../../../../../../services/Validators";
import "../../../../register/components/registersteps/registersteps.css";
export const LoginStepTwo: React.FC = () => {
  const state = useSelector((state: RootState) => state.user);
  const [active, setActive] = useState<boolean>(false);
  const dispatch: AppDispatch = useDispatch();

  const toggleVisibility = () => {
    setActive(!active);
  };

  const [password, setPassword] = useState<string>("");
  const handlePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleLogin = () => {
    let body = {
      username: state.username,
      password: password,
    };
    dispatch(loginUser(body));
  };

  const isPasswordValid = (password: string): boolean => {
    return validatePassword(password);
  };

  return (
    <div className="reg-step-container">
      <div className="reg-step-content">
        <div className="row">
          <img
            className="w-1/5"
            src={`${process.env.PUBLIC_URL}/assets/images/construction.png`}
            alt="placeholder"
          />
          <h1 className="reg-step-title pt-7">Enter your password</h1>
        </div>
        <DisabledValidatedTextInput
          label={"Username"}
          value={state.username}
        ></DisabledValidatedTextInput>
        <div className="mt-6 mb-0 row">
          <ValidatedTextInput
            valid={true}
            label={"Password"}
            name="Password"
            changeValue={handlePassword}
            attributes={{
              minLength: 8,
              maxLength: 20,
              type: active ? "text" : "password",
            }}
          />
          <div onClick={toggleVisibility} className="pt-6 pl-2 cursor-pointer">
            {active ? (
              <VisibilityOutlined sx={{ fontSize: "34px", color: "#6b5e53" }} />
            ) : (
              <VisibilityOffOutlined
                sx={{ fontSize: "34px", color: "#6b5e53" }}
              />
            )}
          </div>
        </div>
        <p className="text-sm mt-0 ml-5 mb-8 text-link hover:cursor-pointer hover:underline">
          Forgot Password?
        </p>
      </div>
      <RegisterNextButton
        active={isPasswordValid(password)}
        disabled={!isPasswordValid(password)}
        onClick={handleLogin}
        color={isPasswordValid(password) ? "success" : "black"}
      >
        Log in
      </RegisterNextButton>
    </div>
  );
};
