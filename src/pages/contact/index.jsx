import React from "react";
import styles from "./index.module.css";
import Wrapper from "../../components/UI/wrapper";
import YusifPhoto from "../../assets/images/yusifsekil.png";
const Contact = () => {
  return (
    <div className={styles.background}>
      <Wrapper>
        <div className={styles.control}>
          <div className={styles.images}>
            <img src={YusifPhoto} alt="Yusif" />
          </div>
          <div className={styles.texts}>
            <div className={styles.headertext}>
              <h2>Get in touch with us</h2>
              <p>Our friendly team is here to help</p>
            </div>
            <div className={styles.controltext}>
              <div className={styles.chattext}>
                <h2>Chat to us</h2>
                <p>hello@digitalagency</p>
              </div>
              <div className={styles.calltext}>
                <h2>Call to us</h2>
                <p>0554442424</p>
              </div>
            </div>
            <div className={styles.visittext}>
              <h2>Visit us</h2>
              <p>Level 2, 441 Baku Street, Azerbaijani 2024</p>
            </div>
          </div>
        </div>
        <div className={styles.maps}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3041.15168629903!2d49.80051551182402!3d40.33898097133305!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40307eed6307f1f1%3A0xf9b7673d9cf0114f!2sDTX%20Hospital!5e0!3m2!1str!2saz!4v1722436932696!5m2!1str!2saz"
            className={styles.map}
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </Wrapper>
    </div>
  );
};

export default React.memo(Contact);
