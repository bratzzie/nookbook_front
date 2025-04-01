import React from "react";
import { ValidatedSelectInput } from "../../../../../../components/TextInput/ValidatedInput/ValidatedSelectInput";
import { AppDispatch } from "../../../../../../redux/Store";
import { useDispatch } from "react-redux";
import { updateRegister } from "../../../../../../redux/slices/RegisterSlice";

interface RegisterValidatedSelectInputProps {
  valueName: string;
  valueLabel: string;
  selected: string;
  allValues: Map<string, string>;
}
export const RegisterValidatedSelectInput: React.FC<
  RegisterValidatedSelectInputProps
> = ({ valueName, valueLabel, selected, allValues }) => {
  const dispatch: AppDispatch = useDispatch();

  const updateValue = (e: React.ChangeEvent<HTMLSelectElement>): void => {
    dispatch(updateRegister({ name: e.target.name, value: e.target.value }));
  };
  return (
    <div>
      <div>
        <ValidatedSelectInput
          name={valueName}
          label={valueLabel}
          changeValue={updateValue}
          data={selected}
          items={allValues}
        />
      </div>
    </div>
  );
};
