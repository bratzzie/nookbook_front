import React, { useEffect, useState } from "react";
import { StyledInputBox, StyledInputLabel } from "./StyledInput";
import { determineValidatedTextLabel } from "../../../features/auth/register/utils/TextInputUtils";
import "./validatedtextinput.css";

interface ValidatedTextInputProps {
  valid: boolean;
  name: string;
  label: string;
  data?: string;
  attributes?: Record<string, string | number | boolean>;
  changeValue(e: React.ChangeEvent<HTMLInputElement>): void;
}

export const ValidatedTextInput: React.FC<ValidatedTextInputProps> = ({
  valid,
  name,
  label,
  data,
  attributes,
  changeValue,
}) => {
  const [value, setValue] = useState<string>(data ? data : "");
  const [borderActive, setBorderActive] = useState<boolean>(false);
  const [labelActive, setLabelActive] = useState<boolean>(false);
  const [color, setColor] = useState<string>("light_gray");

  const focus = (): void => {
    setBorderActive(!borderActive);
    if (!value) setLabelActive(!labelActive);
  };

  const update = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setValue(e.target.value);
    console.log("data is", e.target.value);
    changeValue(e);
  };

  useEffect(() => {
    if (value && !labelActive) setLabelActive(true);

    setColor(determineValidatedTextLabel(borderActive, valid));
  }, [value, borderActive, labelActive, color, valid]);

  return (
    <div className="validated-text-input-container">
      <StyledInputBox active={borderActive} valid={valid}>
        <StyledInputLabel color={color} active={labelActive} valid={valid}>
          {label}
        </StyledInputLabel>
        <input
          className="validated-input"
          name={name}
          onFocus={focus}
          onBlur={focus}
          onChange={update}
          value={data}
          {...attributes}
        />
        {attributes && attributes.maxLength && (borderActive || !valid) ? (
          <span className="validated-text-input-remainder">
            {value.length} / {attributes.maxLength}
          </span>
        ) : (
          <></>
        )}
      </StyledInputBox>
    </div>
  );
};
