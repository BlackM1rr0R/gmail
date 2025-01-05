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
import Photo10 from "../../assets/images/kanalma.webp";
import Photo11 from "../../assets/images/yarabakimi.jpg";
import Photo12 from "../../assets/images/solunum.webp";
import Photo13 from "../../assets/images/tansiyon.jpg";
import Photo14 from "../../assets/images/tedavi.jpg";
import IVSerum from '../../assets/images/serum.webp'
import IVTherapyPhoto from '../../assets/images/terapy.jpg'
import LabPackagesPhoto from '../../assets/images/lapda.jfif'
import HealthyLivingPhoto from '../../assets/images/healty.jpg'
import FAQPhoto from '../../assets/images/faq.jpg'

const LatestArticles = () => {


  const articles = useMemo(
    () => [
      {
        id: 15,
        img: `${IVSerum}`,
        link: "/details/15",
        info: "IV Serum Tedavisi"

      },
      {
        id: 16,
        img: `${IVTherapyPhoto}`,
        link: "/details/16",
        info: "IV Terapi"
      },
      {
        id: 17,
        img: `${LabPackagesPhoto}`,
        link: "/details/17",
        info: "Laboratuvar Paketleri"
      },
      {
        id: 18,
        img: `${HealthyLivingPhoto}`,
        link: "/details/18",
        info: "Sağlıklı Yaşam"
      },

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
      }, {
        id: 10,
        link: "/details/10",
        img: `${Photo10}`,
        info: "Evde Kan Alma Hizmeti",
      },
      {
        id: 11,
        link: "/details/11",
        img: `${Photo11}`,
        info: "Yara Bakımı ve Pansuman",
      },
      {
        id: 12,
        link: "/details/12",
        img: `${Photo12}`,
        info: "Solunum Terapisi",
      },
      {
        id: 13,
        link: "/details/13",
        img: `${Photo13}`,
        info: "Kalp ve Tansiyon Takibi",
      },
      {
        id: 14,
        link: "/details/14",
        img: `${Photo14}`,
        info: "Evde Fizik Tedavi Hizmetleri",
      },
      {
        id: 19,
        img: `${FAQPhoto}`,
        link: "/details/19",
        info: "Sıkça Sorulan Sorular"
      }

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
