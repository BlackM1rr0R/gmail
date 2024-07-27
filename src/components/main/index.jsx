import React, { useState } from "react";
import styles from "./index.module.css";
import ScrollTrigger from "react-scroll-trigger";
import CountUp from "react-countup";

const Main = () => {
  const [counterOn, setCounterOn] = useState(false);

  return (
    <div className={styles.background}>
      <div className={styles.header}>
        <h2>Zehl in Numbers</h2>
      </div>
      <ScrollTrigger onEnter={() => setCounterOn(true)} onExit={() => setCounterOn(false)}>
        <div className={styles.control}>
          <div className={styles.border1}>
            <div className={styles.bordertext1}>
              <h2>{counterOn && <CountUp duration={4} delay={0} end={7} />}</h2>
              <p>Years of excellence</p>
            </div>
          </div>
          <div className={styles.border2}>
            <div className={styles.bordertext2}>
              <h2>{counterOn && <CountUp duration={4} delay={0} end={100} />}+</h2>
              <p>Succesfull projects</p>
            </div>
          </div>
          <div className={styles.border3}>
            <div className={styles.bordertext3}>
              <h2>{counterOn && <CountUp duration={4} delay={0} end={3000} />}+</h2>
              <p>Experts onboarded</p>
            </div>
          </div>
          <div className={styles.border4}>
            <div className={styles.bordertext4}>
              <h2>{counterOn && <CountUp duration={4} delay={0} end={10} />}+</h2>
              <p>Office location</p>
            </div>
          </div>
        </div>
      </ScrollTrigger>
    </div>
  );
};

export default Main;
