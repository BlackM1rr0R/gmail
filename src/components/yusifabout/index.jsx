import React, { useReducer, useState } from "react";
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
const initialState = {
  green: true,
  orange: false,
  red: false,
  violet: false,
};
function reducer(state, action) {
  switch (action.type) {
    case "green":
      return { green: true, orange: false, red: false, violet: false };
    case "orange":
      return { green: false, orange: true, red: false, violet: false };
    case "red":
      return { green: false, orange: false, red: true, violet: false };
    case "violet":
      return { green: false, orange: false, red: false, violet: true };
  }
}
const YusifAbout = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div className={styles.background}>
      <div className={styles.control}>
        <div className={styles.leftside}>
          <img src={YusifPhoto} alt="" />
        </div>
        <div className={styles.rightside}>
          <div
            onClick={() => dispatch({ type: "green" })}
            className={styles.greenborder}
          >
            {state.green ? (
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
          <div onClick={() => dispatch({type:'orange'})} className={styles.orangeborder}>
            {state.orange ? (
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
          <div onClick={() => dispatch({type:'red'})} className={styles.redborder}>
            {state.red ? (
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
          <div onClick={() => dispatch({type:'violet'})} className={styles.violetborder}>
            {state.violet ? (
              <>
                <div className={styles.violettext}>
                  <h2>Kifoz</h2>
                  <VioletArrow />
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
                <VioletArrowTrue />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default YusifAbout;
