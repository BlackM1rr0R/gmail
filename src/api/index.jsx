import axios from "axios";
const API_URL="http://localhost:8080";
export const sendMessage = async (messageData) => {
    try {
      const response = await axios.post(`${API_URL}/send`, messageData, {
        withCredentials: true,
      });
      return response.data;
    } catch (error) {
      console.log("Mesaj gonderilmedi", error);
      throw error;
    }
  };