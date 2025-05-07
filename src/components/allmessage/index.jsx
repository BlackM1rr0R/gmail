import React, { useEffect, useState } from "react";
import styles from './index.module.css';

import RefreshIcon from '../../assets/images/refresh.png';
import LeftArrow from '../../assets/images/leftarrow.png';
import RightArrow from '../../assets/images/rightarrow.png';
import ShapyIcon from '../../assets/images/shapeicon.png';
import Promotionsicon from '../../assets/images/promotionsicon.png';
import SocialIcon from '../../assets/images/socialicon.png';
import FavIcon from '../../assets/images/favicon.png';

import { getMessages, snoozeMessage, starMessage, getDrafts } from "../../api";

const AllMessage = () => {
    const [messages, setMessages] = useState([]);
    const [drafts, setDrafts] = useState([]);
    const [tab, setTab] = useState("inbox"); // inbox or drafts

    useEffect(() => {
        const fetchData = async () => {
            try {
                if (tab === "inbox") {
                    const messagesData = await getMessages();
                    setMessages(messagesData);
                } else if (tab === "drafts") {
                    const draftsData = await getDrafts();
                    setDrafts(draftsData);
                }
            } catch (error) {
                console.error("Mesajlar alınamadı:", error);
            }
        };

        fetchData();
    }, [tab]);

    const handleStar = async (id) => {
        try {
            await starMessage(id);
            setMessages((prevMessages) =>
                prevMessages.map((message) =>
                    message.id === id ? { ...message, starred: !message.starred } : message
                )
            );
        } catch (error) {
            console.error("Mesaj yıldızlanamadı:", error);
        }
    };

    const handleSnooze = async (id) => {
        try {
            await snoozeMessage(id);
            alert("Mesaj ertelemeye alındı.");
        } catch (error) {
            console.error("Mesaj ertelemeye alınamadı:", error);
        }
    };

    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <div className={styles.leftHeader}>
                    <input type="checkbox" />
                    <img src={RefreshIcon} alt="Refresh" />
                </div>
                <div className={styles.rightHeader}>
                    <h2>{tab === "inbox" ? `${messages.length}-16 of ${messages.length}` : `Drafts: ${drafts.length}`}</h2>
                    <img src={LeftArrow} alt="Previous" />
                    <img src={RightArrow} alt="Next" />
                </div>
            </div>

            <div className={styles.selections}>
                <div className={styles.primary} onClick={() => setTab("inbox")}>
                    <img src={ShapyIcon} alt="Primary" />
                    <h2>Inbox</h2>
                </div>
                <div className={styles.primary} onClick={() => setTab("drafts")}>
                    <img src={Promotionsicon} alt="Drafts" />
                    <h2>Drafts</h2>
                </div>
                <div className={styles.primary}>
                    <img src={SocialIcon} alt="Social" />
                    <h2>Social</h2>
                </div>
            </div>

            <div className={styles.messages}>
                {tab === "inbox" && messages.length > 0 ? (
                    messages.map((item) => (
                        <div className={styles.message} key={item.id}>
                            <input type="checkbox" />
                            <span
                                onClick={() => handleStar(item.id)}
                                style={{ cursor: 'pointer', fontSize: '24px' }}
                            >
                                {item.starred ? '⭐' : '☆'}
                            </span>
                            <img
                                alt="snooze"
                                onClick={() => handleSnooze(item.id)}
                                src={FavIcon}
                                style={{ cursor: 'pointer' }}
                            />
                            <div className={styles.messageHeader}>
                                <h2>{item.senderEmail}</h2>
                                <h2>{item.subject}</h2>
                                <h3>{item.content}</h3>
                                <h3>{item.sentAt}</h3>
                            </div>
                        </div>
                    ))
                ) : tab === "drafts" && drafts.length > 0 ? (
                    drafts.map((item) => (
                        <div className={styles.message} key={item.id}>
                            <div className={styles.messageHeader}>
                                <h2>{item.receiverEmail || "Taslak (Alıcı yok)"}</h2>
                                <h2>{item.subject || "(Başlık yok)"}</h2>
                                <h3>{item.content || "(İçerik boş)"}</h3>
                                <h3>{item.createdAt || ""}</h3>
                            </div>
                        </div>
                    ))
                ) : (
                    <p>No messages found.</p>
                )}
            </div>
        </div>
    );
};

export default AllMessage;
