import { JSX } from "react";
import { RegisterStepOne } from "../components/registersteps/one/RegisterStepOne";
import { RegisterStepThree } from "../components/registersteps/three/RegisterStepThree";
import { RegisterStepTwo } from "../components/registersteps/two/RegisterStepTwo";
import { RegisterStepFour } from "../components/registersteps/four/RegisterStepFour";
import { RegisterStepFive } from "../components/registersteps/five/RegisterStepFive";
import { RegisterStepSix } from "../components/registersteps/six/RegisterStepSix";
import { LoginStepOne } from "../../login/components/loginmodal/loginsteps/LoginStepOne";
import { LoginStepTwo } from "../../login/components/loginmodal/loginsteps/LoginStepTwo";

export const determineModalContent = (step: number): JSX.Element => {
  switch (step) {
    case 1:
      return <RegisterStepOne />;
    case 2:
      return <RegisterStepTwo />;
    case 3:
      return <RegisterStepThree />;
    case 4:
      return <RegisterStepFour />;
    case 5:
      return <RegisterStepFive />;
    case 6:
      return <RegisterStepSix />;
    default:
      return <div>Step {step}</div>;
  }
};

export const determineLoginModalContent = (
  step: number,
  toggleRegister: () => void,
  toggleForgotPassword: () => void
): JSX.Element => {
  switch (step) {
    case 1:
      return (
        <LoginStepOne
          noAccount={toggleRegister}
          forgotPassword={toggleForgotPassword}
        />
      );
    case 2:
      return <LoginStepTwo />;
    default:
      return <div>Step {step}</div>;
  }
};
