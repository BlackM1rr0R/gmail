import React, { useMemo, useState } from "react";
import styles from "./index.module.css";
import Wrapper from "../../components/UI/wrapper";
import Photo1 from "../../assets/images/photo1.png";
import Photo2 from "../../assets/images/photo2.png";
import Photo3 from "../../assets/images/photo3.png";
import Photo4 from "../../assets/images/photo4.png";
import Photo5 from "../../assets/images/photo5.png";
import Photo6 from "../../assets/images/photo6.png";
const Gallery = () => {
  const photos = useMemo(
    () => [Photo1, Photo2, Photo5, Photo3, Photo4, Photo6],
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
          {photos.map((photo, index) => (
            <div key={index} className={styles.border1}>
              <img src={photo} alt={`Slide ${index}`} />
            </div>
          ))}
        </div>
      </Wrapper>
    </div>
  );
};

export default React.memo(Gallery);
