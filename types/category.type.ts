import * as yup from "yup";
import { categorySchema } from "@/schema/category.schema";

export type TCategory =
  yup.InferType<typeof categorySchema>;