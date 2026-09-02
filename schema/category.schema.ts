import * as yup from "yup";

export const categorySchema = yup.object({
  name: yup
    .string()
    .required("Category name is required")
    .min(3, "Category name must be at least 3 characters"),

  description: yup
    .string()
    .required("Description is required")
    .min(
      10,
      "Description must be at least 10 characters"
    ),

  image: yup
    .mixed<FileList>()
    .required("Category image is required"),
});