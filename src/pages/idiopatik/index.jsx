import React, { useState, useReducer, useMemo } from "react";
import styles from "./index.module.css";
import Wrapper from "../../components/UI/wrapper";
import DoctorProfile from '../../assets/images/doctor12.jpg'
import { AboutIcon, DoctorIcon, DokumentIcon, KlinikIcon, PhoneCallIcon, SkillsIcon } from "../../icons";
import { Helmet } from "react-helmet-async";


const Idiopatik = () => {

  return (
    <>
         <Helmet>
        <title>Randevu Ayarlayın | ETERNAL Sağlık Hizmetleri</title>
        <meta
          name="description"
          content="ETERNAL Sağlık Hizmetleri ile kolayca randevunuzu ayarlayın ve en iyi sağlık hizmetlerini deneyimleyin."
        />
        <meta
          name="keywords"
          content="Randevu, Sağlık Hizmetleri, ETERNAL, Online Randevu, Klinik"
        />
       
      </Helmet>
   
    <div className={styles.background}>
      <Wrapper>
        <div className={styles.positionOverlay}>

          <div className={styles.overlay}>
            <div className={styles.controlOverlay}>
              <DoctorIcon />
              <h2>Doktorumuz sizlere hizmet vermektedir</h2>
              <p>Siz sadece ara düymesine tıklayarak randevu ala bilirsiniz.</p>
              <a href="tel:+901234567890"><PhoneCallIcon />Bizi Arayın</a>

            </div>
          </div>
        </div>
        <div className={styles.fixedCall}>
          <a href="tel:0552 518 96 54"><PhoneCallIcon />Bizi Arayın</a>
        </div>
      </Wrapper>
      <div className={styles.control}>
        <div className={styles.doctorBack}>
          <div className={styles.imagesControl}>
            <img src={DoctorProfile} alt="" />

          </div>
          <div className={styles.textControl}>
            <h2>Uzm. Dr. Atakan Bayrak </h2>
            <h3>ETERNAL Sağlık Hizmetleri</h3>
          </div>
        </div>
      </div>
      <Wrapper>

        <div className={styles.aboutDoctor}>
          <div className={styles.aboutMe}>
            <div className={styles.aboutIcon}>
              <AboutIcon />
              <h2>Hakkında</h2>
            </div>
            <p>Uzman sağlık ekibimizle rahat bir nefes alın.</p>
          </div>
          <div className={styles.skillsDoctor}>
            <div className={styles.skillsIcon}>
              <SkillsIcon />
              <h2>Uzmanlık Alanları</h2>
            </div>
            <ul className={styles.listSkills}>
              <li>Evde Doktor Hizmeti</li>
              <li>İ.V. Terapi</li>
              <li>Glutatyon Terapisi</li>
              <li>Yüksek Doz C Vitamin Terapisi</li>
              <li>Serum Tedavisi</li>
              <li>Evde Hemşirelik Hizmeti</li>
              <li>Sağlık Danışmanlık Hizmeti</li>
              <li>Hasta Bakım Refakat Hizmeti</li>
              <li>Yaşlı Bakım Destek Hizmeti</li>
              <li>Serum Takma</li>
              <li>Enjeksiyon (💉)</li>
              <li>Sonda Takma ve Değişimi</li>
              <li>Pansuman & Yara Bakımı</li>
              <li>Bası Yarası Pansumanı (Dekübit)</li>
              <li>Vital Analiz CEA Tedavisinde Destek</li>
              <li>Tansiyon Ölçümleri</li>
              <li>Glukoz (Şeker) Ölçümü & Takibi</li>
              <li>Oksijen & Buhar Uygulaması</li>
              <li>Evde & Hastane'de Hemşire</li>
              <li>Göz & Kulak Lavajı (Yıkama)</li>
              <li>Cerrahi Müdahale</li>
              <li>Dikiş Atma ve Alma</li>
              <li>Buzlu Ağrı Kompresi & Masaj</li>
            </ul>
          </div>
 
          <div className={styles.klinikDoctor}>
            <div className={styles.klinikIcon}>
              <KlinikIcon />
              <h2>Klinik</h2>
            </div>
            <h1>ETERNAL Sağlık Hizmeti</h1>
            <h1>Bu kurumda Hastalar değil hastalıklar susturulur.</h1>
          </div>
        </div>
      </Wrapper>

    </div>
    </>
  );
};

export default React.memo(Idiopatik);
