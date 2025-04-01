import { JSX } from "react";
import { RegisterStepOne } from "../components/registersteps/one/RegisterStepOne";
import { RegisterStepThree } from "../components/registersteps/three/RegisterStepThree";
import { RegisterStepTwo } from "../components/registersteps/two/RegisterStepTwo";

export const determineModalContent = (step: number): JSX.Element => {
  switch (step) {
    case 1:
      return <RegisterStepOne />;
    case 2:
      return <RegisterStepTwo />;
    case 3:
      return <RegisterStepThree />;
    default:
      return <div>Step {step}</div>;
  }
};
