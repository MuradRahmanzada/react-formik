import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { IBasicForm } from "../types";
import InputField from "./InputField";

const App: React.FC<{}> = () => {
  const formik = useFormik<IBasicForm>({
    initialValues: {
      email: "",
      age: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email("Email must be a valid email")
        .required("Email is a required field"),
      age: Yup.number()
        .required("Please supply your age")
        .min(18, "You must be at least 18 years")
        .max(60, "You must be at most 60 years"),
      password: Yup.string()
        .required("Please enter your password")
        .matches(
          /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
          "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"
        ),
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
      className="w-[420px] flex flex-col gap-5"
      onSubmit={formik.handleSubmit}
      autoComplete="off"
    >
      <InputField
        type="email"
        id="Email"
        name="email"
        placeholder="Enter your email"
        value={formik.values.email}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        touched={formik.touched.email}
        error={formik.errors.email}
      />
      <InputField
        type="number"
        id="Age"
        name="age"
        placeholder="Enter your age"
        onChange={formik.handleChange}
        value={formik.values.age}
        onBlur={formik.handleBlur}
        touched={formik.touched.age}
        error={formik.errors.age}
      />
      <InputField
        type="password"
        id="Password"
        placeholder="Enter your password"
        name="password"
        value={formik.values.password}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        touched={formik.touched.password}
        error={formik.errors.password}
      />
      <button
        type="submit"
        className="w-full bg-blue-500 text-white h-12 rounded-lg disabled:hover:bg-blue-300"
        disabled={isValid}
      >
        Submit
      </button>
      {isValid ? <h1 className="text-red-500">Please fill out all field</h1> : null}
    </form>
  );
};

export default App;
