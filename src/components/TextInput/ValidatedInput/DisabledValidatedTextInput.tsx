import React from "react";
import { StyledInputBox, StyledInputLabel } from "./StyledInput";
import "./validatedtextinput.css";

interface DisabledValidatedTextInputProps {
  label: string;
  value: string;
}
export const DisabledValidatedTextInput: React.FC<
  DisabledValidatedTextInputProps
> = ({ label, value }) => {
  return (
    <div className="validated-text-input-container">
      <StyledInputBox active={false} valid={true}>
        <StyledInputLabel color="gray" active={true} valid={true}>
          {label}
        </StyledInputLabel>
        <input
          value={value}
          disabled
          className="validated-input validated-input-transparent"
        ></input>
      </StyledInputBox>
    </div>
  );
};
