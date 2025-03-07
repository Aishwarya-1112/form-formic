import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";

const RegistrationForm = () => {
  const validationSchema = Yup.object({
    username: Yup.string()
      .min(3, "Username must be at least 3 characters")
      .max(20, "Username must be less than 20 characters")
      .required(),
    email: Yup.string().email("Invalid email address").required(),
    contact: Yup.string().min(10, "Enter contact number").required(),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required(),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), null], "Passwords must match")
      .required(),
  });

  const initialValues = {
    username: "",
    email: "",
    contact: "",
    password: "",
    confirmPassword: "",
  };

  const handleSubmit = (values) => {
    console.log(values);
  };

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <div className="form-container">
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ isSubmitting }) => (
            <Form>
              <div>
                <label htmlFor="username">Username</label>
                <Field
                  type="text"
                  id="username"
                  name="username"
                  placeholder="Enter your username"
                />
                <ErrorMessage
                  name="username"
                  component="div"
                  className="error-message"
                />
              </div>

              <div>
                <label htmlFor="email">Email</label>
                <Field
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Enter your email"
                />
                <ErrorMessage
                  name="email"
                  component="div"
                  className="error-message"
                />
              </div>
              <div>
                <label htmlFor="contact">Contact</label>
                <Field
                  type="contact"
                  id="contact"
                  name="contact"
                  placeholder="Enter your email"
                />
                <ErrorMessage
                  name="contact"
                  component="div"
                  className="error-message"
                />
              </div>

              <div>
                <label htmlFor="password">Password</label>
                <Field
                  type="password"
                  id="password"
                  name="password"
                  placeholder="Enter your password"
                />
                <ErrorMessage
                  name="password"
                  component="div"
                  className="error-message"
                />
              </div>

              <div>
                <label htmlFor="confirmPassword">Confirm Password</label>
                <Field
                  type="password"
                  id="confirmPassword"
                  name="confirmPassword"
                  placeholder="Confirm your password"
                />
                <ErrorMessage
                  name="confirmPassword"
                  component="div"
                  className="error-message"
                />
              </div>

              <div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  style={{
                    background: "green",
                    color: "white",
                    border: "none",
                    borderRadius: "3px",
                  }}
                >
                  Register
                </button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default RegistrationForm;
