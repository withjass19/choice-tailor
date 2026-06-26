import * as yup from "yup";

export const loginSchema = yup.object({
  email: yup
    .string()
    .trim()
    .email("Enter valid email address")
    .required("Email is required"),

  password: yup
    .string()
    .required("Password is required"),
});