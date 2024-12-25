import React, { useEffect, useState } from "react";
import axios from "axios";
import styles from "./index.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Navigation } from "swiper/modules";

const Logo = () => {
  const [reviews, setReviews] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await axios.get(
          "https://featurable.com/api/v1/widgets/ddd9981e-eda0-4798-a92b-2dca78041fb2",
          { withCredentials: true }
        );
        console.log("Yorumlar:", response.data.reviews); // Gelen veriyi kontrol edin
        setReviews(response.data.reviews || []);
      } catch (err) {
        setError("Yorumlar Yüklenemedi");
        console.error(err);
      }
    };

    fetchReviews();
  }, []);

  return (
    <div className={styles.background}>

      {error && <p className={styles.error}>{error}</p>}
      {reviews.length > 0 ? (
        <Swiper
          className={styles.price}
          spaceBetween={20}
          navigation={true} // Navigasyonu aktif et
          modules={[Navigation]} 
          slidesPerView={4.5}
          breakpoints={{
            0: {
              spaceBetween: 10,
              slidesPerView: 1.3,
            },
            768: {
              spaceBetween: 15,
              slidesPerView: 2.5,
            },
            992: {
              spaceBetween: 20,
              slidesPerView: 3.5,
            },
          }}
        >
          {reviews.map((review) => (
            <SwiperSlide key={review.reviewId}>
              <div className={styles.border}>

                <p>
                  {review.reviewer?.displayName}
                </p>
                <p>
                  <img
                    src={review.reviewer?.profilePhotoUrl}
                    alt={review.reviewer?.displayName}
                    style={{ width: "50px", height: "50px", borderRadius: "50%" }}
                  />
                </p>
                <p>
                  <strong>Puan:</strong> {review.starRating}/5
                </p>
                <h3>
                  <strong>Yorum:</strong> {review.comment}
                </h3>
                <p>
                  <strong>Tarih:</strong>{" "}
                  {new Date(review.createTime).toLocaleDateString()}
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      ) : (
        !error && <p>Yorumlar yükleniyor...</p>
      )}
    </div>
  );
};

export default React.memo(Logo);
