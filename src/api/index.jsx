import axios from "axios";

const API_URL = "http://localhost:8086";

// Kullanıcı girişi
export const login = async (email, password) => {
  try {
    const response = await axios.post(`${API_URL}/api/auth/signin`, {
      email: email,
      password: password,
    });

    // Token ve username localStorage'a kaydedilir
    localStorage.setItem("token", response.data.token);
    localStorage.setItem("username", response.data.username);

    return response.data;
  } catch (error) {
    console.error("Login failed", error);
    throw error;
  }
};

// Kayıt
export const register = async (username, email, password) => {
  try {
    const response = await axios.post(`${API_URL}/api/auth/signup`, {
      username: username,
      email: email,
      password: password,
    });
    return response.data;
  } catch (error) {
    console.error("Register failed", error);
    throw new Error(error.response ? error.response.data.message : "Kayıt işlemi sırasında bir hata oluştu.");
  }
};

// Mesaj gönderme (JWT token kullanarak)
export const sendMessage = async (messageData) => {
  const token = localStorage.getItem("token");

  try {
    const response = await axios.post(`${API_URL}/messages/send`, messageData, {
      headers: {
        Authorization: `Bearer ${token}`,  // Tokenı burada gönderiyoruz
      },
    });

    return response.data;
  } catch (error) {
    console.error("Mesaj gönderilemedi", error);
    throw error;
  }
};

// Kullanıcıya özel mesajları getir (JWT ile korunan endpoint)
export const getMessages = async () => {
  const token = localStorage.getItem("token");

  try {
    const response = await axios.get(`${API_URL}/messages/inbox`, {
      headers: {
        Authorization: `Bearer ${token}`,  // Tokenı burada gönderiyoruz
      },
    });

    return response.data;
  } catch (error) {
    console.error("Mesajlar alınamadı", error);
    throw error;
  }
};

export const getStarredMessages = async () => {
  const token = localStorage.getItem("token");

  try {
    const response = await axios.get(`${API_URL}/messages/starred`, {
      headers: {
        Authorization: `Bearer ${token}`,  // Tokenı burada gönderiyoruz
      },
    });

    return response.data;
  } catch (error) {
    console.error("Yıldızlı mesajlar alınamadı", error);
    throw error;
  }
}

export const starMessage = async (messageId) => {
  const token = localStorage.getItem("token");

  try {
    await axios.post(`${API_URL}/messages/star`, { messageId }, {
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    });
  } catch (error) {
    console.error("Mesaj yıldızlanamadı", error);
    throw error;
  }
};

export const getSentMessages = async () => {
  const token = localStorage.getItem("token");
  try {
    const response = await axios.get(`${API_URL}/messages/sent`, {
      headers: {
        Authorization: `Bearer ${token}`,  // Tokenı burada gönderiyoruz
      },
    });
    return response.data;

  }
  catch (error) {
    console.error("Gönderilen mesajlar alınamadı", error);
    throw error;
  }
}

export const getSnoozedMessages = async () => {
  const token = localStorage.getItem("token");

  try {
    const response = await axios.get(`${API_URL}/messages/snoozed`, {
      headers: {
        Authorization: `Bearer ${token}`,  // Tokenı burada gönderiyoruz
      },
    });

    return response.data;
  } catch (error) {
    console.error("Snoozed mesajlar alınamadı", error);
    throw error;
  }
}
export const snoozeMessage = async (messageId) => {
  const token = localStorage.getItem("token");

  try {
    await axios.post(`${API_URL}/messages/snooze`, { messageId }, {
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    });
  } catch (error) {
    console.error("Mesaj snooze edilemedi", error);
    throw error;
  }
}

export const getDrafts = async () => {
  const token = localStorage.getItem("token");

  try {
    const response = await axios.get(`${API_URL}/messages/drafts`, {
      headers: {
        Authorization: `Bearer ${token}`,  // Tokenı burada gönderiyoruz
      },
    });

    return response.data;
  } catch (error) {
    console.error("Taslak mesajlar alınamadı", error);
    throw error;
  }
}

export const saveAsDraft = async (message) => {
  const token = localStorage.getItem("token");
  try {
    const response = await axios.post(`${API_URL}/messages/draft`, message, {
      headers: {
        Authorization: `Bearer ${token}`,  // Tokenı burada gönderiyoruz
      },
    });
    return response.data;
  }
  catch (error) {
    console.error("Taslak mesaj kaydedilemedi", error);
    throw error;
  }
}

export const deleteMesssage = async (messageId) => {
  const token = localStorage.getItem("token");

  try {
    await axios.delete(`${API_URL}/messages/delete`, {
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
      data: { messageId }, // messageId'yi burada gönderiyoruz
    });
  }
  catch (error) {
    console.error("Mesaj silinemedi", error);
    throw error;
  }
}
export const getTrashMessages = async () => {
  const token = localStorage.getItem("token");
  try {
    const response = await axios.get(`${API_URL}/messages/trash`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    // Gelen veriyi kontrol et
    if (Array.isArray(response.data)) {
      return response.data;
    } else {
      console.warn("Beklenmeyen veri formatı:", response.data);
      return []; // Hatalıysa boş dizi döndür
    }
  } catch (error) {
    console.error("Çöp kutusu mesajları alınamadı", error);
    return []; // Hata durumunda da boş dizi döndür
  }
};

