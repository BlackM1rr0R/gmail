import React, { useState } from "react";
import styles from "./index.module.css";
import Wrapper from "../../UI/wrapper/index";
import Logo from "../../../assets/images/logo1.png";
import { Sling as Hamburger } from "hamburger-react";
import {
  FacebookIcon,
  InstagramIcon,
  TiktokIcon,
  YoutubeIcon,
} from "../../../icons";
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <div className={styles.background}>
      <Wrapper>
        <div className={styles.control}>
          <div className={styles.images}>
            <img src={Logo} alt="" />
          </div>
          <div className={styles.services}>
            <h2>Haqqımda</h2>
            <h2>Müalicələr</h2>
            <h2>Kifoz</h2>
            <h2>Galereya</h2>
            <h2>Əlaqə</h2>
          </div>
          <div className={styles.icons}>
            <FacebookIcon />
            <InstagramIcon />
            <YoutubeIcon />
            <TiktokIcon />
          </div>
          <div className={styles.hamburger}>
            <Hamburger
              size={22}
              distance="lg"
              toggled={isMenuOpen}
              toggle={toggleMenu}
            />
          </div>
        </div>
          {isMenuOpen && (
            <div className={styles.overlay}>
           
                <div className={styles.services}>
                  <h2>Haqqımda</h2>
                  <h2>Müalicələr</h2>
                  <h2>Kifoz</h2>
                  <h2>Galereya</h2>
                  <h2>Əlaqə</h2>
                </div>
                <div className={styles.icons}>
            <FacebookIcon />
            <InstagramIcon />
            <YoutubeIcon />
            <TiktokIcon />
          </div>
            </div>
          )}
      </Wrapper>
    </div>
  );
};

export default Header;
