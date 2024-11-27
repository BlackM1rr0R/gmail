import React, { useMemo } from "react";
import styles from './index.module.css'
import { useParams } from "react-router-dom";
import IshalPhoto from '../../assets/images/ishal.png'
import Wrapper from '../../components/UI/wrapper'
import { GarantieIcon } from "../../icons";
const Details = () => {
    const { id } = useParams(); // URL'deki id'yi al
    const photos = useMemo(
        () => [
            {
                id: 1,
                image: `${IshalPhoto}`,
                text: "İshal Durumunda Neler Yapılmalı?",
                textTwo: "Günlük yaşamı olumsuz etkileyen mide ve bağırsak sorunları arasında yer alan ishal, hem yetişkinlerde hem çocuklarda en çok görülen bulaşıcı hastalıklardan biridir. İshal, bireyin tuvalete çıkma sıklığını artırıp vücudun sıvı ve mineral dengesini de bozabilir. Bu nedenle ishale yol açan faktörleri ve ishalden korunma yollarını bilmek büyük önem taşır. İçeriğimizde İshal nedir?, İshal türleri nelerdir? ve İshal tedavisi nasıl olur? gibi merak edilen soruların yanıtlarını bulabilirsiniz.",
                headerText: "İshal Nedir? İshal Türleri Nelerdir? ",
                aboutHeaderText: "İshal, bağırsak hareketi sırasında gevşek ve sulu dışkılamaya neden olan, genellikle bir veya iki gün içerisinde kendiliğinden geçen bir sağlık problemidir. Yaygın bir sağlık problemi olan ishal hemen her yaştan insanı etkileyebilen ve vücutta su kaybına yol açan bir durumdur. İnsanlar yıl içerisinde pek çok kez bu sağlık problemini yaşayabilirler. Ancak ishal özellikle bebekler ve çocuklar için daha ciddi bir sağlık sorunu olabilir. ",
                typeHeaderText: "İshalin farklı türleri bulunur. Bunlar şu şekilde sıralanabilir:",
                oneTypeHeader: "Akut İshal (Kısa Süreli İshal):",
                aboutOneTypeHeader: "1 veya 2 gün süren ve herhangi bir tedavi gerektirmeden kendiliğinden geçen ishal türüdür. En yaygın ishal türü olan akut ishal genellikle bakteriyel bir enfeksiyon nedeniyle, güvenli olmayan yiyecek ya da su tüketiminden kaynaklanabilir.",
                twoTypeHeader: "Sürekli İshal:",
                aboutTwoTyperHeader: "Yaklaşık iki ila dört hafta süren ishal türüdür.",
                threeTypeHeader: "Kronik İshal (Uzun Süreli İshal):",
                aboutThreeTypeHeader: "Dört haftadan uzun süren ishal türüdür. Kronik ishal ciddi bir sağlık probleminden kaynaklanıyor olabilir ve özel bir tedavi gerektirebilir.",
                forKind: "Çocuklarda ve Bebeklerde İshal",
                aboutKind: "İshal durumunda bebeklere sıvı vermeye devam edilmesi elzemdir. Bebek eğer mamayla besleniyorsa normalden daha sık beslenmesi sağlanmalıdır. Anne sütüyle besleniyorsa da bebeğe daha sık süt verilmelidir. Bebeklerde ishalin yaklaşık iki hafta kadar sürebileceği de unutulmamalıdır.İshal çoğu zaman tedaviye ihtiyaç olmadan kendiliğinden geçen bir rahatsızlık olsa da bazı durumlarda tıbbi yardım almak gerekebilir. ",
                whyIshal: "İshal Neden Olur?",
                aboutIshal: "İshalin başlıca nedenleri: Crohn hastalığı ve ülseratif kolit gibi bağırsak hastalıkları, bakteriyel enfeksiyonlar, virüsler, bazı gıdalara karşı alerjiler, temiz olmayan gıdalar veya sulardaki bakteriler, gıda intoleransı (bazı besinleri sindirmede zorlanma), bazı kanser türleri, antibiyotik kullanımı ve bazı kanser ilaçları, mide veya safra kesesi ameliyatı, hipertiroidizm, bazı besin maddelerinin emiliminde sorun yaşama (malabsorpsiyon), huzursuz bağırsak sendromu.",
                beshil: "İshal Yapan Besinler Nelerdir?",
                aboutBeshil: "Süt ve süt ürünleri, baharatlı ve acı yiyecekler, işlenmiş gıdalar, brokoli, lahana, ıspanak, karnabahar gibi sebzeler, kahve ve kafein içeren gıdalar, kızartılmış ve yağlı besinler, alkol, şekerli ürünler ishale yol açabilir.",
                textBeshil: "Bu besinlerin yanı sıra yemekleri hızlı bir şekilde yemek ve fruktoz içeren meyveleri aşırı tüketmek de ishale neden olabilir. Özellikle fruktoz hassasiyeti olan bireylerin gaz, şişkinlik ve ishal gibi sorunlar yaşamamak için meyve tüketiminde daha dikkatli olmaları büyük önem taşır."



            },

        ],
        []
    );


    const photo = photos.find((item) => item.id === Number(id));

    if (!photo) {
        return <p>Bilgi bulunamadı</p>;
    }

    return (
        <div className={styles.background}>
            <Wrapper>
                <div className={styles.images}>
                    <div className={styles.imageWrapper}>
                        <img src={photo.image} alt="" />
                    </div>
                    <h2>{photo.text}</h2>
                </div>
                <div className={styles.textTwoBack}>
                    <p>{photo.textTwo}</p>
                </div>
                <div className={styles.headerText}>
                    <h1>{photo.headerText}</h1>
                    <p>{photo.aboutHeaderText}</p>
                    <h2>{photo.typeHeaderText}</h2>
                    <h3>{photo.oneTypeHeader} <h2>{photo.aboutOneTypeHeader}</h2>  </h3>
                    <h3>{photo.twoTypeHeader} <h2>{photo.aboutTwoTyperHeader}</h2>  </h3>
                    <h3>{photo.threeTypeHeader} <h2>{photo.aboutThreeTypeHeader}</h2>  </h3>
                    <h3>{photo.forKind}</h3>
                    <p>{photo.aboutKind}</p>
                    <h3>{photo.whyIshal}</h3>
                    <p>{photo.aboutIshal}</p>
                    <h3>{photo.beshil}</h3>
                    <p>{photo.aboutBeshil}</p>
                    <p>{photo.textBeshil}</p>
                </div>
                <div className={styles.garantie}>
                    <div className={styles.controlGarantie}>
                        <button><GarantieIcon /> Onaylanmış İçerik </button>
                        <h1>Verdiğimiz Bilgilere Güvenebilirsiniz</h1>
                        <h2>Bu içerik 360 Sağlık Tıbbi Yayın Kurulu tarafından onaylanmıştır. Tıbbi Yayın Kurulumuz, sağlık alanında güvenilir bilgiye erişim sağlamak amacıyla oluşturulmuş deneyimli doktor ve araştırmacılardan oluşan bir ekiptir.</h2>
                    </div>
                </div>

            </Wrapper>
        </div>
    );
};

export default Details;
