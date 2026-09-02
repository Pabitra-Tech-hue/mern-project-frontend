import api from ".";

// Get wishlist
export const getWishlist = async () => {
  try {
    const response = await api.get("/wishlist");
    return response.data;
  } catch (error: any) {
    throw error?.response?.data;
  }
};

// Add product to wishlist
export const addToWishlist = async (productId: string) => {
  try {
    const response = await api.post(`/wishlist/${productId}`);
    return response.data;
  } catch (error: any) {
    throw error?.response?.data;
  }
};

// Remove product from wishlist
export const removeFromWishlist = async (productId: string) => {
  try {
    const response = await api.delete(`/wishlist/${productId}`);
    return response.data;
  } catch (error: any) {
    throw error?.response?.data;
  }
};