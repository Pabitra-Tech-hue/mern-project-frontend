import api from ".";

export const getAllCategories = async () => {
  try {
    const response = await api.get("/categories");

    return response.data;
  } catch (error: any) {
    throw error?.response?.data;
  }
};

export const createCategory = async (formData: FormData) => {
  try {
    const response = await api.post(
    "/categories",
    formData,
    {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    }
    );

    return response.data;
  } catch (error: any) {
    throw error?.response?.data;
  }
};

export const deleteCategory = async (id: string) => {
  try {
    const response = await api.delete(
      `/categories/${id}`
    );

    return response.data;
  } catch (error: any) {
    throw error?.response?.data;
  }
};