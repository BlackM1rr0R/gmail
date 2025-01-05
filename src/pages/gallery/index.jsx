import React, { useMemo } from "react";
import styles from "./index.module.css";
import Wrapper from "../../components/UI/wrapper";
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
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const Gallery = () => {
  const navigate = useNavigate();

  const photos = useMemo(
    () => [
      {
        id: 1,
        images: `${Photo1}`,
        info: "İshal Durumunda Neler Yapılmalı?",
      },
      {
        id: 2,
        images: `${Photo2}`,
        info: "Diyabet (Şeker Hastalığı)",
      },
      {
        id: 3,
        images: `${Photo3}`,
        info: "Astım",
      },
      {
        id: 4,
        images: `${Photo4}`,
        info: "Kalp Yetmezliği",
      },
      {
        id: 5,
        images: `${Photo5}`,
        info: "Cilt Lekeleri ve Yorgunluk",
      },
      {
        id: 6,
        images: `${Photo6}`,
        info: "Covid-19 (PCR Testi)",
      },
      {
        id: 7,
        images: `${Photo7}`,
        info: "Enjeksiyon (iğne)",
      },
      {
        id: 8,
        images: `${Photo8}`,
        info: "İleri Derece İltihaplanmalar",
      },
      {
        id: 9,
        images: `${Photo9}`,
        info: "İdrar Yolu Problemleri ",
      },
      {
        id: 10,
  
        images: `${Photo10}`,
        info: "Evde Kan Alma Hizmeti",
      },
      {
        id: 11,
   
        images: `${Photo11}`,
        info: "Yara Bakımı ve Pansuman",
      },
      {
        id: 12,
      
        images: `${Photo12}`,
        info: "Solunum Terapisi",
      },
      {
        id: 13,

        images: `${Photo13}`,
        info: "Kalp ve Tansiyon Takibi",
      },
      {
        id: 14,
   
        images: `${Photo14}`,
        info: "Evde Fizik Tedavi Hizmetleri",
      },
      {
        id: 15,
        images: `${IVSerum}`,
       info: "IV Serum Tedavisi"
       
    },
    {
        id: 16,
        images: `${IVTherapyPhoto}`,
       info: "IV Terapi"
    },
    {
        id: 17,
        images: `${LabPackagesPhoto}`,
        info: "Laboratuvar Paketleri"
    },
    {
        id: 18,
        images: `${HealthyLivingPhoto}`,
       info: "Sağlıklı Yaşam"
    },
    {
        id: 19,
        images: `${FAQPhoto}`,
       info: "Sıkça Sorulan Sorular"
    }
    ],
    []
  );

  const handleNavigate = (id) => {
    navigate(`/details/${id}`);
  };

  return (
    <>
    <Helmet>
    <title>Hastalıklar | ETERNAL Sağlık Hizmetleri</title>
    <meta
      name="description"
      content="ETERNAL Sağlık Hizmetleri, çeşitli hastalıklar hakkında bilgi sağlar ve tedavi seçenekleri sunar."
    />
    <meta
      name="keywords"
      content="Hastalıklar, Sağlık, ETERNAL, Tedavi, Klinik, Hastalık Tedavisi"
    />
    <link rel="canonical" href="https://www.eternal.com/hastaliklar" />
  </Helmet>
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
    </>

  );
};

export default React.memo(Gallery);
