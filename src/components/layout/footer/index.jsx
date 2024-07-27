import React from "react";
import styles from "./index.module.css";
import Wrapper from "../../UI/wrapper/index";
import Logo from "../../../assets/images/logo1.png";
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
            <h2>Your Success, Our Expertise: Together We Grow</h2>
            <p>
              Let’s stay in touch! Subscribe to our newsletter to be informed
              about the latest innovations and offers!
            </p>
          </div>
          <div className={styles.line2}>
          <h2>Navigation</h2>
            <ul>
              <li>Əsas Səhifə</li>
              <li>Skoliozlar</li>
              <li>Kifoz</li>
              <li>DR. Yusif L. Zeynalov</li>
              <li>Əlaqə</li>
            </ul>
          </div>
          <div className={styles.line3}>
          <h2>Main office</h2>
            <ul>
              <li>1905 Market St, Tampa, FL</li>
              <li>+1 800 458 09 02</li>
              <li>recruiting@gmail.com</li>
              <li>info@gmail.com</li>
              <li>Əlaqə</li>
            </ul>
          </div>
        </div>
      </Wrapper>
    </div>
  );
};

export default Footer;
