import * as yup from "yup";

// * Login schema
export const loginSchema = yup.object({
  email: yup
    .string()
    .email("invalid email format")
    .required("email is required"),

  password: yup
    .string()
    .required("password is required"),
});

// * Signup schema
export const SignUpSchema = yup.object({
  name: yup
    .string()
    .min(3, "at least 3 characters required")
    .required("name is required"),

  email: yup
    .string()
    .email("invalid email format")
    .required("email is required"),

  password: yup
    .string()
    .min(6, "password must contain 6 characters")
    .required("password is required"),

  c_password: yup
    .string()
    .required("confirm password is required")
    .oneOf([yup.ref("password")], "password must match"),
});