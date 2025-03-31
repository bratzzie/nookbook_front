import { JSX } from "react";
import { RegisterStepOne } from "../components/registerstepone/RegisterStepOne";

export const determineModalContent = (step:number):JSX.Element => {
    switch(step) {
        case 1:
            return <RegisterStepOne/>
        default:
            return <div>Step {step}</div>
    }
}