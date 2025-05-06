import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { getDraftMessages } from '../../api';

const DraftMessages = () => {
  const [drafts, setDrafts] = useState([]);

  useEffect(() => {
    const fetchDrafts = async () => {
      try {
       const response=await getDraftMessages()
        setDrafts(response.data);
      } catch (error) {
        console.error('Taslak mesajlar alınamadı:', error);
      }
    };

    fetchDrafts();
  }, []);

  return (
    <div>
      <h2>Draft Messages</h2>
      {drafts.length === 0 ? (
        <p>Hiç taslak mesaj yok.</p>
      ) : (
        <ul>
          {drafts.map((msg) => (
            <li key={msg.id}>
              <strong>To:</strong> {msg.receiverEmail || '---'} <br />
              <strong>Message:</strong> {msg.content}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default DraftMessages;
