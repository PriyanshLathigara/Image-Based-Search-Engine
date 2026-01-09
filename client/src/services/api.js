// API Service - Axios/fetch configuration for backend API calls
import axios from "axios";

/**
 * Axios instance
 * Keeps API configuration in one place
 */
const api = axios.create({
  baseURL: "http://localhost:5000/api",
});

/**
 * Search products using uploaded image
 * @param {File} imageFile
 * @returns {Promise<Array>}
 */
export const searchByImage = async (imageFile) => {
  const formData = new FormData();
  formData.append("image", imageFile);

  const response = await api.post("/search", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });

  return response.data;
};

export default api;
