import React, { useEffect, useState } from "react";
import styles from './index.module.css';
import RefreshIcon from '../../assets/images/refresh.png';
import LeftArrow from '../../assets/images/leftarrow.png';
import RightArrow from '../../assets/images/rightarrow.png';
import ShapyIcon from '../../assets/images/shapeicon.png';
import Promotionsicon from '../../assets/images/promotionsicon.png';
import SocialIcon from '../../assets/images/socialicon.png';

import { getStarredMessages, starMessage } from "../../api";
import LeftList from "../../components/leftlist";

const Starred = () => {
    const [messages, setMessages] = useState([]);

    useEffect(() => {
        const fetchMessages = async () => {
            try {
                const messagesData = await getStarredMessages();
                setMessages(messagesData);
            } catch (error) {
                console.error("Mesajlar alınamadı:", error);
            }
        };

        fetchMessages();
    }, []);

    const handleToggleStar = async (id) => {
        try {
            await starMessage(id); // Favoriden çıkar ya da ekle
            const updatedMessages = await getStarredMessages(); // Güncellenmiş listeyi al
            setMessages(updatedMessages);
        } catch (error) {
            console.error("Mesaj yıldızlanamadı:", error);
        }
    };

    return (
        <div className={styles.wrapper}>
            <LeftList />
            <div className={styles.container}>
                <div className={styles.header}>
                    <div className={styles.leftHeader}>
                        <input type="checkbox" />
                        <img src={RefreshIcon} alt="refresh" />
                    </div>
                    <div className={styles.rightHeader}>
                        <h2>{messages.length}-16 of {messages.length}</h2>
                        <img src={LeftArrow} alt="left" />
                        <img src={RightArrow} alt="right" />
                    </div>
                </div>

                <div className={styles.selections}>
                    <div className={styles.primary}>
                        <img src={ShapyIcon} alt="primary" />
                        <h2>Primary</h2>
                    </div>
                    <div className={styles.primary}>
                        <img src={Promotionsicon} alt="promotions" />
                        <h2>Promotions</h2>
                    </div>
                    <div className={styles.primary}>
                        <img src={SocialIcon} alt="social" />
                        <h2>Social</h2>
                    </div>
                </div>

                <div className={styles.messages}>
                    {messages.length > 0 ? (
                        messages.map((item) => (
                            <div className={styles.message} key={item.id}>
                                <input type="checkbox" />
                                <span
                                    className={styles.starIcon}
                                    style={{ cursor: 'pointer', fontSize: '20px', marginRight: '8px' }}
                                    onClick={() => handleToggleStar(item.id)}
                                >
                                    {item.starred ? '⭐' : '☆'}
                                </span>
                                <div className={styles.messageHeader}>
                                    <h2>{item.senderEmail}</h2>
                                    <h2>{item.subject}</h2>
                                    <h3>{item.content}</h3>
                                    <h3>{item.sentAt}</h3>
                                </div>
                            </div>
                        ))
                    ) : (
                        <p>No messages found.</p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Starred;
