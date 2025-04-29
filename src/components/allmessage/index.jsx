import React from "react";
import styles from './index.module.css'
import RefreshIcon from '../../assets/images/refresh.png'
import LeftArrow from '../../assets/images/leftarrow.png'
import RightArrow from '../../assets/images/rightarrow.png'
import ShapyIcon from '../../assets/images/shapeicon.png'
import Promotionsicon from '../../assets/images/promotionsicon.png'
import SocialIcon from '../../assets/images/socialicon.png'
import FavIcon from '../../assets/images/favicon.png'
const AllMessage = () => {
    const data = [
        {
            id: 1,
            title: "Acme Inc.",
            header: "Our latest product is here!"
        },
        {
            id: 2,
            title: "Acme Inc.",
            header: "Our latest product is here!"
        },
        {
            id: 3,
            title: "Acme Inc.",
            header: "Our latest product is here!"
        },
        {
            id: 4,
            title: "Acme Inc.",
            header: "Our latest product is here!"
        },
        {
            id: 5,
            title: "Acme Inc.",
            header: "Our latest product is here!"
        },
    ]
    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <div className={styles.leftHeader}>
                    <input type="checkbox" />
                    <img src={RefreshIcon} alt="" />
                </div>
                <div className={styles.rightHeader}>
                    <h2>1-16 of 16</h2>
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
                {data.map((item) => (
                    <div className={styles.message} key={item.id}>
                        <input type="checkbox" />
                        <img src={FavIcon} alt="" />
                        <div className={styles.messageHeader}>
                            <h2>{item.title}</h2>
                            <h3>{item.header}</h3>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
export default AllMessage;