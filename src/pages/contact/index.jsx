import React, { useState } from "react";
import styles from "./index.module.css";
import Wrapper from "../../components/UI/wrapper";
import YusifPhoto from "../../assets/images/contact.png";
import { ClockIcon, LocationIcon, PhoneIcon } from "../../icons";
import { sendMessage } from "../../api";

const Contact = () => {
  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [gmail, setGmail] = useState("");
  const [message, setMessage] = useState("");
  const [phonenumber, setPhone] = useState("")
  const [successMessage, setSuccessMessage] = useState(""); // Yeni durum

  const handleSubmit = async (e) => {
    e.preventDefault(); // Sayfanın yenilenmesini engelle

    if (!firstname || !lastname || !gmail || !message || !phonenumber) {
      alert("Lütfen tüm alanları doldurun.");
      return;
    }

    try {
      const response = await sendMessage({
        firstname,
        lastname,
        gmail,
        message,
        phonenumber
      });

      setSuccessMessage("Mesajınız başarıyla gönderildi!"); // Başarı mesajını ayarla
      console.log("Mesaj gönderildi: " + response.data);

      // Formu temizle
      setFirstName("");
      setLastName("");
      setGmail("");
      setMessage("");
      setPhone("")
    } catch (err) {
      alert("Mesaj gönderilmedi, bir sorun oluştu.");
    }
  };

  return (
    <div className={styles.background}>
      <Wrapper>
        <div className={styles.headerControl}>
          <div className={styles.location}>
            <LocationIcon />
            <h2>Düzce,Kocaeli,İstanbul</h2>
          </div>
          <div className={styles.clockOpen}>
            <ClockIcon />
            <h2>Pazartesi - Cuma 08:00-19:00</h2>
          </div>
          <div className={styles.phone}>
            <PhoneIcon />
            <h2>
              <a href="tel:0543 406 35 44" className={styles.phoneNumber}>
              0543 406 35 44
              </a>
            </h2>
          </div>
        </div>
        <div className={styles.control}>
          <div className={styles.images}>
            <h1>Bize Ulaşın</h1>
            <h2>
              Eternal Sağlık ekibi olarak müşteri memnuniyetini öncelikli
              hedeflerimiz arasına koyan bir firma olarak, size en kısa sürede
              geri dönüş yapacağız.
            </h2>
            <img src={YusifPhoto} alt="Yusif" />
          </div>
          <form className={styles.texts} onSubmit={handleSubmit}>
            <label htmlFor="">
              Adınız*
              <input
                value={firstname}
                onChange={(e) => setFirstName(e.target.value)}
                placeholder="Adınızı yazın"
                type="text"
                required
              />
            </label>
            <label htmlFor="">
              Soyadınız*
              <input
                value={lastname}
                onChange={(e) => setLastName(e.target.value)}
                placeholder="Soyadınızı yazın"
                type="text"
                required
              />
            </label>

            <label htmlFor="">
              E-posta*
              <input
                value={gmail}
                onChange={(e) => setGmail(e.target.value)}
                placeholder="Mailinizi yazın"
                type="email"
                required
              />
            </label>

            <label htmlFor="">
              Numara*
              <input
                value={phonenumber}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="Numaranızı yazın"
                type="text"
                required
              />
            </label>
            <label htmlFor="" className={styles.textArea}>
              Mesajınız*
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                name=""
                id=""
                cols="30"
                rows="10"
                required
              ></textarea>
            </label>
            <label htmlFor="" className={styles.buttonControl}>
              <button type="submit">Mesajı gönder</button>
              {successMessage && <span className={styles.success}>{successMessage}</span>} {/* Başarı mesajı */}
            </label>
          </form>
        </div>
        <div className={styles.maps}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3021.401144126256!2d30.3928889!3d40.77519439999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNDDCsDQ2JzMwLjciTiAzMMKwMjMnMzQuNCJF!5e0!3m2!1str!2saz!4v1734266122992!5m2!1str!2saz%22"
            className={styles.map}
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
          <h2>Sağlık hizmetinizi ayağınıza getirmek için buradayız.</h2>
        </div>
      </Wrapper>
    </div>
  );
};

export default React.memo(Contact);
