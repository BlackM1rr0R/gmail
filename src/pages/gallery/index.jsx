import React, { useMemo } from "react";
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
import { useNavigate } from "react-router-dom";

const Gallery = () => {
  const navigate = useNavigate();

  const photos = useMemo(
    () => [
      {
        id: 1,
        images: `${Photo1}`,
        info: "Outsourcing logistics talent in Ukraine guide",
      },
      {
        id: 2,
        images: `${Photo2}`,
        info: "Improve operational efficiency with remote staffing from Eastern Europe",
      },
      {
        id: 3,
        images: `${Photo3}`,
        info: "5 tips to handle time zone differences with offshore team",
      },
      {
        id: 4,
        images: `${Photo4}`,
        info: "How back office support drives business growth",
      },
      {
        id: 5,
        images: `${Photo5}`,
        info: "The 10 world’s largest companies that outsource to boost growth",
      },
      {
        id: 6,
        images: `${Photo6}`,
        info: "From Zelh with care: how we support our teams during war",
      },
      {
        id: 7,
        images: `${Photo7}`,
        info: "What makes Ukraine stand out – why outsource to Ukraine?",
      },
      {
        id: 8,
        images: `${Photo8}`,
        info: "5 Tips how to maintain corporate culture In remote teams",
      },
      {
        id: 9,
        images: `${Photo9}`,
        info: "Recruiting trends of 2024 — what the future of recruitment",
      },
    ],
    []
  );

  const handleNavigate = (id) => {
    navigate(`/details/${id}`);
  };

  return (
    <div className={styles.background}>
      <Wrapper>
        <div className={styles.headers}>
          <h2>Hastalıklar</h2>
          <p>Hastalıklar hakkında okuya bilirsiniz.</p>
        </div>
        <div className={styles.boxs}>
          {photos.map((item) => (
            <div
              key={item.id}
              className={styles.border}
              onClick={() => handleNavigate(item.id)}
            >
              <img src={item.images} alt={`Slide ${item.id}`} />
              <h2>{item.info}</h2>
            </div>
          ))}
        </div>
      </Wrapper>
    </div>
  );
};

export default React.memo(Gallery);
