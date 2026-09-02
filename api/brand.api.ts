import api from ".";

export const getAllBrands = async () => {
  try {
    const response = await api.get("/brands");

    return response.data;
  } catch (error: any) {
    throw error?.response?.data;
  }
};

export const createBrand = async (formData: FormData) => {
  try {
    const response = await api.post("/brands", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });

    return response.data;
  } catch (error: any) {
    throw error?.response?.data;
  }
};

export const deleteBrand = async (id: string) => {
  try {
    const response = await api.delete(`/brands/${id}`);

    return response.data;
  } catch (error: any) {
    throw error?.response?.data;
  }
};