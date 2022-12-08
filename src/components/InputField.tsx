import React from "react";

interface InputProps {
  type: string;
  id: string;
  name: string;
  placeholder?: string;
  value: string | number | undefined;
  error: string | undefined;
  touched: boolean | undefined;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur: (e: React.FocusEvent<HTMLInputElement>) => void;
}

const InputField: React.FC<InputProps> = ({
  type,
  id,
  name,
  placeholder,
  value,
  onChange,
  onBlur,
  error,
  touched,
}) => {
  return (
    <>
      <label htmlFor={name} className="flex flex-col text-white text-xl">
        {id}
        <input
          type={type}
          id={id}
          name={name}
          placeholder={placeholder}
          className="h-12 w-full rounded-lg text-base mt-1 px-2 shadow-md bg-gray-700 border border-gray-300 outline-red-500 text-white placeholder:font-medium"
          onChange={onChange}
          value={value}
          onBlur={onBlur}
        />
      </label>
      {touched && error && (
        <span className="text-red-500 text-xs">{error}</span>
      )}
    </>
  );
};

export default InputField;
