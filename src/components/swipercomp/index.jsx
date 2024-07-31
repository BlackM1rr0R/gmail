import React from "react";
import styles from "./index.module.css";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import Patient1 from "../../assets/images/patient1.png";
import Patient2 from "../../assets/images/patient1.png";
import Patient3 from "../../assets/images/patient3.png";
import Patient4 from "../../assets/images/patient4.png";
import Patient5 from "../../assets/images/patient5.png";

const SwiperComp = () => {
  return (
    <div className={styles.boxs}>
      <Swiper
        modules={[Autoplay, Pagination]}
        className={styles.price}
        spaceBetween={50}
        slidesPerView={3}
        pagination={{ clickable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
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
            slidesPerView: 3.5,
          },
        }}
      >
        <SwiperSlide>
          <div className={styles.images1}>
            <img className={styles.img1} src={Patient1} alt="Patient 1" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={styles.images1}>
            <img className={styles.img1} src={Patient2} alt="Patient 2" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={styles.images1}>
            <img className={styles.img1} src={Patient3} alt="Patient 3" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={styles.images1}>
            <img className={styles.img1} src={Patient4} alt="Patient 4" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={styles.images1}>
            <img className={styles.img1} src={Patient5} alt="Patient 5" />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default SwiperComp;
