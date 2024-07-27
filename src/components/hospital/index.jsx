import React from "react";
import styles from "./index.module.css";
import HospitalPhoto from '../../assets/images/hospital.png'
const Hospital = () => {
  return (
    <div className={styles.background}>
      <div className={styles.control}>
        <div className={styles.text}>
          <h2>
            Dövlət Təhlükəsizliyi Xidmətinin Hərbi-Tibb Baş İdarəsinini
            Hospitalı{" "}
          </h2>
          <p>
            Hal-hazırda klinikamızda skolyoz əməliyyatları zamanı istifadə
            etdiyimiz implantlar və naviqasiya sistemlər dünyanın aparıcı
            skolyoz cərrahiyyəsi mərkəzlərində tətbiq edilən sistemlərlə
            eynidir. İnnovativ implantoloji metodikalar, müasir implantlar və
            naviqasiya sistemlərin tətbiqi ilə icra etdiyimiz əməliyyatların
            uğurluluq dərəcəsi 99%-ə çatmışdır. Dövlət Təhlükəsizliyi Xidmətinin
            Hərbi-Tibb Baş İdarəsinin hospitalı ABŞ, Avropa və Türkiyənin
            aparıcı skolyoz cərrahiyyəsi klinikaları ilə iş birliyindədir.
            Skolyoz əməliyyatları Dr. Yusif Zeynalovun rəhbərliyi altında,
            mütəxəssislərlə birgə, briqada şəklində icra edilir.
          </p>
        </div>
        <div className={styles.images}>
            <img src={HospitalPhoto} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Hospital;
