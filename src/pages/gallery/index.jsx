import React, { useMemo, useState } from "react";
import styles from "./index.module.css";
import Wrapper from "../../components/UI/wrapper";
import Photo1 from "../../assets/images/foto1.png";
import Photo2 from "../../assets/images/foto2.png";
import Photo3 from "../../assets/images/foto3.png";
import Photo4 from "../../assets/images/foto4.png";
import Photo5 from "../../assets/images/foto5.png";
import Photo6 from "../../assets/images/foto6.png";
import Photo7 from "../../assets/images/foto7.png";
import Photo8 from "../../assets/images/foto8.png";
import Photo9 from "../../assets/images/foto9.png";
const Gallery = () => {
  const photos = useMemo(
    () => [
      {
        images: `${Photo1}`,
        info: "Outsourcing logistics talent in Ukraine guide",
      },
      {
        images: `${Photo2}`,
        info: "Improve operational efficiency with remote staffing from Eastern Europe",
      },
      {
        images: `${Photo3}`,
        info: "5 tips to handle time zone differences with offshore team",
      },
      {
        images: `${Photo4}`,
        info: "How back office support drives business growth",
      },
      {
        images: `${Photo5}`,
        info: "The 10 world’s largest companies that outsource to boost growth",
      },
      {
        images: `${Photo6}`,
        info: "From Zelh with care: how we support our teams during war",
      },
      {
        images: `${Photo7}`,
        info: "What makes Ukraine stand out – why outsource to Ukraine?",
      },
      {
        images: `${Photo8}`,
        info: "5 Tips how to maintain corporate culture In remote teams",
      },
      {
        images: `${Photo9}`,
        info: "Recruiting trends of 2024 — what the future of recruitment",
      },
    ],
    []
  );
  return (
    <div className={styles.background}>
      <Wrapper>
        <div className={styles.headers}>
          <h2>NƏTİCƏLƏRİMİZ</h2>
          <p>Pasiyentlərimiz ilə əldə etdiyimiz müalicə nəticələrimiz.</p>
        </div>
        <div className={styles.boxs}>
          {photos.map((item, index) => (
            <div key={index} className={styles.border}>
              <img src={item.images} alt={`Slide ${index}`} />
              <h2>{item.info}</h2>
            </div>
          ))}
        </div>
      </Wrapper>
    </div>
  );
};

export default React.memo(Gallery);
