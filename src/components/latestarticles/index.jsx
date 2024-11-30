import React, { useMemo } from "react";
import styles from './index.module.css';
import { Link, useParams } from "react-router-dom";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import LosemPhoto from '../../assets/images/losem.png'
import IshalPhoto from '../../assets/images/ishalphoto.png'
import EvdeTemel from '../../assets/images/evdetemel.png'
const LatestArticles = () => {


  const articles = useMemo(
    () => [
      {
        id: 1,
        link: "/details/1",
        img: `${IshalPhoto}`,
        header: "İshal Durumunda Neler Yapılmalı?",
      },
      {
        id: 2,
        link: "/details/1",
        img: `${LosemPhoto}`,
        header: "Lösemi Nedir? Lösemi Belirtileri ve Tedavisi",
      },
      {
        id: 3,
        link: "/details/1",
        img: `${EvdeTemel}`,
        header: "Evde Temel İlk Yardım",
      },
      {
        id: 3,
        link: "/details/1",
        img: `${LosemPhoto}`,
        header: "Lösemi Nedir? Lösemi Belirtileri ve Tedavisi",
      },
      {
        id: 3,
        link: "/details/1",
        img: `${LosemPhoto}`,
        header: "Lösemi Nedir? Lösemi Belirtileri ve Tedavisi",
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
                  <h2>{item.header}</h2>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>



    </div>
  );
};

export default LatestArticles;
