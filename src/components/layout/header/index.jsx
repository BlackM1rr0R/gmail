import React, { useState } from "react";
import styles from "./index.module.css";
import Wrapper from "../../UI/wrapper/index";
import Logo from "../../../assets/images/logoeternal.png";
import { Sling as Hamburger } from "hamburger-react";
import {
  FacebookIcon,
  InstagramIcon,
  TiktokIcon,
  YoutubeIcon,
} from "../../../icons";
import { Link } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <div className={styles.background}>
      <Wrapper>
        <div className={styles.control}>
          <Link to={"/"} className={styles.images}>
            <img src={Logo} alt="" />
            <h2>ETERNAL</h2>
            <h2>Sağlık Hizmetleri</h2>
          </Link>
          <div className={styles.services}>
            <Link to={"/idiopatik"}>Randevu</Link>
            <Link to={"/kifoz"}>Hizmetlerimiz</Link>
            <Link to={"/about"}>Hakkımda</Link>
            <Link to={"/gallery"}>Blog</Link>
            <Link to={"/contact"}>Iletisim</Link>
          </div>
          <div className={styles.phoneHeader}>
        <h1>ETERNAL</h1>
        <h2>Sağlık Hizmetleri</h2>
          </div>
          <div className={styles.icons}>
            <InstagramIcon />
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
              <Link to={"/about"} onClick={closeMenu}>Hakkımda</Link>
              <Link to={"/idiopatik"} onClick={closeMenu}>Randevu</Link>
              <Link to={"/kifoz"} onClick={closeMenu}>Hizmetlerimiz</Link>
              <Link to={"/gallery"} onClick={closeMenu}>Blog</Link>
              <Link to={"/contact"} onClick={closeMenu}>Iletisim</Link>
            </div>
            <div className={styles.icons}>
       
              <InstagramIcon />
          
              <TiktokIcon />
            </div>
          </div>
        )}
      </Wrapper>
    </div>
  );
};

export default React.memo(Header);
