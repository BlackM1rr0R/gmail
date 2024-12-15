import React from "react";
import styles from "./index.module.css";
import Yusif from "../../assets/images/360photo.png";
import YusifDiplom from "../../assets/images/360photo1.png";
import Wrapper from "../../components/UI/wrapper";
import DoctorPhoto from '../../assets/images/doctorphoto.png'
import FillImage from '../../assets/images/360fill.png'
const About = () => {
  return (
    <>
      <Wrapper>
        <div className={styles.aboutText}>
          <h2>Hakkımızda</h2>
        </div>
        <div className={styles.background}>
          <div className={styles.control}>
            <div className={styles.leftside}>
              <div className={styles.header}>
                <h2><h1>Eternal Sağlık </h1> İle Tanışın</h2>
              </div>
              <div className={styles.profilpicture}>
                <img src={Yusif} alt="" />
              </div>
              <div className={styles.experience}>
                <h2>Misyonumuz</h2>
                <p>
                  ETERNAL SAĞLIK HİZMETLERİ olarak, uzman bir ekip tarafından sunulan kapsamlı yerinde bakım hizmetleri sunmaktayız. Ekibimiz, deneyimli doktorlar, hemşireler ve diğer sağlık profesyonellerinden oluşur ve her biri alanında uzmandır. Hastalarımızın ihtiyaçlarına özel olarak tasarlanan bakım planlarıyla, onların güvenliğini, konforunu ve sağlıklarını sağlamayı hedefliyoruz.
                </p>
              </div>
            </div>
            <div className={styles.rightside}>
              <div className={styles.education}>
                <h2>Hakkımızda</h2>
                <p>

                  Müşteri memnuniyetine/deneyimine büyük önem veriyoruz ve her bir hastamızı ailemizin bir parçası gibi görüyoruz. İhtiyaçlarını anlamak, onları dinlemek ve gereksinimlerine göre uygun çözümler sunmak için bireysel bir yaklaşım benimsiyoruz. Her hasta için kişiselleştirilmiş bir bakım planı oluşturarak, onların özel gereksinimlerini karşılamak ve en uygun tedaviyi sağlamak için çalışıyoruz.
                </p>
              </div>
              <div className={styles.diplom}>
                <h2>Vizyonumuz</h2>
                <p>
                  Eternal sağlık olarak, evde bakım hizmetlerimizi güvenilirlik, kalite ve etik değerlere dayandırıyoruz. Ekip olarak, her zaman en son tıbbi gelişmeleri takip ediyor ve en iyi uygulamaları kullanarak hastalarımıza en iyi bakımı sunmaya çalışıyoruz.
                </p>
              </div>
              <div className={styles.sertifikat}>
                <img src={YusifDiplom} alt="" />
              </div>
            </div>
          </div>
          <div className={styles.workPerson}>
            <div className={styles.controlWorkPerson}>
              <div className={styles.leftWork}>
                <h1>ETERNAL Sağlık Yönetim Kurulumuz</h1>
                <h2>We recognize that our strength lies in our people that
                  bring unparalleled value to our operations. Our C-level
                  team directs 360 Saglig hizmeti's strategic growth and supports other
                  businesses in navigating the market challenges.</h2>
              </div>
              <div className={styles.rightWork}>
                <div className={styles.controlRightWork}>
                  <img src={DoctorPhoto} alt="" />
                  <div className={styles.nameRight}>
                    <h2>Yuriy Radchishin</h2>
                    <h3>President / COO</h3>

                  </div>
                </div>
                <hr />
                <div className={styles.controlRightWork}>
                  <img src={DoctorPhoto} alt="" />
                  <div className={styles.nameRight}>
                    <h2>Yuriy Radchishin</h2>
                    <h3>President / COO</h3>

                  </div>
                </div>
                <hr />
                <div className={styles.controlRightWork}>
                  <img src={DoctorPhoto} alt="" />
                  <div className={styles.nameRight}>
                    <h2>Yuriy Radchishin</h2>
                    <h3>President / COO</h3>

                  </div>
                </div>
                <hr />
              </div>
            </div>
          </div>
          <div className={styles.images}>
            <img src={FillImage} alt="" />
          </div>
          <div className={styles.hospitalText}>
            <h2>Sağlık hizmetinizi ayağınıza getirmek için buradayız.</h2>
            <p>Bitedavi’yi uygulama marketlerinden indirerek hizmetlerimizi incelemeye,
              rezervasyon oluşturmaya ve tedavi süreçlerinize şimdi başlayabilirsiniz.</p>
          </div>
        </div>
      </Wrapper>
    </>
  );
};

export default React.memo(About);
