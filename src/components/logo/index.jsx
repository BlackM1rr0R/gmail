import React from "react";
import styles from "./index.module.css"; 
import { AvvaIcon, GlobalIcon, MillIcon, OminIcon } from "../../icons";

const icons = [
  AvvaIcon,
  MillIcon,
  OminIcon,
  GlobalIcon,
  OminIcon
];

const Logo = () => {
  return (
    <div className={styles.background}>
      <div className={styles.control}>
      <script defer async src='https://cdn.trustindex.io/loader.js?8b1fe5d3858c613e3256749e328'></script>
      </div>
    </div>
  );
};

export default React.memo(Logo);
