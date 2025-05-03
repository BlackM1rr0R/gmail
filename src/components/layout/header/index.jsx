import React, { useEffect, useState } from "react";
import styles from "./index.module.css";
import Wrapper from "../../UI/wrapper";
import GmailIcon from '../../../assets/images/gmailicon.png'
import SearchIcon from '../../../assets/images/searchicon.png'
import HelpIcon from '../../../assets/images/helpicon.png'
import Settingsicon from '../../../assets/images/settingsicon.png'
import MenuIcon from '../../../assets/images/menuapps.png'
import ProfileIcon from '../../../assets/images/profilepic.png'
import { Link, useNavigate } from "react-router-dom";

const Header = () => {
  const [username, setUsername] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const storedUsername = localStorage.getItem("username");
    if (storedUsername) {
      setUsername(storedUsername);
    }
  }, []);

  const handleProfileClick = () => {
    if (!username) {
      navigate("/profile");  // Eğer kullanıcı giriş yapmamışsa login sayfasına yönlendir.
    }
  };
  const handleLogOut = () => {
    setUsername(null); // Kullanıcı adını sıfırla
    localStorage.removeItem("username"); // LocalStorage'dan kullanıcı adını kaldır
  }
  return (
    <div className={styles.container}>
      <Wrapper>
        <div className={styles.controlContainer}>
          <div className={styles.leftBox}>
            <Link to={"/"} className={styles.logo}>
            <img src={GmailIcon} alt="" />
            <h2>Gmail</h2>
            </Link>
          </div>
          <div className={styles.centerBox}>
            <img src={SearchIcon} alt="" />
            <input placeholder="Search mail" type="text" />
          </div>
          <div className={styles.rightBox}>
            <img src={HelpIcon} alt="" />
            <img src={Settingsicon} alt="" />
            <img src={MenuIcon} alt="" />
            <div onClick={handleProfileClick}>
              {username ? (
                <div>
                  <span>{username}</span>
                  <button onClick={() => handleLogOut()}>Cixis et</button>
                  <img className={styles.profileIcon} src={ProfileIcon} alt="Profile" />
                </div>
              ) : (
                <Link to="/profile">
                  <img className={styles.profileIcon} src={ProfileIcon} alt="Profile" />
                </Link>
              )}
            </div>
          </div>
        </div>
      </Wrapper>
    </div>
  );
};

export default React.memo(Header);
