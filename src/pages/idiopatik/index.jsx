import React, { useState, useReducer, useMemo } from "react";
import styles from "./index.module.css";
import Wrapper from "../../components/UI/wrapper";
import DoctorProfile from '../../assets/images/doctorprofil.png'
import { AboutIcon, DoctorIcon, DokumentIcon, KlinikIcon, PhoneCallIcon, SkillsIcon } from "../../icons";


const Idiopatik = () => {

  return (
    <div className={styles.background}>
      <Wrapper>
<div className={styles.positionOverlay}>

        <div className={styles.overlay}>
          <div className={styles.controlOverlay}>
            <DoctorIcon />
            <h2>Doktorumuz artık hizmet vermemektedir</h2>
            <p>Uzm. Dr. Nil Sarıçiçek artık 360 Sağlık bünyesinde hizmet
              vermemektedir. Aynı uzmanlıktaki Diğer doktorlarımızdan
              randevu oluşturabilirsiniz.</p>
            <a href="tel:+901234567890"><PhoneCallIcon />Arayin bizi</a>

          </div>
        </div>
</div>
        <div className={styles.fixedCall}>
          <a href="tel:+901234567890"><PhoneCallIcon />Arayin bizi</a>
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
      <Wrapper>

        <div className={styles.aboutDoctor}>
          <div className={styles.aboutMe}>
            <div className={styles.aboutIcon}>
              <AboutIcon />
              <h2>Hakkında</h2>
            </div>
            <p>Uzm. Dr. Nil Sarıçiçek Yeditepe Üniversitesi Tıp Fakültesinden mezun olduktan sonra zorunlu hizmetini Ağrı İl
              Sağlık Müdürlüğü Ana Çocuk Sağlığı ve Aile Planlaması Merkezinde şube müdürü olarak yapmıştır. Sonrasında
              Zeynep Kamil Kadın Doğum ve Çocuk Hastalıkları Hastanesi’nde uzmanlık eğitimini tamamlamıştır. Uzmanlık
              zorunlu hizmetini ise Tekirdağ ili Şarköy İlçe Devlet Hastanesi’nde yaptıktan sonra 2019 yılında İstanbul’da kendi
              kliniğinde hizmete başlamıştır. Çocuk gelişimi ile ilgili Uluslararası Gelişimi İzleme Destekleme Rehberi (GİDR) ve
              Sosyal İletişim Alan Tarama Testi (SİATT) uygulayıcısı eğitimlerini almıştır ve kliniğinde uygulamaktadır. Ayrıca eş
              zamanlı olarak Johns Hopkins Anadolu Sağlık Merkezi hastanesinde pediatri bölümünde çalışmıştır. Fonksiyonel
              Tıp uygulayıcısı eğitimini Fonksiyonel Tıp Platformunda tamamlamıştır. Hala psikonöroimmunoloji (PNI) eğitimi
              almaktadır.</p>
          </div>
          <div className={styles.skillsDoctor}>
            <div className={styles.skillsIcon}>
              <SkillsIcon />
              <h2>Uzmanlık Alanları</h2>
            </div>
            <ul className={styles.listSkills}>
              <li>Astım (Astım Bronşit)</li>
              <li>Boğaz Ağrısı</li>
              <li>Boğaz İltihabı</li>
              <li>Çocuk Beslenme Bozuklukları</li>
              <li>Çocuk Enfeksiyon Hastalıklar</li>
              <li>Çocuk Gelişimi</li>
              <li>Çocuk Sağlığı İzlemi</li>
              <li>Çocuklarda Beslenme</li>
              <li>Çocuklarda Uyku Problemleri</li>
              <li>Çocuklarda Yüksek Ateş</li>
              <li>Grip</li>
              <li>Mide</li>
            </ul>
          </div>
          <div className={styles.documentDoctor}>
            <div className={styles.documentIcon}>
              <DokumentIcon />
              <h2>Sertifikalar</h2>
            </div>
            <ul className={styles.listDocument}>
              <li>Bilimsel Fitoterapi Eğitimi</li>
              <li>Bağ Temelli Uyku Semineri</li>
              <li>Uluslararası Gelişimi İzleme ve Destekleme Rehberi Uygulayıcı Eğitimi</li>

            </ul>
          </div>
          <div className={styles.klinikDoctor}>
            <div className={styles.klinikIcon}>
              <KlinikIcon />
              <h2>Klinik</h2>
            </div>
            <h1>Nil Sarıçiçek Muayenehanesi</h1>
          </div>
        </div>
      </Wrapper>

    </div>
  );
};

export default React.memo(Idiopatik);
