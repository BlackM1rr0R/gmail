import React, { useState,useReducer, useMemo } from "react";
import styles from "./index.module.css";
import Wrapper from "../../components/UI/wrapper";
import DoctorSvg from "../../assets/images/doktor.png";
import AmbulanceSvg from "../../assets/images/ambulance.png";
import Patient from "../../assets/images/hasta.png";
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
const Idiopatik = () => {
  
  return (
    <div className={styles.background}>
      <Wrapper>
      <div className={styles.control}>
          <div className={styles.headerText}>
            <h2>
              <h1>Randevu</h1> Online
            </h2>
          </div>
          <div className={styles.boxOne}>
            <div className={styles.leftBox}>
              <h1>Hizmetlerimiz</h1>
              <div className={styles.controlLeftBox}>
                <div className={styles.leftBoxText}>
                  <div className={styles.leftBoxHeader}>
                    <h2>01.</h2>
                  </div>
                  <div className={styles.leftBoxBottom}>
                    <h2>Evde Doktor Hizmeti</h2>
                    <p>
                      Evde doktor hizmeti, hastaların kendi evlerinde kaliteli
                      sağlık hizmeti alabilmeleri için kaliteli bir hizmet
                      sunar.
                    </p>
                  </div>
                </div>
                <div className={styles.leftBoxSvg}>
                  <img src={DoctorSvg} alt="" />
                </div>
              </div>
            </div>
            <div className={styles.controlMiddleBox}>
              <div className={styles.middleBoxText}>
                <div className={styles.middleBoxHeader}>
                  <h2>02.</h2>
                </div>
                <div className={styles.middleBoxBottom}>
                  <h2>Evde Hemşire Hizmeti</h2>
                  <p>
                    Evde hemşire hizmeti, özellikle yaşlı, yatalak veya kronik
                    rahatsızlıkları olan bireyler için büyük bir kolaylık
                    sağlar.
                  </p>
                </div>
              </div>
            </div>
            <div className={styles.controlRightBox}>
              <div className={styles.rightBoxText}>
                <div className={styles.rightBoxHeader}>
                  <h2>03.</h2>
                </div>
                <div className={styles.rightBoxBottom}>
                  <h2>Evde Geleneksel Tıp</h2>
                  <p>
                    Evde Geleneksel Tıp, binlerce yıllık doğal tedavi
                    yöntemlerini modern yaşamınıza entegre eden bir hizmettir.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.boxTwo}>
            <div className={styles.controlForBox}>
              <div className={styles.forBox}>
                <div className={styles.forBoxHeader}>
                  <h2>04.</h2>
                </div>
                <div className={styles.forBoxBottom}>
                  <h2>Evde Tahlil Hizmeti</h2>
                  <p>
                    Uzman doktorlarımızla sağlık sorununuzun tespiti ve tedavisi
                    için evinizin konforunda muayenenizi yapıyoruz.
                  </p>
                </div>
              </div>
            </div>
            <div className={styles.controlFiveBox}>
              <div className={styles.fiveBoxText}>
                <div className={styles.fiveBoxHeader}>
                  <h2>05.</h2>
                </div>
                <div className={styles.fiveBoxBottom}>
                  <h2>Özel Ambulans Hizmeti</h2>
                  <p>
                    Hasta Nakil Ambulansı hizmeti, yüksek standartlardaki
                    medikal ekipmanları ve deneyimli sağlık personeli ile
                    hastanızın konforu ve güvenliği en üst düzeyde tutulur.
                  </p>
                </div>
              </div>
              <div className={styles.fiveBoxSvg}>
                <img src={AmbulanceSvg} alt="" />
              </div>
            </div>
          </div>
          <div className={styles.boxThree}>
            <div className={styles.controlFiveBox}>
              <div className={styles.fiveBoxText}>
                <div className={styles.fiveBoxHeader}>
                  <h2>06.</h2>
                </div>
                <div className={styles.fiveBoxBottom}>
                  <h2>Evde Hasta Bakıcı Hizmeti</h2>
                  <p>
                    Evde hasta bakıcı hizmeti, hastane ortamının stresinden
                    uzakta, ancak tıbbi gereksinimlerinin profesyonel bir
                    şekilde karşılandığı bir hizmettir.
                  </p>
                </div>
              </div>
              <div className={styles.fiveBoxSvg}>
                <img src={Patient} alt="" />
              </div>
            </div>
            <div className={styles.controlForBox}>
              <div className={styles.forBox}>
                <div className={styles.forBoxHeader}>
                  <h2>07.</h2>
                </div>
                <div className={styles.forBoxBottom}>
                  <h2>Evde Check Up Hizmeti</h2>
                  <p>
                    Yaşınıza ve sağlık durumunuza, kişiye özgü check-up
                    paketlerimizi evinizde gerçekleştiriyoruz.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
  
      </Wrapper>
    </div>
  );
};

export default React.memo(Idiopatik);
