import React, { useState } from "react";
import styles from "./index.module.css";
import Wrapper from "../../components/UI/wrapper";
import Photo1 from '../../assets/images/photo1.png'
import Photo2 from '../../assets/images/photo2.png'
import Photo3 from '../../assets/images/photo3.png'
import Photo4 from '../../assets/images/photo4.png'
import Photo5 from '../../assets/images/photo5.png'
import Photo6 from '../../assets/images/photo6.png'
const Gallery = () => {
    const[photos,setPhotos]=useState([
                {
                    image1:`${Photo1}`,
                    image2:`${Photo2}`,
                    image3:`${Photo3}`,
                    image4:`${Photo4}`,
                    image5:`${Photo5}`,
                    image6:`${Photo6}`,
                }
    ])
  return (
    <div className={styles.background}>
      <Wrapper>
        <div className={styles.headers}>
          <h2>NƏTİCƏLƏRİMİZ</h2>
          <p>Pasiyentlərimiz ilə əldə etdiyimiz müalicə nəticələrimiz.</p>
        </div>
        <div className={styles.boxs}>
            {photos.map((item)=>(
                <>
                <div className={styles.border1}>
                            <img src={item.image1} alt="" />
                            <img src={item.image2} alt="" />
                </div>
                <div className={styles.border1}>
                            <img src={item.image3} alt="" />
                            <img src={item.image4} alt="" />
                </div>
                <div className={styles.border1}>
                            <img src={item.image5} alt="" />
                            <img src={item.image6} alt="" />
                </div>
                </>
            ))}
        </div>
      </Wrapper>
    </div>
  );
};

export default Gallery;
