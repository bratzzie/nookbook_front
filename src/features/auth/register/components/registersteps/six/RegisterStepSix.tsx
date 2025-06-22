import React, { useEffect, useState } from "react";
import { ValidatedTextInput } from "../../../../../../components/TextInput/ValidatedInput/ValidatedTextInput";
import { VisibilityOutlined, VisibilityOffOutlined } from "@mui/icons-material";
import { RegisterNextButton } from "../../registernextbutton/RegisterNextButton";
import { useSelector, useDispatch } from "react-redux";
import { AppDispatch, RootState } from "../../../../../../redux/Store";
import { updatePassword } from "../../../../../../redux/slices/RegisterSlice";
import {
  loginUser,
  setFromRegistration,
} from "../../../../../../redux/slices/UserSlice";
import { useNavigate } from "react-router-dom";
import "../registersteps.css";

export const RegisterStepSix = () => {
  const [visible, setVisible] = useState<boolean>(false);
  const [password, setPassword] = useState<string>("");
  const state = useSelector((state: RootState) => state);
  const dispatch: AppDispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const toggleVisibility = () => {
    setVisible(!visible);
  };

  const sendPassword = async () => {
    let res = await dispatch(
      updatePassword({
        username: state.register.username,
        password: password,
      })
    );

    if (res.meta.requestStatus === "fulfilled") {
      dispatch(setFromRegistration(true));
    }
  };

  useEffect(() => {
    if (state.user.loggedIn) {
      navigate("/home");
      return () => {};
    }
    if (state.user.fromRegistration) {
      dispatch(
        loginUser({
          username: state.register.username,
          password: password,
        })
      );
      return;
    }
  }, [state.user.fromRegistration, state.user.loggedIn]);

  return (
    <div className="reg-step-container">
      <div className="reg-step-content">
        <div className="row">
          <img
            className="w-1/5"
            src={`${process.env.PUBLIC_URL}/assets/images/bottle.png`}
            alt="placeholder"
          />
          <h1 className="reg-step-title pt-5">Set up your password</h1>
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
              type: visible ? "text" : "password",
            }}
          />
          <div className="pt-6 pl-2 cursor-pointer" onClick={toggleVisibility}>
            {visible ? (
              <VisibilityOutlined sx={{ fontSize: "34px", color: "#6b5e53" }} />
            ) : (
              <VisibilityOffOutlined
                sx={{ fontSize: "34px", color: "#6b5e53" }}
              />
            )}
          </div>
        </div>
        {state.register.error ? (
          <p className="text-error text-sm ml-2 mt-1">{state.register.error}</p>
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
