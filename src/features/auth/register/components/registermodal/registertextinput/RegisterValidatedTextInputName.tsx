import React, { useState } from "react";
import { ValidatedTextInput } from "../../../../../../components/TextInput/ValidatedInput/ValidatedTextInput";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../../../../../redux/Store";
import { updateRegister } from "../../../../../../redux/slices/RegisterSlice";
import { validateName } from "../../../../../../services/Validators";
import "./registervalidatedtextinput.css";

interface RegisterValidatedTextInputsProps {
  valueName: string;
  value: string;
  maxLength: number;
  obligatory: boolean;
  label: string;
}

export const RegisterValidatedTextInputName: React.FC<
  RegisterValidatedTextInputsProps
> = ({ valueName, value, maxLength, obligatory, label }) => {
  const [nameValid, setNameValid] = useState<boolean>(true);

  const dispatch: AppDispatch = useDispatch();

  const updateValue = (e: React.ChangeEvent<HTMLInputElement>): void => {
    if (e.target.name === valueName) {
      dispatch(updateRegister({ name: e.target.name, value: e.target.value }));

      let valid = validateName(e.target.value);

      setNameValid(valid);

      dispatch(updateRegister({ name: valueName + "Valid", value: valid }));
    }
  };
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
            Please enter your{" "}
            {valueName.charAt(0).toUpperCase() + valueName.substring(1)}
          </span>
        )}
      </div>
    </div>
  );
};
