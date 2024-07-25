import React from "react";
import styles from "./index.module.css";
import Wrapper from "../../UI/wrapper/index";
import Logo from "../../../assets/images/logo1.png";
import { FacebookIcon, InstagramIcon, TiktokIcon, YoutubeIcon } from "../../../icons";
const Header = () => {
  return (
    <div className={styles.background}>
      <Wrapper>
        <div className={styles.control}>
          <div className={styles.images}>
            <img src={Logo} alt="" />
          </div>
          <div className={styles.services}>
              <h2>Services</h2>
              <h2>Industries</h2>
              <h2>Company</h2>
              <h2>Career</h2>
              <h2>Calculator</h2>
          </div>
          <div className={styles.icons}>
        <FacebookIcon/>
        <InstagramIcon/>
        <YoutubeIcon/>
        <TiktokIcon/>
          </div>
        </div>
      </Wrapper>
    </div>
  );
};

export default Header;
