import React, { useState } from "react";
import "./validatedselectinput.css";

interface ValidatedSelectInputProps {
  name: string;
  label: string;
  data?: string;
  attributes?: Record<string, string | number | boolean>;
  changeValue(e: React.ChangeEvent<HTMLSelectElement>): void;
  items: Map<string, string>;
}

export const ValidatedSelectInput: React.FC<ValidatedSelectInputProps> = ({
  name,
  label,
  data,
  attributes,
  changeValue,
  items,
}) => {
  const [value, setValue] = useState<string>(data ? data : "--");
  const [borderActive, setBorderActive] = useState<boolean>(false);

  const focus = (): void => {
    setBorderActive(!borderActive);
  };

  const update = (e: React.ChangeEvent<HTMLSelectElement>): void => {
    setValue(e.target.value);
    changeValue(e);
  };

  return (
    <div className="validated-select-input-container">
      <form className="">
        <label
          htmlFor={name}
          className="block text-sm pb-3 validated-select-input-label"
        >
          {label}
        </label>
        <select
          name={name}
          onFocus={focus}
          onBlur={focus}
          onChange={update}
          value={value}
          {...attributes}
          id={name}
          className="border-2 border-dashed text-sm flex w-full h-14 p-2.5 validated-select-input-select"
        >
          <option value="--">--</option>
          {Array.from(items).map(([key, itemValue]) => (
            <option key={key} value={key}>
              {itemValue}
            </option>
          ))}
        </select>
      </form>
    </div>
  );
};
