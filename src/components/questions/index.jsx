import React, { useReducer, useState } from "react";
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
const Questions = () => {
  const [state, setState] = useReducer(reducer, initialState);
  return (
    <div className={styles.background}>
      <div className={styles.rightside}>
        <div
          onClick={() => setState({ type: "green" })}
          className={styles.greenborder}
        >
          {state.green ? (
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
        <div
          onClick={() => setState({ type: "orange" })}
          className={styles.orangeborder}
        >
          {state.orange ? (
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
        <div
          onClick={() => setState({ type: "red" })}
          className={styles.redborder}
        >
          {state.red ? (
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
        <div
          onClick={() => setState({ type: "violet" })}
          className={styles.violetborder}
        >
          {state.violet ? (
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
