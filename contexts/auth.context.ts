import { TLogin, TSignUp } from "@/types/auth.types";
import { Role, TImage, TResponseData } from "@/types/global.types";
import { createContext } from "react";

 export type TUser = {
  full_name: string;
  email: string;
  profile_image: TImage;
  role: Role;
} & TResponseData;

type TAuthContext = {
  user: null | TUser;
  isLoading: boolean;
  logout: () => void;
  login: (data: TLogin) => void;
  SignUp: (data: TSignUp) => void;
};

//* context initial values
const initialValues: TAuthContext = {
  user: null,
  isLoading: false,
  logout: () => {},
  login: () => {},
  SignUp: () => {},
};

//* create context
export const AuthContext = createContext<TAuthContext>(initialValues);