import React from "react";

interface SelectProps {
  id: string;
  name: string;
  value: string | number;
  error: string | undefined;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  onBlur: (e: React.FocusEvent<HTMLSelectElement, Element>) => void;
  touched: boolean | undefined;
}

const SelectField: React.FC<SelectProps> = ({
  name,
  id,
  value,
  onChange,
  onBlur,
  touched,
  error,
}) => {
  return (
    <>
      <label htmlFor="jobType" className="flex flex-col text-white text-xl">
        {id}
        <select
          name={name}
          id={id}
          className="h-12 w-full rounded-lg text-base mt-1 px-2 shadow-md bg-gray-700 border border-gray-300 outline-red-500 text-white placeholder:font-medium"
          value={value}
          onChange={onChange}
          onBlur={onBlur}
        >
          <option value="">Please select a job type </option>
          <option value="developer">Developer</option>
          <option value="designer">Designer</option>
          <option value="product">Product Manager</option>
          <option value="other">Other</option>
        </select>
      </label>
      {touched && error && (
        <span className="text-red-500 text-xs">{error}</span>
      )}
    </>
  );
};

export default SelectField;
