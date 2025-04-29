import React, { useState } from "react";
import styles from "./index.module.css";
import Wrapper from "../../UI/wrapper";
import GmailIcon from '../../../assets/images/gmailicon.png'
import SearchIcon from '../../../assets/images/searchicon.png'
import HelpIcon from '../../../assets/images/helpicon.png'
import Settingsicon from '../../../assets/images/settingsicon.png'
import MenuIcon from '../../../assets/images/menuapps.png'
import ProfileIcon from '../../../assets/images/profilepic.png'

const Header = () => {


  return (
    <div className={styles.container}>
      <Wrapper>

        <div className={styles.controlContainer}>
          <div className={styles.leftBox}>
            <img src={GmailIcon} alt="" />
            <h2>Gmail</h2>
          </div>
          <div className={styles.centerBox}>
            <img src={SearchIcon} alt="" />
            <input placeholder="Search mail" type="text" />
          </div>
          <div className={styles.rightBox}>
            <img src={HelpIcon} alt="" />
            <img src={Settingsicon} alt="" />
            <img src={MenuIcon} alt="" />
            <img className={styles.profileIcon} src={ProfileIcon} alt="" />
          </div>
        </div>
      </Wrapper>
    </div>
  );
};

export default React.memo(Header);
