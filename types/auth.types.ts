import { loginSchema, SignUpSchema } from "@/schema/auth.schema";
import * as yup from "yup";

export type TLogin = yup.InferType<typeof loginSchema>;

export type TSignUp = yup.InferType<typeof SignUpSchema>;
