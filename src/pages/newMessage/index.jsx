// src/components/ComposeMessage.jsx
import React, { useState } from 'react';
import styles from './index.module.css';
import { sendMessage, saveAsDraft } from '../../api'; // <- saveDraft ekledik

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

  const handleSaveDraft = async () => {
    try {
      await saveAsDraft(formData);
      alert('Taslak olarak kaydedildi.');
      setFormData({ receiverEmail: '', subject: '', content: '' });
    } catch (error) {
      alert('Taslak kaydedilemedi.');
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
        />
        <input
          type="text"
          name="subject"
          placeholder="Konu"
          value={formData.subject}
          onChange={handleChange}
        />
        <textarea
          name="content"
          placeholder="Mesaj içeriği"
          rows="6"
          value={formData.content}
          onChange={handleChange}
        />
        <div className={styles.buttons}>
          <button type="submit">Gönder</button>
          <button type="button" onClick={handleSaveDraft}>Taslağa Kaydet</button>
        </div>
      </form>
    </div>
  );
};

export default ComposeMessage;
