import React, { useState } from "react";
import styles from "./index.module.css";
import YusifPhoto from "../../assets/images/yusifsekil.png";
import {
  GreenArrow,
  GreenArrowTrue,
  OrangeArrow,
  OrangeArrowTrue,
  RedArrow,
  RedArrowTrue,
  VioletArrow,
  VioletArrowTrue,
} from "../../icons";
const YusifAbout = () => {
  const [green, setGreen] = useState(true);
  const [orange, setOrange] = useState(false);
  const [red, setRed] = useState(false);
  const [violet, setViolet] = useState(false);
  const greenClick = () => {
    setGreen(!green);
    setOrange(false);
    setRed(false)
    setViolet(false)
  };
  const orangeClick = () => {
    setGreen(false);
    setOrange(!orange);
    setRed(false)
    setViolet(false)

  };
  const redClick = () => {
    setGreen(false);
    setOrange(false);
    setRed(!red)
    setViolet(false)

  };
  const violetClick = () => {
    setGreen(false);
    setOrange(false);
    setRed(false)
    setViolet(!violet)

  };
  return (
    <div className={styles.background}>
      <div className={styles.control}>
        <div className={styles.leftside}>
          <img src={YusifPhoto} alt="" />
        </div>
        <div className={styles.rightside}>
          <div onClick={() => greenClick()} className={styles.greenborder}>
            {green ? (
              <>
                <div className={styles.greentext}>
                  <h2>Idiopatik Skaliozlar </h2>
                  <GreenArrowTrue />
                </div>
                <div className={styles.orangeabout}>
                  <p>
                    Konjenental Skoliozlar anadangəlmə fəqərələrin formalaşma
                    qüsurları (pazvari fəqərələr, kəpənəyəbənzər fəqərələr və s)
                    və fəqərələrin bitişmə qüsurları (bir tərəflə bir neçə
                    fəqərənin bir-biri ilə bitişik olması) fonunda yaranan
                    skoliozlardır.
                  </p>
                </div>
              </>
            ) : (
              <div className={styles.greentext}>
                <h2>Idiopatik Skaliozlar </h2>
                <GreenArrow />
              </div>
            )}
          </div>
          <div onClick={() => orangeClick()} className={styles.orangeborder}>
            {orange ? (
              <>
                <div className={styles.orangetext}>
                  <h2>Konjenental Skoliozlar </h2>
                  <OrangeArrow />
                </div>
                <div className={styles.orangeabout}>
                  <p>
                    Konjenental Skoliozlar anadangəlmə fəqərələrin formalaşma
                    qüsurları (pazvari fəqərələr, kəpənəyəbənzər fəqərələr və s)
                    və fəqərələrin bitişmə qüsurları (bir tərəflə bir neçə
                    fəqərənin bir-biri ilə bitişik olması) fonunda yaranan
                    skoliozlardır.
                  </p>
                </div>
              </>
            ) : (
              <div className={styles.orangetext}>
                <h2>Konjenental Skoliozlar </h2>
                <OrangeArrowTrue />
              </div>
            )}
          </div>
          <div onClick={() => redClick()} className={styles.redborder}>
            {red ? (
              <>
                <div className={styles.redtext}>
                  <h2>Neyromuskulyar Skoliozlar </h2>
                  <RedArrow />
                </div>
                <div className={styles.orangeabout}>
                  <p>
                    Konjenental Skoliozlar anadangəlmə fəqərələrin formalaşma
                    qüsurları (pazvari fəqərələr, kəpənəyəbənzər fəqərələr və s)
                    və fəqərələrin bitişmə qüsurları (bir tərəflə bir neçə
                    fəqərənin bir-biri ilə bitişik olması) fonunda yaranan
                    skoliozlardır.
                  </p>
                </div>
              </>
            ) : (
              <div className={styles.redtext}>
                <h2>Neyromuskulyar Skoliozlar </h2>
                <RedArrowTrue />
              </div>
            )}
          </div>
          <div onClick={() => violetClick()} className={styles.violetborder}>
            {violet ? (
              <>
                <div className={styles.violettext}>
                  <h2>Kifoz</h2>
                <VioletArrow/>
                </div>
                <div className={styles.orangeabout}>
                  <p>
                    Konjenental Skoliozlar anadangəlmə fəqərələrin formalaşma
                    qüsurları (pazvari fəqərələr, kəpənəyəbənzər fəqərələr və s)
                    və fəqərələrin bitişmə qüsurları (bir tərəflə bir neçə
                    fəqərənin bir-biri ilə bitişik olması) fonunda yaranan
                    skoliozlardır.
                  </p>
                </div>
              </>
            ) : (
              <div className={styles.violettext}>
                <h2>Kifoz </h2>
             <VioletArrowTrue/>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default YusifAbout;
