import React, { useState } from "react";
import styles from "./index.module.css";
import YusifBackground from "../../assets/images/yusifbackground.png";
import Doctors from "../../assets/images/doctors.png";
import { RightArrow } from "../../icons/";
import ScrollTrigger from "react-scroll-trigger";
import CountUp from "react-countup";
const Hero = () => {
  const [counterOn, setCounterOn] = useState(false);
  return (
    <div className={styles.background}>
      <div className={styles.headers}>
        <h2>Fizioterapevt</h2>
      </div>
      <div className={styles.texts}>
        <h2>Where Compassion</h2>
        <img src={Doctors} alt="" />
        <h2>Meets</h2>
        <h2>Advanced Medical Services</h2>
      </div>
      <div className={styles.control}>
        <div className={styles.leftside}>
          <div className={styles.line1}>
            <h2>
              Skolioz, kifoz, lordoz əyrilikləri, onurğada disk yırıqları,
              idmançı zədələnmələri, insultun reabilitasıyası.
            </h2>
          </div>
          <div className={styles.line2}>
            <h2>0506282628</h2>
            <div className={styles.icons}>
              <h3>Müalicələrimiz </h3>
              <RightArrow />
            </div>
          </div>
          <ScrollTrigger
            onEnter={() => setCounterOn(true)}
            onExit={() => setCounterOn(false)}
          >
            <div className={styles.line3}>
              <div className={styles.controlemergency}>

              <div className={styles.emergency}>
                <div className={styles.emergencynumber}>
                  <h2>
                    {counterOn && <CountUp duration={4} delay={0} end={24} />}/
                  </h2>
                  <h2>
                    {counterOn && <CountUp duration={4} delay={0} end={7} />}
                  </h2>
                </div>
                <div className={styles.emergencytext}>
                  <h2>Emergency Care</h2>
                </div>
              </div>
              <div className={styles.emergency}>
                <div className={styles.emergencynumber}>
                  <h2>
                    {counterOn && <CountUp duration={4} delay={0} end={98} />}%
                  </h2>
               
                </div>
                <div className={styles.emergencytext}>
                  <h2>Client Satisfaction</h2>
                </div>
              </div>
              </div>
            </div>
          </ScrollTrigger>
        </div>
        <div className={styles.rightside}>
        <img src={YusifBackground} alt="" />
        </div>
      </div>
    </div>
  );
};

export default React.memo(Hero);
