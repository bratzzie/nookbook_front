import { JSX } from "react";
import { RegisterStepOne } from "../components/registersteps/one/RegisterStepOne";
import { RegisterStepThree } from "../components/registersteps/three/RegisterStepThree";
import { RegisterStepTwo } from "../components/registersteps/two/RegisterStepTwo";
import { RegisterStepFour } from "../components/registersteps/four/RegisterStepFour";

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
    default:
      return <div>Step {step}</div>;
  }
};
