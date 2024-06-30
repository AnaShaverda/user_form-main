import React from "react";

interface SubmitButtonProps {
  label: string;
  className?: string;
}

const SubmitButton: React.FC<SubmitButtonProps> = ({ label, className }) => {
  return (
    <input
      type="submit"
      value={label}
      className={className || "bg-green-600 text-white p-2 rounded"}
    />
  );
};

export default SubmitButton;
