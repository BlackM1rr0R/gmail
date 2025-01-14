import React, { useState } from "react";
import styles from "./index.module.css";
import { RightArrow } from "../../icons/";
import ScrollTrigger from "react-scroll-trigger";
import CountUp from "react-countup";
import Wrapper from "../UI/wrapper";
import { Link } from "react-router-dom";

const Hero = () => {
  const [counterOn, setCounterOn] = useState(false);
  return (
    <>

    <div className={styles.background}>
      <Wrapper>

     
      <div className={styles.texts}>
        <>
        <h2>Aradığınız Sağlık Sağlıklı Gelecek</h2>
     
        <h2>Her anınızda yanınızdayız</h2>
        </>
      </div>
      <div className={styles.control}>
        <div className={styles.leftside}>
          <div className={styles.line1}>
            <h2>
            Alanında uzman sağlık ekibimizle rahat bir nefes alın.
            </h2>
          </div>
          <div className={styles.line2}>
          <a href="tel:+905434063544">0543 406 35 44</a>
            <div className={styles.icons}>
              <Link to={"/kifoz"}>Hizmetlerimiz</Link>
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
   
      </div>
      </Wrapper>

    </div>
    </>

  );
};

export default React.memo(Hero);
