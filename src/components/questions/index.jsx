import React, { useState } from "react";
import styles from "./index.module.css";
import {
  GrayArrow,
  GrayArrowTrue,
  GreenArrow,
  GreenArrowTrue,
  OrangeArrow,
  OrangeArrowTrue,
  RedArrow,
  RedArrowTrue,
  VioletArrow,
  VioletArrowTrue,
} from "../../icons";
const Questions = () => {
  const [green, setGreen] = useState(true);
  const [orange, setOrange] = useState(false);
  const [red, setRed] = useState(false);
  const [violet, setViolet] = useState(false);
  const greenClick = () => {
    setGreen(!green);
    setOrange(false);
    setRed(false);
    setViolet(false);
  };
  const orangeClick = () => {
    setGreen(false);
    setOrange(!orange);
    setRed(false);
    setViolet(false);
  };
  const redClick = () => {
    setGreen(false);
    setOrange(false);
    setRed(!red);
    setViolet(false);
  };
  const violetClick = () => {
    setGreen(false);
    setOrange(false);
    setRed(false);
    setViolet(!violet);
  };
  return (
    <div className={styles.background}>
      <div className={styles.rightside}>
        <div onClick={() => greenClick()} className={styles.greenborder}>
          {green ? (
            <>
              <div className={styles.greentext}>
                <h2>What is Zelh?</h2>
                <GrayArrow />
              </div>
              <div className={styles.orangeabout}>
                <p>
                  Zelh is a US-based company where businesses get started to
                  expand teams and improve workflow. We take on time-consuming
                  stuff so that you can focus on more important tasks. With our
                  customized remote staffing solutions, your business can
                  transform and prosper.
                </p>
              </div>
            </>
          ) : (
            <div className={styles.greentext}>
              <h2>What is Zelh?</h2>

              <GrayArrowTrue />
            </div>
          )}
        </div>
        <div onClick={() => orangeClick()} className={styles.orangeborder}>
          {orange ? (
            <>
              <div className={styles.orangetext}>
                <h2>What positions can you cover? </h2>

                <GrayArrow />
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
              <h2>What positions can you cover? </h2>
              <GrayArrowTrue />
            </div>
          )}
        </div>
        <div onClick={() => redClick()} className={styles.redborder}>
          {red ? (
            <>
              <div className={styles.redtext}>
                <h2>Staffing suit my business? </h2>
                <GrayArrow />
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
              <h2>Staffing suit my business? </h2>
              <GrayArrowTrue />
            </div>
          )}
        </div>
        <div onClick={() => violetClick()} className={styles.violetborder}>
          {violet ? (
            <>
              <div className={styles.violettext}>
                <h2>How much can I save annually?</h2>
                <GrayArrow />
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
              <h2>How much can I save annually?</h2>
              <GrayArrowTrue />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Questions;
