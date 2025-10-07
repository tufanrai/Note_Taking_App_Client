import * as yup from "yup";

// log schema
export const LoginSchema = yup.object({
  email: yup
    .string()
    .email("please enter a valid email")
    .required("please enter your email"),
  password: yup.string().required("please enter your password"),
});

// register schema
export const RegisterSchema = yup.object({
  full_name: yup.string().required("please enter your full name"),
  birth: yup.string().required("please enter your DOB"),
  email: yup
    .string()
    .email("please enter a valid email")
    .required("please enter your email"),
  password: yup
    .string()
    .required("please enter your password")
    .matches(/\d/, "your password must have at least one digits"),
  confirmPassword: yup
    .string()
    .required("please re-enter your password")
    .oneOf(
      [yup.ref("password")],
      "your re-entered password did not match the password"
    ),
});
