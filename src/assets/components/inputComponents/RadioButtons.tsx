import React from "react";
import RadioInput from "./RadioInput";
interface IRadioConfig {
  value: string;
  label: string;
}

interface RadioButtonsProps {
  config: IRadioConfig[];
  register: any;
  error?: string;
  name: string;
}

const RadioButtons: React.FC<RadioButtonsProps> = ({
  config,
  register,
  error = "",
  name,
}) => {
  return (
    <div className="flex flex-col">
      <div className="flex">
        {config.map((radioConfig) => (
          <RadioInput
            key={radioConfig.value}
            name={name}
            register={register}
            value={radioConfig.value}
            label={radioConfig.label}
          />
        ))}
      </div>
      {error && <div className="text-xs text-red-600">{error}</div>}
    </div>
  );
};

export default RadioButtons;
