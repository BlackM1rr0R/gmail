import React, { useState,useReducer } from "react";
import styles from "./index.module.css";
import Wrapper from "../../components/UI/wrapper";
import { GreenIcon, SpineIcon, SpineIcon2, SpineIcon3 } from "../../icons";
import Mrt from "../../assets/images/mrt1.png";
import Xtray from "../../assets/images/xtray1.png";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import Xeste1 from "../../assets/images/xeste1.png";
import Xeste2 from "../../assets/images/xeste2.png";
import Xeste3 from "../../assets/images/xeste1.png";
import Xeste4 from "../../assets/images/xeste2.png";
import Xeste5 from "../../assets/images/xeste1.png";
import Xeste6 from "../../assets/images/xeste2.png";
const initialState = {
  idiopatiks: true,
  konjenental: false,
  neyromuskulyar: false,
  kifoz: false,
};
function reducer(state, action) {
  switch (action.type) {
    case 'idiopatiks':
      return { idiopatiks: true, konjenental: false, neyromuskulyar: false, kifoz: false };
    case 'konjenental':
      return { idiopatiks: false, konjenental: true, neyromuskulyar: false, kifoz: false };
    case 'neyromuskulyar':
      return { idiopatiks: false, konjenental: false, neyromuskulyar: true, kifoz: false };
    case 'kifoz':
      return { idiopatiks: false, konjenental: false, neyromuskulyar: false, kifoz: true };
    default:
      return state;
  }
}
const Idiopatik = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [photos, setPhotos] = useState([
    { image: Xeste1 },
    { image: Xeste2 },
    { image: Xeste3 },
    { image: Xeste4 },
    { image: Xeste5 },
    { image: Xeste6 },
  ]);
  return (
    <div className={styles.background}>
      <Wrapper>
        <div className={styles.buttons}>
          <div onClick={() => dispatch({ type: 'idiopatiks' })} className={styles.button1}>
            <button
              className={`${state.idiopatiks ? styles.idiopatiks : styles.button}`}
            >
              Idiopatik
            </button>
          </div>
          <div onClick={() => dispatch({ type: 'konjenental' })} className={styles.button2}>
            <button
              className={`${state.konjenental ? styles.konjenental : styles.button}`}
            >
              Konjenental
            </button>
          </div>
          <div onClick={() => dispatch({ type: 'neyromuskulyar' })} className={styles.button3}>
            <button
              className={`${
                state.neyromuskulyar ? styles.neyromuskulyar : styles.button
              }`}
            >
              Neyromuskulyar
            </button>
          </div>
          <div onClick={() => dispatch({ type: 'kifoz' })} className={styles.button4}>
            <button className={`${state.kifoz ? styles.kifoz : styles.button}`}>
              Kifoz
            </button>
          </div>
        </div>
        {state.idiopatiks ? (
          <>
            <div className={styles.idiopatikheaders}>
              <h2>Idiopatik Skolioz</h2>
              <p>Pasiyentlərimiz ilə əldə etdiyimiz müalicə nəticələrimiz.</p>
            </div>
            <div className={styles.boxs}>
              <div className={styles.boxsheader}>
                <h2>The MMI Advantage</h2>
              </div>
              <div className={styles.controlboxs}>
                <div className={styles.boxs1}>
                  <div className={styles.spin1}>
                    <SpineIcon />
                  </div>
                  <div className={styles.boxstexts1}>
                    <h2>Leading spine imaging core lab</h2>
                  </div>
                  <div className={styles.boxsdescription1}>
                    <p>
                      We estimate MMI has been involved in ~80% of regulated
                      spine trials run in the U.S. over the past 20 years.
                    </p>
                  </div>
                </div>
                <div className={styles.boxs1}>
                  <div className={styles.spin1}>
                    <SpineIcon2 />
                  </div>
                  <div className={styles.boxstexts1}>
                    <h2>Gold standard QMA image analysis technology</h2>
                  </div>
                  <div className={styles.boxsdescription1}>
                    <p>
                      Highest accuracy and reproducibility of any published
                      method for quantitative spine measurements and has been
                      referenced in over 200 publications.
                    </p>
                  </div>
                </div>
                <div className={styles.boxs1}>
                  <div className={styles.spin1}>
                    <SpineIcon3 />
                  </div>
                  <div className={styles.boxstexts1}>
                    <h2>Leading spine imaging core lab</h2>
                  </div>
                  <div className={styles.boxsdescription1}>
                    <p>
                      Our staff and expert reviewers have extensive experience
                      across the full spectrum of spine treatments, including
                      fusion, motion preservation, augmentation, and deformity
                      correction.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.xtray}>
              <div className={styles.leftside}>
                <div className={styles.leftheader}>
                  <h2>Experience and Expertise</h2>
                </div>
                <div className={styles.leftdesc}>
                  <p>
                    MMI’s scientific experts have contributed hundreds of
                    publications to the scientific literature on spine imaging
                    and research. No other core lab offers our unique
                    combination of experienced readers, scientific expertise,
                    and specialized technology for spine clinical trials.
                  </p>
                </div>
                <div className={styles.mrt}>
                  <img src={Mrt} alt="Mrt" />
                </div>
              </div>
              <div className={styles.rightside}>
                <div className={styles.xtrayimage}>
                  <img src={Xtray} alt="" />
                </div>
                <div className={styles.rightdesc}>
                  <p>
                    MMI has extensive experience with motion preserving
                    technology, including total disc replacement, facet
                    replacement, disc repair and regeneration, and dynamic
                    stabilization therapies. Our spine fusion experience
                    includes assessments of allografts, autografts, and bone
                    graft substitutes. We also have experience with deformity
                    correction, interspinous distraction, and fracture
                    stabilization and healing technologies. We are leaders in
                    the evaluation of biologic products for bone and soft-tissue
                    repair and have evaluated an array of novel treatments to
                    slow or reverse disc degeneration and promote bone healing
                    following spine fusion procedures.We are experienced in
                    virtually all major quantitative and semi- quantitative
                    scoring systems to assess disease severity and response to
                    therapy from medical imaging. We support image calibration
                    strategies through the use of XCalibR™, MMI’s proprietary
                    X-ray Calibration Ring marker. When appropriate, we apply
                    validated, computer-assisted methods to objectively document
                    the effect of new treatments. MMI’s proprietary and patented
                    QMA technology produces accurate and reproducible
                    measurements from spine radiographic images and has been
                    published in over 200 peer-reviewed articles. Learn more
                    about
                  </p>
                </div>
              </div>
            </div>
            <div className={styles.swiper}>
              <Swiper
                modules={[Autoplay, Pagination]}
                className={styles.price}
                spaceBetween={50}
                slidesPerView={3}
                autoplay={{
                  delay: 2000,
                  disableOnInteraction: false,
                }}
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
                {photos.map((item, index) => (
                  <SwiperSlide key={index} className={styles.borders}>
                    <img src={item.image} alt={`Slide ${index}`} />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
            <div className={styles.about}>
              <div className={styles.aboutheaders}>
                <h2>What We Offer</h2>
                <h1>Analysis Capabilities</h1>
              </div>
              <div className={styles.list}>
                <ul className={styles.leftul}>
                  <div className={styles.list1}>
                    <GreenIcon />
                    <li>
                      Quantitative spine measurements (e.g. rotation,
                      translation, center of rotation, disc height, lordosis)
                    </li>
                  </div>
                  <div className={styles.list1}>
                    <GreenIcon />
                    <li>
                      Quantitative spine measurements (e.g. rotation,
                      translation, center of rotation, disc height, lordosis)
                    </li>
                  </div>
                  <div className={styles.list1}>
                    <GreenIcon />
                    <li>
                      Quantitative spine measurements (e.g. rotation,
                      translation, center of rotation, disc height, lordosis)
                    </li>
                  </div>
                  <div className={styles.list1}>
                    <GreenIcon />
                    <li>
                      Quantitative spine measurements (e.g. rotation,
                      translation, center of rotation, disc height, lordosis)
                    </li>
                  </div>
                  <div className={styles.list1}>
                    <GreenIcon />
                    <li>
                      Quantitative spine measurements (e.g. rotation,
                      translation, center of rotation, disc height, lordosis)
                    </li>
                  </div>
                </ul>
                <ul className={styles.leftul}>
                  <div className={styles.list1}>
                    <GreenIcon />
                    <li>
                      Quantitative spine measurements (e.g. rotation,
                      translation, center of rotation, disc height, lordosis)
                    </li>
                  </div>
                  <div className={styles.list1}>
                    <GreenIcon />
                    <li>
                      Quantitative spine measurements (e.g. rotation,
                      translation, center of rotation, disc height, lordosis)
                    </li>
                  </div>
                  <div className={styles.list1}>
                    <GreenIcon />
                    <li>
                      Quantitative spine measurements (e.g. rotation,
                      translation, center of rotation, disc height, lordosis)
                    </li>
                  </div>
                  <div className={styles.list1}>
                    <GreenIcon />
                    <li>
                      Quantitative spine measurements (e.g. rotation,
                      translation, center of rotation, disc height, lordosis)
                    </li>
                  </div>
                  <div className={styles.list1}>
                    <GreenIcon />
                    <li>
                      Quantitative spine measurements (e.g. rotation,
                      translation, center of rotation, disc height, lordosis)
                    </li>
                  </div>
                </ul>
              </div>
            </div>
          </>
        ) : (
          ""
        )}
        {state.konjenental ? (
          <>
            <div className={styles.idiopatikheaders}>
              <h2>Konjenental Skolioz</h2>
              <p>Pasiyentlərimiz ilə əldə etdiyimiz müalicə nəticələrimiz.</p>
            </div>
            <div className={styles.boxs}>
              <div className={styles.boxsheader}>
                <h2>The MMI Advantage</h2>
              </div>
              <div className={styles.controlboxs}>
                <div className={styles.boxs1}>
                  <div className={styles.spin1}>
                    <SpineIcon />
                  </div>
                  <div className={styles.boxstexts1}>
                    <h2>Leading spine imaging core lab</h2>
                  </div>
                  <div className={styles.boxsdescription1}>
                    <p>
                      We estimate MMI has been involved in ~80% of regulated
                      spine trials run in the U.S. over the past 20 years.
                    </p>
                  </div>
                </div>
                <div className={styles.boxs1}>
                  <div className={styles.spin1}>
                    <SpineIcon2 />
                  </div>
                  <div className={styles.boxstexts1}>
                    <h2>Gold standard QMA image analysis technology</h2>
                  </div>
                  <div className={styles.boxsdescription1}>
                    <p>
                      Highest accuracy and reproducibility of any published
                      method for quantitative spine measurements and has been
                      referenced in over 200 publications.
                    </p>
                  </div>
                </div>
                <div className={styles.boxs1}>
                  <div className={styles.spin1}>
                    <SpineIcon3 />
                  </div>
                  <div className={styles.boxstexts1}>
                    <h2>Leading spine imaging core lab</h2>
                  </div>
                  <div className={styles.boxsdescription1}>
                    <p>
                      Our staff and expert reviewers have extensive experience
                      across the full spectrum of spine treatments, including
                      fusion, motion preservation, augmentation, and deformity
                      correction.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.xtray}>
              <div className={styles.leftside}>
                <div className={styles.leftheader}>
                  <h2>Experience and Expertise</h2>
                </div>
                <div className={styles.leftdesc}>
                  <p>
                    MMI’s scientific experts have contributed hundreds of
                    publications to the scientific literature on spine imaging
                    and research. No other core lab offers our unique
                    combination of experienced readers, scientific expertise,
                    and specialized technology for spine clinical trials.
                  </p>
                </div>
                <div className={styles.mrt}>
                  <img src={Mrt} alt="Mrt" />
                </div>
              </div>
              <div className={styles.rightside}>
                <div className={styles.xtrayimage}>
                  <img src={Xtray} alt="" />
                </div>
                <div className={styles.rightdesc}>
                  <p>
                    MMI has extensive experience with motion preserving
                    technology, including total disc replacement, facet
                    replacement, disc repair and regeneration, and dynamic
                    stabilization therapies. Our spine fusion experience
                    includes assessments of allografts, autografts, and bone
                    graft substitutes. We also have experience with deformity
                    correction, interspinous distraction, and fracture
                    stabilization and healing technologies. We are leaders in
                    the evaluation of biologic products for bone and soft-tissue
                    repair and have evaluated an array of novel treatments to
                    slow or reverse disc degeneration and promote bone healing
                    following spine fusion procedures.We are experienced in
                    virtually all major quantitative and semi- quantitative
                    scoring systems to assess disease severity and response to
                    therapy from medical imaging. We support image calibration
                    strategies through the use of XCalibR™, MMI’s proprietary
                    X-ray Calibration Ring marker. When appropriate, we apply
                    validated, computer-assisted methods to objectively document
                    the effect of new treatments. MMI’s proprietary and patented
                    QMA technology produces accurate and reproducible
                    measurements from spine radiographic images and has been
                    published in over 200 peer-reviewed articles. Learn more
                    about
                  </p>
                </div>
              </div>
            </div>
            <div className={styles.swiper}>
              <Swiper
                modules={[Autoplay, Pagination]}
                className={styles.price}
                spaceBetween={50}
                slidesPerView={3}
                autoplay={{
                  delay: 2000,
                  disableOnInteraction: false,
                }}
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
                {photos.map((item, index) => (
                  <SwiperSlide key={index} className={styles.borders}>
                    <img src={item.image} alt={`Slide ${index}`} />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
            <div className={styles.about}>
              <div className={styles.aboutheaders}>
                <h2>What We Offer</h2>
                <h1>Analysis Capabilities</h1>
              </div>
              <div className={styles.list}>
                <ul className={styles.leftul}>
                  <div className={styles.list1}>
                    <GreenIcon />
                    <li>
                      Quantitative spine measurements (e.g. rotation,
                      translation, center of rotation, disc height, lordosis)
                    </li>
                  </div>
                  <div className={styles.list1}>
                    <GreenIcon />
                    <li>
                      Quantitative spine measurements (e.g. rotation,
                      translation, center of rotation, disc height, lordosis)
                    </li>
                  </div>
                  <div className={styles.list1}>
                    <GreenIcon />
                    <li>
                      Quantitative spine measurements (e.g. rotation,
                      translation, center of rotation, disc height, lordosis)
                    </li>
                  </div>
                  <div className={styles.list1}>
                    <GreenIcon />
                    <li>
                      Quantitative spine measurements (e.g. rotation,
                      translation, center of rotation, disc height, lordosis)
                    </li>
                  </div>
                  <div className={styles.list1}>
                    <GreenIcon />
                    <li>
                      Quantitative spine measurements (e.g. rotation,
                      translation, center of rotation, disc height, lordosis)
                    </li>
                  </div>
                </ul>
                <ul className={styles.leftul}>
                  <div className={styles.list1}>
                    <GreenIcon />
                    <li>
                      Quantitative spine measurements (e.g. rotation,
                      translation, center of rotation, disc height, lordosis)
                    </li>
                  </div>
                  <div className={styles.list1}>
                    <GreenIcon />
                    <li>
                      Quantitative spine measurements (e.g. rotation,
                      translation, center of rotation, disc height, lordosis)
                    </li>
                  </div>
                  <div className={styles.list1}>
                    <GreenIcon />
                    <li>
                      Quantitative spine measurements (e.g. rotation,
                      translation, center of rotation, disc height, lordosis)
                    </li>
                  </div>
                  <div className={styles.list1}>
                    <GreenIcon />
                    <li>
                      Quantitative spine measurements (e.g. rotation,
                      translation, center of rotation, disc height, lordosis)
                    </li>
                  </div>
                  <div className={styles.list1}>
                    <GreenIcon />
                    <li>
                      Quantitative spine measurements (e.g. rotation,
                      translation, center of rotation, disc height, lordosis)
                    </li>
                  </div>
                </ul>
              </div>
            </div>
          </>
        ) : (
          ""
        )}
        {state.neyromuskulyar ? (
          <>
            <div className={styles.idiopatikheaders}>
              <h2>Neyromuskulyar Skolioz</h2>
              <p>Pasiyentlərimiz ilə əldə etdiyimiz müalicə nəticələrimiz.</p>
            </div>
            <div className={styles.boxs}>
              <div className={styles.boxsheader}>
                <h2>The MMI Advantage</h2>
              </div>
              <div className={styles.controlboxs}>
                <div className={styles.boxs1}>
                  <div className={styles.spin1}>
                    <SpineIcon />
                  </div>
                  <div className={styles.boxstexts1}>
                    <h2>Leading spine imaging core lab</h2>
                  </div>
                  <div className={styles.boxsdescription1}>
                    <p>
                      We estimate MMI has been involved in ~80% of regulated
                      spine trials run in the U.S. over the past 20 years.
                    </p>
                  </div>
                </div>
                <div className={styles.boxs1}>
                  <div className={styles.spin1}>
                    <SpineIcon2 />
                  </div>
                  <div className={styles.boxstexts1}>
                    <h2>Gold standard QMA image analysis technology</h2>
                  </div>
                  <div className={styles.boxsdescription1}>
                    <p>
                      Highest accuracy and reproducibility of any published
                      method for quantitative spine measurements and has been
                      referenced in over 200 publications.
                    </p>
                  </div>
                </div>
                <div className={styles.boxs1}>
                  <div className={styles.spin1}>
                    <SpineIcon3 />
                  </div>
                  <div className={styles.boxstexts1}>
                    <h2>Leading spine imaging core lab</h2>
                  </div>
                  <div className={styles.boxsdescription1}>
                    <p>
                      Our staff and expert reviewers have extensive experience
                      across the full spectrum of spine treatments, including
                      fusion, motion preservation, augmentation, and deformity
                      correction.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.xtray}>
              <div className={styles.leftside}>
                <div className={styles.leftheader}>
                  <h2>Experience and Expertise</h2>
                </div>
                <div className={styles.leftdesc}>
                  <p>
                    MMI’s scientific experts have contributed hundreds of
                    publications to the scientific literature on spine imaging
                    and research. No other core lab offers our unique
                    combination of experienced readers, scientific expertise,
                    and specialized technology for spine clinical trials.
                  </p>
                </div>
                <div className={styles.mrt}>
                  <img src={Mrt} alt="Mrt" />
                </div>
              </div>
              <div className={styles.rightside}>
                <div className={styles.xtrayimage}>
                  <img src={Xtray} alt="" />
                </div>
                <div className={styles.rightdesc}>
                  <p>
                    MMI has extensive experience with motion preserving
                    technology, including total disc replacement, facet
                    replacement, disc repair and regeneration, and dynamic
                    stabilization therapies. Our spine fusion experience
                    includes assessments of allografts, autografts, and bone
                    graft substitutes. We also have experience with deformity
                    correction, interspinous distraction, and fracture
                    stabilization and healing technologies. We are leaders in
                    the evaluation of biologic products for bone and soft-tissue
                    repair and have evaluated an array of novel treatments to
                    slow or reverse disc degeneration and promote bone healing
                    following spine fusion procedures.We are experienced in
                    virtually all major quantitative and semi- quantitative
                    scoring systems to assess disease severity and response to
                    therapy from medical imaging. We support image calibration
                    strategies through the use of XCalibR™, MMI’s proprietary
                    X-ray Calibration Ring marker. When appropriate, we apply
                    validated, computer-assisted methods to objectively document
                    the effect of new treatments. MMI’s proprietary and patented
                    QMA technology produces accurate and reproducible
                    measurements from spine radiographic images and has been
                    published in over 200 peer-reviewed articles. Learn more
                    about
                  </p>
                </div>
              </div>
            </div>
            <div className={styles.swiper}>
              <Swiper
                modules={[Autoplay, Pagination]}
                className={styles.price}
                spaceBetween={50}
                slidesPerView={3}
                autoplay={{
                  delay: 2000,
                  disableOnInteraction: false,
                }}
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
                {photos.map((item, index) => (
                  <SwiperSlide key={index} className={styles.borders}>
                    <img src={item.image} alt={`Slide ${index}`} />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
            <div className={styles.about}>
              <div className={styles.aboutheaders}>
                <h2>What We Offer</h2>
                <h1>Analysis Capabilities</h1>
              </div>
              <div className={styles.list}>
                <ul className={styles.leftul}>
                  <div className={styles.list1}>
                    <GreenIcon />
                    <li>
                      Quantitative spine measurements (e.g. rotation,
                      translation, center of rotation, disc height, lordosis)
                    </li>
                  </div>
                  <div className={styles.list1}>
                    <GreenIcon />
                    <li>
                      Quantitative spine measurements (e.g. rotation,
                      translation, center of rotation, disc height, lordosis)
                    </li>
                  </div>
                  <div className={styles.list1}>
                    <GreenIcon />
                    <li>
                      Quantitative spine measurements (e.g. rotation,
                      translation, center of rotation, disc height, lordosis)
                    </li>
                  </div>
                  <div className={styles.list1}>
                    <GreenIcon />
                    <li>
                      Quantitative spine measurements (e.g. rotation,
                      translation, center of rotation, disc height, lordosis)
                    </li>
                  </div>
                  <div className={styles.list1}>
                    <GreenIcon />
                    <li>
                      Quantitative spine measurements (e.g. rotation,
                      translation, center of rotation, disc height, lordosis)
                    </li>
                  </div>
                </ul>
                <ul className={styles.leftul}>
                  <div className={styles.list1}>
                    <GreenIcon />
                    <li>
                      Quantitative spine measurements (e.g. rotation,
                      translation, center of rotation, disc height, lordosis)
                    </li>
                  </div>
                  <div className={styles.list1}>
                    <GreenIcon />
                    <li>
                      Quantitative spine measurements (e.g. rotation,
                      translation, center of rotation, disc height, lordosis)
                    </li>
                  </div>
                  <div className={styles.list1}>
                    <GreenIcon />
                    <li>
                      Quantitative spine measurements (e.g. rotation,
                      translation, center of rotation, disc height, lordosis)
                    </li>
                  </div>
                  <div className={styles.list1}>
                    <GreenIcon />
                    <li>
                      Quantitative spine measurements (e.g. rotation,
                      translation, center of rotation, disc height, lordosis)
                    </li>
                  </div>
                  <div className={styles.list1}>
                    <GreenIcon />
                    <li>
                      Quantitative spine measurements (e.g. rotation,
                      translation, center of rotation, disc height, lordosis)
                    </li>
                  </div>
                </ul>
              </div>
            </div>
          </>
        ) : (
          ""
        )}
        {state.kifoz ? (
          <>
            <div className={styles.idiopatikheaders}>
              <h2>Kifoz</h2>
              <p>Pasiyentlərimiz ilə əldə etdiyimiz müalicə nəticələrimiz.</p>
            </div>
            <div className={styles.boxs}>
              <div className={styles.boxsheader}>
                <h2>The MMI Advantage</h2>
              </div>
              <div className={styles.controlboxs}>
                <div className={styles.boxs1}>
                  <div className={styles.spin1}>
                    <SpineIcon />
                  </div>
                  <div className={styles.boxstexts1}>
                    <h2>Leading spine imaging core lab</h2>
                  </div>
                  <div className={styles.boxsdescription1}>
                    <p>
                      We estimate MMI has been involved in ~80% of regulated
                      spine trials run in the U.S. over the past 20 years.
                    </p>
                  </div>
                </div>
                <div className={styles.boxs1}>
                  <div className={styles.spin1}>
                    <SpineIcon2 />
                  </div>
                  <div className={styles.boxstexts1}>
                    <h2>Gold standard QMA image analysis technology</h2>
                  </div>
                  <div className={styles.boxsdescription1}>
                    <p>
                      Highest accuracy and reproducibility of any published
                      method for quantitative spine measurements and has been
                      referenced in over 200 publications.
                    </p>
                  </div>
                </div>
                <div className={styles.boxs1}>
                  <div className={styles.spin1}>
                    <SpineIcon3 />
                  </div>
                  <div className={styles.boxstexts1}>
                    <h2>Leading spine imaging core lab</h2>
                  </div>
                  <div className={styles.boxsdescription1}>
                    <p>
                      Our staff and expert reviewers have extensive experience
                      across the full spectrum of spine treatments, including
                      fusion, motion preservation, augmentation, and deformity
                      correction.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.xtray}>
              <div className={styles.leftside}>
                <div className={styles.leftheader}>
                  <h2>Experience and Expertise</h2>
                </div>
                <div className={styles.leftdesc}>
                  <p>
                    MMI’s scientific experts have contributed hundreds of
                    publications to the scientific literature on spine imaging
                    and research. No other core lab offers our unique
                    combination of experienced readers, scientific expertise,
                    and specialized technology for spine clinical trials.
                  </p>
                </div>
                <div className={styles.mrt}>
                  <img src={Mrt} alt="Mrt" />
                </div>
              </div>
              <div className={styles.rightside}>
                <div className={styles.xtrayimage}>
                  <img src={Xtray} alt="" />
                </div>
                <div className={styles.rightdesc}>
                  <p>
                    MMI has extensive experience with motion preserving
                    technology, including total disc replacement, facet
                    replacement, disc repair and regeneration, and dynamic
                    stabilization therapies. Our spine fusion experience
                    includes assessments of allografts, autografts, and bone
                    graft substitutes. We also have experience with deformity
                    correction, interspinous distraction, and fracture
                    stabilization and healing technologies. We are leaders in
                    the evaluation of biologic products for bone and soft-tissue
                    repair and have evaluated an array of novel treatments to
                    slow or reverse disc degeneration and promote bone healing
                    following spine fusion procedures.We are experienced in
                    virtually all major quantitative and semi- quantitative
                    scoring systems to assess disease severity and response to
                    therapy from medical imaging. We support image calibration
                    strategies through the use of XCalibR™, MMI’s proprietary
                    X-ray Calibration Ring marker. When appropriate, we apply
                    validated, computer-assisted methods to objectively document
                    the effect of new treatments. MMI’s proprietary and patented
                    QMA technology produces accurate and reproducible
                    measurements from spine radiographic images and has been
                    published in over 200 peer-reviewed articles. Learn more
                    about
                  </p>
                </div>
              </div>
            </div>
            <div className={styles.swiper}>
              <Swiper
                modules={[Autoplay, Pagination]}
                className={styles.price}
                spaceBetween={50}
                slidesPerView={3}
                autoplay={{
                  delay: 2000,
                  disableOnInteraction: false,
                }}
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
                {photos.map((item, index) => (
                  <SwiperSlide key={index} className={styles.borders}>
                    <img src={item.image} alt={`Slide ${index}`} />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
            <div className={styles.about}>
              <div className={styles.aboutheaders}>
                <h2>What We Offer</h2>
                <h1>Analysis Capabilities</h1>
              </div>
              <div className={styles.list}>
                <ul className={styles.leftul}>
                  <div className={styles.list1}>
                    <GreenIcon />
                    <li>
                      Quantitative spine measurements (e.g. rotation,
                      translation, center of rotation, disc height, lordosis)
                    </li>
                  </div>
                  <div className={styles.list1}>
                    <GreenIcon />
                    <li>
                      Quantitative spine measurements (e.g. rotation,
                      translation, center of rotation, disc height, lordosis)
                    </li>
                  </div>
                  <div className={styles.list1}>
                    <GreenIcon />
                    <li>
                      Quantitative spine measurements (e.g. rotation,
                      translation, center of rotation, disc height, lordosis)
                    </li>
                  </div>
                  <div className={styles.list1}>
                    <GreenIcon />
                    <li>
                      Quantitative spine measurements (e.g. rotation,
                      translation, center of rotation, disc height, lordosis)
                    </li>
                  </div>
                  <div className={styles.list1}>
                    <GreenIcon />
                    <li>
                      Quantitative spine measurements (e.g. rotation,
                      translation, center of rotation, disc height, lordosis)
                    </li>
                  </div>
                </ul>
                <ul className={styles.leftul}>
                  <div className={styles.list1}>
                    <GreenIcon />
                    <li>
                      Quantitative spine measurements (e.g. rotation,
                      translation, center of rotation, disc height, lordosis)
                    </li>
                  </div>
                  <div className={styles.list1}>
                    <GreenIcon />
                    <li>
                      Quantitative spine measurements (e.g. rotation,
                      translation, center of rotation, disc height, lordosis)
                    </li>
                  </div>
                  <div className={styles.list1}>
                    <GreenIcon />
                    <li>
                      Quantitative spine measurements (e.g. rotation,
                      translation, center of rotation, disc height, lordosis)
                    </li>
                  </div>
                  <div className={styles.list1}>
                    <GreenIcon />
                    <li>
                      Quantitative spine measurements (e.g. rotation,
                      translation, center of rotation, disc height, lordosis)
                    </li>
                  </div>
                  <div className={styles.list1}>
                    <GreenIcon />
                    <li>
                      Quantitative spine measurements (e.g. rotation,
                      translation, center of rotation, disc height, lordosis)
                    </li>
                  </div>
                </ul>
              </div>
            </div>
          </>
        ) : (
          ""
        )}
      </Wrapper>
    </div>
  );
};

export default Idiopatik;
