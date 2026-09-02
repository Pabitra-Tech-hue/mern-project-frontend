import api from ".";

export const getAllproducts = async () => {
  try {
    const response = await api.get("/products");
    return response.data;
  } catch (error: any) {
    throw error?.response?.data;
  }
};

export const createProduct = async (data: FormData) => {
  try {
    const response = await api.post("/products", data);
    return response.data;
  } catch (error: any) {
    throw error?.response?.data;
  }
};

export const deleteProduct = async (id: string) => {
  try {
    const response = await api.delete(`/products/${id}`);
    return response.data;
  } catch (error: any) {
    throw error?.response?.data;
  }
};