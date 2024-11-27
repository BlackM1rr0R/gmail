import React, { useState, useReducer, useMemo } from "react";
import styles from "./index.module.css";
import Wrapper from "../../components/UI/wrapper";
import DoctorProfile from '../../assets/images/doctorprofil.png'
import { DoctorIcon, PhoneCallIcon } from "../../icons";


const Idiopatik = () => {

  return (
    <div className={styles.background}>
      <Wrapper>

        <div className={styles.overlay}>
          <div className={styles.controlOverlay}>
            <DoctorIcon />
            <h2>Doktorumuz artık hizmet vermemektedir</h2>
            <p>Uzm. Dr. Nil Sarıçiçek artık 360 Sağlık bünyesinde hizmet
              vermemektedir. Aynı uzmanlıktaki Diğer doktorlarımızdan
              randevu oluşturabilirsiniz.</p>
              <a href="tel:+901234567890"><PhoneCallIcon/>Arayin bizi</a>

          </div>
        </div>
      </Wrapper>
      <div className={styles.control}>
        <div className={styles.doctorBack}>
          <div className={styles.imagesControl}>
            <img src={DoctorProfile} alt="" />

          </div>
          <div className={styles.textControl}>
            <h2>Uzm. Dr. Nil Sarıçiçek</h2>
            <h3>Çocuk Sağlığı ve Hastalıkları</h3>
          </div>
        </div>
      </div>

    </div>
  );
};

export default React.memo(Idiopatik);
