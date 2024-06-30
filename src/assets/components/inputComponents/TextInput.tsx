import React from "react";
import styles from "./TextInput.module.css";

interface TextInputProps {
  name: string;
  placeholder?: string;
  register: any;
  error: string;
  label: string;
}

const TextInput: React.FC<TextInputProps> = ({
  name,
  placeholder,
  register,
  error,
  label,
}) => {
  return (
    <div className="relative p-2 pb-4 flex flex-col">
      <label htmlFor={name}>{label}</label>
      <input
        id={name}
        defaultValue=""
        {...register(name)}
        placeholder={placeholder || ""}
        className="border rounded p-2"
      />
      {error && (
        <div className={`${styles.errorText} absolute bottom-0`}>{error}</div>
      )}
    </div>
  );
};

export default TextInput;
