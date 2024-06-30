import React from "react";

interface RadioInputProps {
  name: string;
  register: any;
  value: string;
  label?: string;
}

const RadioInput: React.FC<RadioInputProps> = ({
  name,
  register,
  value,
  label,
}) => {
  return (
    <label htmlFor={`field-${value}`} className="mr-4">
      <input
        {...register(name)}
        type="radio"
        value={value}
        id={`field-${value}`}
        className="mr-2"
      />
      {label || ""}
    </label>
  );
};

export default RadioInput;
