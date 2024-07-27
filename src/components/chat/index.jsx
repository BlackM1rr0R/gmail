import React from 'react'
import styles from './index.module.css'
import ChatPhoto from '../../assets/images/chat1.png'
const ChatApp = () => {
  return (
    <div className={styles.background}>
        <div className={styles.text}>
        <h2>SKOLİOZ XƏSTƏLİYİNDƏN</h2>
        <h3>ƏZİYYƏT ÇƏKİRSİNİZ ?</h3>
        </div>
            <div className={styles.images}>
                    <img src={ChatPhoto} alt="" />
            </div>
    </div>
  )
}

export default ChatApp