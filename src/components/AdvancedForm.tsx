import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { IAdvanceForm } from "../types";
import InputField from "./InputField";
import CheckField from "./CheckField";
import SelectField from "./SelectField";

const AdvancedForm: React.FC<{}> = () => {
  const formik = useFormik<IAdvanceForm>({
    initialValues: {
      username: "",
      jobType: "",
      acceptedTos: "",
    },
    validationSchema: Yup.object({
      username: Yup.string()
        .max(15, "Must be 15 characters or less")
        .min(3, "Must be at least 3 characters")
        .required("Required"),
      jobType: Yup.string()
        .oneOf(
          ["developer", "designer", "product", "other"],
          "Invalid Job Type"
        )
        .required("Job Type is a required field"),
      acceptedTos: Yup.boolean().required("Required"),
    }),
    onSubmit: (values, { setSubmitting }) => {
      alert(JSON.stringify(values, null, 2));
      setSubmitting(false);
    },
  });

  const isValid =
    !formik.isValid ||
    formik.isSubmitting ||
    (Object.keys(formik.touched).length === 0 &&
      formik.touched.constructor === Object);

  return (
    <form
      autoComplete="off"
      className="w-[420px] flex flex-col gap-5"
      onSubmit={formik.submitForm}
    >
      <InputField
        type="text"
        id="Username"
        name="username"
        placeholder="Enter your username"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.username}
        touched={formik.touched.username}
        error={formik.errors.username}
      />
      <SelectField
        id="Job Type"
        name="jobType"
        value={formik.values.jobType}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.errors.jobType}
        touched={formik.touched.jobType}
      />
      <div className="flex items-center gap-3">
        <CheckField
          type="checkbox"
          id="acceptedTos"
          name="acceptedTos"
          value={formik.values.acceptedTos}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          touched={formik.touched.acceptedTos}
          error={formik.errors.acceptedTos}
        />
      </div>
      <button
        className="h-12 w-full bg-blue-500 text-white rounded-lg disabled:hover:bg-blue-300"
        type="submit"
        disabled={isValid}
      >
        Submit
      </button>
      {isValid ? <h1 className="text-red-500">Please fill out all field</h1> : null}
    </form>
  );
};

export default AdvancedForm;
