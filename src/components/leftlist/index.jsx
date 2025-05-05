import React from "react";
import styles from './index.module.css'
import Wrapper from '../UI/wrapper'
import VectorIcon from '../../assets/images/vectoricon.png'
import ShapeIcon from '../../assets/images/shapeicon.png'
import FavIcon from '../../assets/images/favicon.png'
import ClockIcon from '../../assets/images/clockicon.png'
import SentIcon from '../../assets/images/sendicon.png'
import DraftsIcon from '../../assets/images/draftsicon.png'
import { Link } from "react-router-dom";
import { sendMessage } from "../../api";
const LeftList = () => {
    const data = [
        {
            id: 1,
            title: 'Inbox',
            icon: `${ShapeIcon}`,
            links: `${"/"}`
        },
        {
            id: 2,
            title: 'Starred',
            icon: `${FavIcon}`,
            links: `${"/starred"}`
        },
        {
            id: 3,
            title: 'Snoozed',
            icon: `${ClockIcon}`,
            links: `${"/starred"}`
        },
        {
            id: 4,
            title: 'Sent',
            icon: `${SentIcon}`,
            links: `${"/sent"}`
        },
        {
            id: 5,
            title: 'Drafts',
            icon: `${DraftsIcon}`,
            links: `${"/starred"}`
        }
    ]

    return (
        <div className={styles.container}>

            <div className={styles.controlContainer}>
                <Link to="/newMessage" className={styles.newTask}>
                    <img src={VectorIcon} alt="" />
                    <h2>Compose</h2>
                </Link>

                <ul className={styles.controlUl}>
                    {data.map((item) => (
                        <Link to={item.links} key={item.id} className={styles.list}>
                            <img src={item.icon} alt="" />
                            <h2>{item.title}</h2>
                        </Link>
                    ))}
                </ul>
            </div>

        </div>
    )
}
export default LeftList;