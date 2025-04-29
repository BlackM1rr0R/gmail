import React from "react";
import styles from './index.module.css'
import Wrapper from '../UI/wrapper'
import VectorIcon from '../../assets/images/vectoricon.png'
import ShapeIcon from '../../assets/images/shapeicon.png'
import FavIcon from '../../assets/images/favicon.png'
import ClockIcon from '../../assets/images/clockicon.png'
import SentIcon from '../../assets/images/sendicon.png'
import DraftsIcon from '../../assets/images/draftsicon.png'
const LeftList = () => {
    const data = [
        {
            id: 1,
            title: 'Inbox',
            icon: `${ShapeIcon}`
        },
        {
            id: 2,
            title: 'Starred',
            icon: `${FavIcon}`
        },
        {
            id: 3,
            title: 'Snoozed',
            icon: `${ClockIcon}`
        },
        {
            id: 4,
            title: 'Sent',
            icon: `${SentIcon}`
        },
        {
            id: 5,
            title: 'Drafts',
            icon: `${DraftsIcon}`
        }
    ]
    return (
        <div className={styles.container}>
         
                <div className={styles.controlContainer}>
                    <div className={styles.newTask}>
                        <img src={VectorIcon} alt="" />
                        <h2>Compose</h2>
                    </div>
                    <ul className={styles.controlUl}>
                        {data.map((item) => (
                            <div key={item.id} className={styles.list}>
                                <img src={item.icon} alt="" />
                                <h2>{item.title}</h2>
                            </div>
                        ))}
                    </ul>
                </div>
        
        </div>
    )
}
export default LeftList;