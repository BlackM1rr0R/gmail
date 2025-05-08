// src/components/TrashMessages.jsx
import React, { useEffect, useState } from 'react';
import { getTrashMessages } from '../../api'; // API fonksiyonun
import styles from './index.module.css'; // Eğer aynı stil dosyasını kullanıyorsan

const TrashMessages = () => {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTrashMessages = async () => {
      try {
        const data = await getTrashMessages();
        setMessages(data);
      } catch (error) {
        console.error('Çöp kutusu mesajları alınamadı', error);
      } finally {
        setLoading(false);
      }
    };

    fetchTrashMessages();
  }, []);

  if (loading) return <p>Yükleniyor...</p>;

  return (
<div className={styles.trashWrapper}>
  <div className={styles.trashContainer}>
    <div className={styles.trashHeader}>
      <h1>Çöp Kutusu</h1>
    </div>

    <div className={styles.trashMessages}>
      {messages.map((msg) => (
        <div key={msg.id} className={styles.trashMessageCard}>
          <div className={styles.trashMessageInfo}>
            <h2>{msg.senderEmail}</h2>
            <h3>{msg.subject}</h3>
            <p>{msg.content}</p>
            <p>{new Date(msg.createdAt).toLocaleString()}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
</div>
  );
};

export default TrashMessages;
