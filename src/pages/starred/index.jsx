import React, { useEffect, useState } from "react";
import styles from './index.module.css'
import RefreshIcon from '../../assets/images/refresh.png'
import LeftArrow from '../../assets/images/leftarrow.png'
import RightArrow from '../../assets/images/rightarrow.png'
import ShapyIcon from '../../assets/images/shapeicon.png'
import Promotionsicon from '../../assets/images/promotionsicon.png'
import SocialIcon from '../../assets/images/socialicon.png'
import FavIcon from '../../assets/images/favicon.png'
import { getStarredMessages } from "../../api";
const Starred = () => {
    const [messages, setMessages] = useState([]);

    useEffect(() => {
        // Kullanıcı giriş yaptıysa, mesajları al
        const fetchMessages = async () => {
            try {
                const messagesData = await getStarredMessages();
                setMessages(messagesData); // Mesajları state'e kaydet
            } catch (error) {
                console.error("Mesajlar alınamadı:", error);
            }
        };

        fetchMessages(); // Mesajları al
    }, []); // Bileşen mount olduğunda çalışır
    
    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <div className={styles.leftHeader}>
                    <input type="checkbox" />
                    <img src={RefreshIcon} alt="" />
                </div>
                <div className={styles.rightHeader}>
                    <h2>{messages.length}-16 of {messages.length}</h2>
                    <img src={LeftArrow} alt="" />
                    <img src={RightArrow} alt="" />
                </div>
            </div>
            <div className={styles.selections}>
                <div className={styles.primary}>
                    <img src={ShapyIcon} alt="" />
                    <h2>Primary</h2>
                </div>
                <div className={styles.primary}>
                    <img src={Promotionsicon} alt="" />
                    <h2>Promotions</h2>
                </div>
                <div className={styles.primary}>
                    <img src={SocialIcon} alt="" />
                    <h2>Social</h2>
                </div>
            </div>
            <div className={styles.messages}>
                {messages.length > 0 ? (
                    messages.map((item) => (
                        <div className={styles.message} key={item.id}>
                            <input type="checkbox" />
                            <img src={FavIcon} alt="" />
                            <div className={styles.messageHeader}>
                                <h2>{item.senderEmail}</h2>
                                <h2>{item.subject}</h2>
                                <h3>{item.content}</h3>
                                <h3>{item.sentAt}</h3>
                            </div>
                        </div>
                    ))
                ) : (
                    <p>No messages found.</p> // Mesaj yoksa uyarı göster
                )}
            </div>
        </div>
    )
}
export default Starred;