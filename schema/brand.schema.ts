import * as yup from "yup";

export const brandSchema = yup.object({
  name: yup
    .string()
    .required("Brand name is required"),

  description: yup
    .string()
    .required("Description is required"),

  logo: yup
    .mixed<FileList>()
    .required("Brand logo is required"),
});