import { TLogin, TSignUp } from "@/types/auth.types";

import api from ".";

// * Login
export const login = async (data: TLogin) => {
  try {
    const response = await api.post("/auth/login", data);

    return response.data;
  } catch (error: any) {
    throw error?.response?.data;
  }
};

// * Logout
export const logoutUser = async () => {
  try {
    const response = await api.delete("/auth/logout");

    return response.data;
  } catch (error: any) {
    throw error?.response?.data;
  }
};

// * Signup
export const signup = async (data: TSignUp) => {
  try {
    const response = await api.post("/auth/signup", data);

    return response.data;
  } catch (error: any) {
    console.log("Signup API Error:", error?.response?.data);

    throw error?.response?.data;
  }
};

// * Get profile
export const getProfile = async () => {
  console.log("🚀 GET PROFILE API CALLED");

  try {
    const response = await api.get("/auth/profile");

    console.log("✅ GET PROFILE RESPONSE:", response);
    console.log("✅ GET PROFILE DATA:", response.data);

    return response.data;
  } catch (error: any) {
    console.log("❌ GET PROFILE ERROR:", error);
    console.log("❌ ERROR RESPONSE:", error?.response);
    console.log("❌ ERROR DATA:", error?.response?.data);

    throw error?.response?.data;
  }
};



  


