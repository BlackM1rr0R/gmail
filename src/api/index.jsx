import axios from "axios";
const API_URL = "http://localhost:8080";
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

export const showGoogleReview = async (showReview) => {
  try {
    const response = await axios.get("https://featurable.com/api/v1/widgets/ddd9981e-eda0-4798-a92b-2dca78041fb2", showReview, {
      withCredentials: true,
    });
    return response.data;
  } catch (error) {
    console.log("Yorumlar Yukelemedi", error)
    throw error;
  }
}