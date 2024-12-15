import React from "react";
import styles from "./index.module.css";
import Wrapper from "../../UI/wrapper/index";
import Logo from "../../../assets/images/logoeternal.png";
import { FacebookIcon, InstagramIcon, LinkedinIcon } from "../../../icons";
const Footer = () => {
  return (
    <div className={styles.background}>
      <div className={styles.hr}>
        <hr />
      </div>
      <Wrapper>
        <div className={styles.control}>
          <div className={styles.line1}>
            <img src={Logo} alt="" />
            <h2>ETERNAL
            Sağlık Hizmetleri</h2>
            <p>
              Size hizmet göstermekden onur duyarız!
            </p>
          </div>
          <div className={styles.line2}>
            <h2>Sayfalar</h2>
            <ul>
              <li>Ana Sayfa</li>
              <li>Randevu</li>
              <li>Hizmetlerimiz</li>
              <li>Hakkımızda</li>
              <li>Blog</li>
              <li>İletişim</li>
            </ul>
          </div>
          <div className={styles.line3}>
            <h2>Baş Ofisimiz</h2>
            <ul>
              <li>Düzce,Kocaeli,İstanbul</li>
              <li>0543 406 35 44</li>
              
            </ul>
            <div className={styles.icons}>
              <div className={styles.linkedin}>
                <InstagramIcon />
              </div>
            </div>
          </div>
        </div>
      </Wrapper>
    </div>
  );
};

export default React.memo(Footer);
