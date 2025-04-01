import React, { useState } from "react";
import { useDispatch, UseDispatch } from "react-redux";
import { AppDispatch } from "../../../redux/Store";
import { updateRegister } from "../../../redux/slices/RegisterSlice";
import { StyledInputBox, StyledInputLabel } from "./StyledInput";

interface ValidatedDisplayProps {
  label: string;
  value: string;
}
export const ValidatedDisplay: React.FC<ValidatedDisplayProps> = ({
  label,
  value,
}) => {
  const [focused, setFocused] = useState<boolean>(false);
  const dispath: AppDispatch = useDispatch();
  const focus = () => {
    dispath(
      updateRegister({
        name: "step",
        value: 1,
      })
    );
  };

  return (
    <div className="validated-text-input-container">
      <StyledInputBox active={false} valid={true}>
        <StyledInputLabel
          color={focused ? "success" : ""}
          active={focused}
          valid={true}
        >
          {label}
        </StyledInputLabel>
        <input className="validated-input" onFocus={focus} value={value} />
      </StyledInputBox>
    </div>
  );
};
