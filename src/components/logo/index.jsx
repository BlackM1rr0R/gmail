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
        {icons.map((Icon, index) => (
          <div key={index} className={styles.border}>
            <Icon />
          </div>
        ))}
      </div>
    </div>
  );
};

export default React.memo(Logo);
