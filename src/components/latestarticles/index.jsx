import React, { useMemo } from "react";
import styles from './index.module.css';
import { Link, useParams } from "react-router-dom";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import Photo1 from "../../assets/images/ishalphoto.png";
import Photo2 from "../../assets/images/diyabet.webp";
import Photo3 from "../../assets/images/astim.jpg";
import Photo4 from "../../assets/images/kalp.jpg";
import Photo5 from "../../assets/images/cilt.jpg";
import Photo6 from "../../assets/images/covid.jpg";
import Photo7 from "../../assets/images/iyne.jpg";
import Photo8 from "../../assets/images/iltihap.webp";
import Photo9 from "../../assets/images/idrar.jpg";
const LatestArticles = () => {


  const articles = useMemo(
    () => [
      {
        id: 7,
        link: "/details/7",
        img: `${Photo7}`,
        info: "Enjeksiyon (iğne)",
      },
      {
        id: 2,
        link: "/details/2",
        img: `${Photo2}`,
        info: "Diyabet (Şeker Hastalığı)",
      },
      {
        id: 3,
        link: "/details/3",
        img: `${Photo3}`,
        info: "Astım",
      },
      {
        id: 4,
        link: "/details/4",
        img: `${Photo4}`,
        info: "Kalp Yetmezliği",
      },
      {
        id: 5,
        link: "/details/5",
        img: `${Photo5}`,
        info: "Cilt Lekeleri ve Yorgunluk",
      },
      {
        id: 1,
        link: "/details/1",
        img: `${Photo1}`,
        info: "İshal Durumunda Neler Yapılmalı?",
      },
      {
        id: 6,
        link: "/details/6",
        img: `${Photo6}`,
        info: "Covid-19 (PCR Testi)",
      },
    
      {
        id: 8,
        link: "/details/8",
        img: `${Photo8}`,
        info: "İleri Derece İltihaplanmalar",
      },
      {
        id: 9,
        link: "/details/9",
        img: `${Photo9}`,
        info: "İdrar Yolu Problemleri ",
      },
    ],
    []
  );

  return (
    <div className={styles.background}>
      <div className={styles.controlHeader}>
        <h2>Son hizmetlerimiz</h2>
        <Link to="/gallery">
          Hepsine bak
        </Link>
      </div>
      <div className={styles.boxs}>

        <Swiper
          modules={[Autoplay, Pagination]}
          className={styles.price}
          spaceBetween={50}
          slidesPerView={3}
          autoplay={true}
          pagination={{ clickable: true }}
          breakpoints={{
            0: {
              spaceBetween: 24,
              slidesPerView: 1,
            },
            768: {
              spaceBetween: 24,
              slidesPerView: 2,
            },
            992: {
              spaceBetween: 50,
              slidesPerView: 3,
            },
          }}
        >
          {articles.map((item) => (
            <SwiperSlide key={item.id}>
              <Link
                to={item.link}
                className={styles.border}
              >
                  <img src={item.img} alt="" />
                  <h2>{item.info}</h2>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>



    </div>
  );
};

export default LatestArticles;
