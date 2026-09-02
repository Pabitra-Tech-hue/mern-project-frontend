import * as yup from "yup";
import { productSchema } from "@/schema/product.schema";

export type TProduct =
  yup.InferType<typeof productSchema>;