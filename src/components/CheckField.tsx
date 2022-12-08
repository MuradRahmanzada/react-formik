import React from "react";

interface InputProps {
  type: string;
  id: string;
  name: string;
  placeholder?: string;
  value: string | number | undefined;
  touched: boolean | undefined;
  error: string | undefined;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
}

const CheckField: React.FC<InputProps> = ({type, id, name, value, onChange, touched, error, onBlur}) => {
  return (
    <>
      <input
        type={type}
        id={id}
        name={name}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
      />
      <label htmlFor="acceptedTos" className="text-white">
        I accept the terms of service
      </label>
      {touched && error && (
        <span className="text-red-500 text-xs">{error}</span>
      )}
    </>
  );
};

export default CheckField;
