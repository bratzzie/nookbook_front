import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  incremenetStep,
  updateRegister,
} from "../../../../../../redux/slices/RegisterSlice";
import { AppDispatch, RootState } from "../../../../../../redux/Store";
import { RegisterNextButton } from "../../registernextbutton/RegisterNextButton";
import "../registersteps.css";
import { RegisterValidatedTextInputName } from "../../registermodal/registertextinput/RegisterValidatedTextInputName";
import { RegisterValidatedSelectInput } from "../../registermodal/registerselectinput/RegisterValidatedSelectInput";
import "../../../../../../assets/global.css";
import { validateName } from "../../../../../../services/Validators";

export const RegisterStepTwo: React.FC = () => {
  const state = useSelector((state: RootState) => state.register);
  const dispatch: AppDispatch = useDispatch();

  const [buttonActive, setButtonActive] = useState<boolean>(true);

  const [islandNameValid, setIslandNameValid] = useState<boolean>(true);
  const [creatorIdValid, setCreatorIdValid] = useState<boolean>(true);

  const nextPage = () => {
    dispatch(incremenetStep());
  };

  useEffect(() => {
    if (state.nameValid && state.usernameValid && state.emailValid) {
      setButtonActive(true);
    } else setButtonActive(false);
  }, [state]);

  const hemisphereValues: Map<string, string> = new Map<string, string>([
    ["north", "Northern"],
    ["south", "Southern"],
  ]);

  const fruitValues: Map<string, string> = new Map<string, string>([
    ["peaches", "Peaches"],
    ["apples", "Apples"],
    ["cherries", " Cherries"],
    ["oranges", "Oranges"],
    ["pears", "Pears"],
  ]);

  const updateValue = (e: React.ChangeEvent<HTMLInputElement>): void => {
    if (e.target.name === "islandName") {
      dispatch(updateRegister({ name: e.target.name, value: e.target.value }));

      let valid = validateName(e.target.value, 10);

      setIslandNameValid(valid);

      dispatch(updateRegister({ name: e.target.name + "Valid", value: valid }));
    } else if (e.target.name === "creatorId") {
      dispatch(updateRegister({ name: e.target.name, value: e.target.value }));

      let valid = validateName(e.target.value, 12);

      setCreatorIdValid(valid);

      dispatch(updateRegister({ name: e.target.name + "Valid", value: valid }));
    }
  };

  return (
    <div className="reg-step-container">
      <div className="reg-step-content">
        <div className="row">
          <img
            className="reg-step-image"
            src={`${process.env.PUBLIC_URL}/assets/images/package.png`}
            alt="placeholder"
          />
          <h1 className="reg-step-title">
            Do you want to share a little bit more about yourself?
          </h1>
        </div>
        <RegisterValidatedTextInputName
          label="My island name is"
          valueName="islandName"
          value={state.islandName || ""}
          maxLength={10}
          obligatory={false}
          updateValue={updateValue}
          nameValid={islandNameValid}
        />
        <div className="row">
          <RegisterValidatedSelectInput
            valueName="hemisphere"
            valueLabel="My island is located in..."
            selected={state.hemisphere || "UNDEFINED"}
            allValues={hemisphereValues}
          />
          <RegisterValidatedSelectInput
            valueName="nativeFruit"
            valueLabel="My first fruits were..."
            selected={state.nativeFruit || "UNDEFINED"}
            allValues={fruitValues}
          />
        </div>

        <RegisterValidatedTextInputName
          label="My Creator Id is"
          valueName="creatorId"
          value={state.creatorId || ""}
          maxLength={12}
          obligatory={false}
          updateValue={updateValue}
          nameValid={creatorIdValid}
        />
      </div>
      <RegisterNextButton active={true} color="success" onClick={nextPage}>
        Next!
      </RegisterNextButton>
    </div>
  );
};
