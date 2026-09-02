import * as yup from "yup";

export const productSchema = yup.object({
  name: yup.string().required().min(3),
  price: yup.number().required().min(0),
  description: yup.string().required().min(50),
  brand: yup.string().required("Brand is required"),
  category: yup.string().required("Category is required"),
  cover_image: yup.mixed<FileList>().required("Cover image is required"),
  images: yup.mixed<FileList>(),
  is_featured: yup.boolean(),
  new_arrival: yup.boolean(),
});