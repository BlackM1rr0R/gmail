import React, { useEffect, useState } from "react";
import styles from './index.module.css';
import LeftList from "../../components/leftlist";
import RefreshIcon from '../../assets/images/refresh.png';
import LeftArrow from '../../assets/images/leftarrow.png';
import RightArrow from '../../assets/images/rightarrow.png';
import { getDrafts } from "../../api";

const DraftMessages = () => {
    const [drafts, setDrafts] = useState([]);

    useEffect(() => {
        const fetchDrafts = async () => {
            try {
                const data = await getDrafts();
                setDrafts(data);
            } catch (error) {
                console.error("Taslak mesajlar alınamadı:", error);
            }
        };

        fetchDrafts();
    }, []);

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
                        <h2>{drafts.length}-16 of {drafts.length}</h2>
                        <img src={LeftArrow} alt="left" />
                        <img src={RightArrow} alt="right" />
                    </div>
                </div>

                <div className={styles.messages}>
                    {drafts.length > 0 ? (
                        drafts.map((item) => (
                            <div className={styles.message} key={item.id}>
                                <input type="checkbox" />
                                <div className={styles.messageHeader}>
                                    <h2>{item.senderEmail}</h2>
                                    <h2>{item.receiverEmail}</h2>
                                    <h2>{item.subject}</h2>
                                    <h3>{item.content}</h3>
                                    <h3>{item.sentAt}</h3>
                                </div>
                            </div>
                        ))
                    ) : (
                        <p>Hiç taslak mesaj bulunamadı.</p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default DraftMessages;
