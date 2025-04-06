import React, { useState } from "react";
import { useDispatch, UseDispatch } from "react-redux";
import { AppDispatch } from "../../../redux/Store";
import { updateRegister } from "../../../redux/slices/RegisterSlice";
import { StyledInputBox, StyledInputLabel } from "./StyledInput";
import "./validatedtextinput.css";
interface ValidatedDisplayProps {
  label: string;
  value: string;
  valid?: boolean;
}
export const ValidatedDisplay: React.FC<ValidatedDisplayProps> = ({
  label,
  value,
  valid,
}) => {
  const [focused, setFocused] = useState<boolean>(false);
  const dispath: AppDispatch = useDispatch();
  const focus = () => {
    setFocused(!focused);

    dispath(
      updateRegister({
        name: "step",
        value: 1,
      })
    );
  };

  return (
    <div className="validated-text-input-container">
      <StyledInputBox
        active={false}
        valid={valid ? (!valid ? true : false) : true}
      >
        <StyledInputLabel
          color={focused ? "success" : ""}
          active={!focused}
          valid={true}
        >
          {label}
        </StyledInputLabel>
        <input className="validated-input" onFocus={focus} value={value} />
      </StyledInputBox>
    </div>
  );
};
