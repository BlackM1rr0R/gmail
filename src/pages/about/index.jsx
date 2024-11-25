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
                <h2><h1>360 Sağlık</h1> İle Tanışın</h2>
              </div>
              <div className={styles.profilpicture}>
                <img src={Yusif} alt="" />
              </div>
              <div className={styles.experience}>
                <h2>Misyonumuz</h2>
                <p>
                  Türkiye'de yaşayan her bireyin sağlık hizmetlerine kolay ve
                  hızlıca erişebilmesini amaçlıyoruz. Öncü bir kurum olarak tüm
                  Türkiye'ye kaliteli ve güvenli bir şekilde yerinde veya
                  uzaktan sağlık hizmeti sunma hedefini benimsiyoruz. Hasta
                  memnuniyetini ve toplum sağlığını her şeyin önünde tutarak
                  geleceğin sağlık hizmetlerini şekillendirmeyi hedefliyoruz.
                  360 Sağlık; kaliteli hizmet anlayışı, uzman sağlık
                  profesyonelleri ve güçlü teknolojik altyapısıyla herkesin 7/24
                  sağlık hizmetlerine erişebilmesi için çalışmalarını
                  sürdürüyor.
                </p>
              </div>
            </div>
            <div className={styles.rightside}>
              <div className={styles.education}>
                <h2>Hakkımızda</h2>
                <p>
                  Yeni nesil sağlık hizmetleriyle öne çıkan, sektörünün genç ve
                  dinamik şirketi 360 Sağlık; bir Doğan Holding iştirakidir.
                  Türkiye'nin önde gelen gruplarından biri olan Doğan Holding,
                  1959'dan bu yana hemen her alanda faaliyet göstermektedir.
                  Doğan Grubu; elektrik üretimi, sanayi&ticaret, otomotiv
                  ticaret&pazarlama, finansman&yatırım, internet&eğlence ve
                  gayrimenkul yatırımları alanlarında yenilikçi vizyon ve
                  müşteri odaklı yöntem anlayışını benimser. Değer odaklı bir
                  kurum olan Doğan Grubu, iş dünyasında kurumsal ve etik
                  değerlere sahip çıkarak hem ulusal hem uluslararası kurumlara
                  örnek olur.
                </p>
              </div>
              <div className={styles.diplom}>
                <h2>Vizyonumuz</h2>
                <p>
                  Sağlık hizmeti almak, her bireyin temel hakkıdır. Biz de bu
                  hakkı koruma ve iyileştirme sorumluluğunu taşıyoruz.
                  Teknolojik, hasta odaklı, çağdaş, güvenilir ve kaliteli sağlık
                  hizmetinin, uzaktan ve/veya hastanın bulunduğu yerde
                  verilmesini hedefliyoruz. Türkiye'nin her noktasına ulaşacak
                  multidisipliner ekibimiz ve teknolojik altyapımız ile
                  uzaklıkları aşarak, her türlü uzmanlık branşında, kişilerin
                  ihtiyacı olan sağlık hizmetlerine 7 gün 24 saat ulaşabilmesini
                  sağlayacağız.
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
              <h1>360 Sağlık Yönetim Kurulumuz</h1>
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
