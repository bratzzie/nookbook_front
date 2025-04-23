import React, { useState } from "react";
import { ValidatedTextInput } from "../../../../../../components/TextInput/ValidatedInput/ValidatedTextInput";
import "./registervalidatedtextinput.css";

interface RegisterValidatedTextInputEmailProps {
  value: string;
  label: string;
  updateValue(e: React.ChangeEvent<HTMLInputElement>): void;
  valid: boolean;
  obligatory: boolean;
}
export const RegisterValidatedTextInputEmail: React.FC<
  RegisterValidatedTextInputEmailProps
> = ({ value, label, updateValue, valid, obligatory }) => {
  return (
    <div className="register-validated-text-input-container">
      <div className="register-validated-text-input-content">
        <ValidatedTextInput
          valid={valid}
          name="email"
          label={label}
          changeValue={updateValue}
          data={value}
        />
        {obligatory ? (
          <span className="register-validated-text-input-obligatory">*</span>
        ) : (
          <></>
        )}

        {valid ? (
          <></>
        ) : (
          <span className="register-validated-text-input-error">
            Please enter a valid Email
          </span>
        )}
      </div>
    </div>
  );
};
