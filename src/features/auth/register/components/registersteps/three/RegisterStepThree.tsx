import React from "react";
import { useDispatch } from "react-redux";
import { incremenetStep } from "../../../../../../redux/slices/RegisterSlice";
import { AppDispatch } from "../../../../../../redux/Store";
import { RegisterNextButton } from "../../registernextbutton/RegisterNextButton";
import "./registerstepthree.css";

export const RegisterStepThree: React.FC = () => {
  const dispatch: AppDispatch = useDispatch();
  const nextStep = () => {
    dispatch(incremenetStep());
  };

  return (
    <div className="reg-step-three-container">
      <div className="reg-step-three-content">
        <div className="row">
          <img
            className="reg-step-three-image"
            src={`${process.env.PUBLIC_URL}/assets/images/ticket.png`}
            alt="placeholder"
          />
          <h1 className="reg-step-three-title">
            Your experience is important to us!
          </h1>
        </div>
        <p className="reg-step-three-paragraph">
          Your private information and web browsing history will never be
          stored.
        </p>

        <p className="reg-step-three-paragraph">
          By signing up, you agree to our{" "}
          <span className="reg-step-three-link">Terms of Service</span>,{" "}
          <span className="reg-step-three-link">Privacy Policy</span> and{" "}
          <span className="reg-step-three-link">Cookie use</span>.{" "}
          <span className="reg-step-three-link">Learn more.</span>
        </p>
      </div>
      <RegisterNextButton active={true} color="success" onClick={nextStep}>
        I Agree!
      </RegisterNextButton>
    </div>
  );
};
