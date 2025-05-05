// src/components/ComposeMessage.jsx
import React, { useState } from 'react';
import styles from './index.module.css';
import { sendMessage } from '../../api';

const ComposeMessage = () => {
  const [formData, setFormData] = useState({
    receiverEmail: '',
    subject: '',
    content: '',
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await sendMessage(formData);
      alert('Mesaj gönderildi.');
      setFormData({ receiverEmail: '', subject: '', content: '' });
    } catch (error) {
      alert('Mesaj gönderilemedi.');
      console.error(error);
    }
  };

  return (
    <div className={styles.composeBox}>
      <h2>Yeni Mesaj</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          name="receiverEmail"
          placeholder="Alıcı Email"
          value={formData.receiverEmail}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="subject"
          placeholder="Konu"
          value={formData.subject}
          onChange={handleChange}
          required
        />
        <textarea
          name="content"
          placeholder="Mesaj içeriği"
          rows="6"
          value={formData.content}
          onChange={handleChange}
          required
        />
        <button type="submit">Gönder</button>
      </form>
    </div>
  );
};

export default ComposeMessage;
