import React, { ChangeEvent, useState } from "react";
import { ValidatedTextInput } from "../../../../../../components/TextInput/ValidatedInput/ValidatedTextInput";
import "./registervalidatedtextinput.css";

interface RegisterValidatedTextInputsProps {
  valueName: string;
  value: string;
  maxLength: number;
  obligatory: boolean;
  label: string;
  updateValue(e: React.ChangeEvent<HTMLInputElement>): void;
  nameValid: boolean;
}

export const RegisterValidatedTextInputName: React.FC<
  RegisterValidatedTextInputsProps
> = ({
  valueName,
  value,
  maxLength,
  obligatory,
  label,
  updateValue,
  nameValid,
}) => {
  return (
    <div className="register-validated-text-input-container">
      <div className="register-validated-text-input-content">
        <ValidatedTextInput
          valid={nameValid}
          name={valueName}
          label={label}
          changeValue={updateValue}
          data={value}
          attributes={{ maxLength: maxLength, obligatory: obligatory }}
        />
        {obligatory ? (
          <span className="register-validated-text-input-obligatory">*</span>
        ) : (
          <></>
        )}
        {nameValid ? (
          <></>
        ) : (
          <span className="register-validated-text-input-error">
            Please enter a valid{" "}
            {valueName.charAt(0).toUpperCase() + valueName.substring(1)}
          </span>
        )}
      </div>
    </div>
  );
};
