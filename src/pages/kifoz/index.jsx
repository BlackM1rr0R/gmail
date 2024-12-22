import React, { useReducer } from "react";
import styles from "./index.module.css";
import Wrapper from "../../components/UI/wrapper";
import DoctorSvg from "../../assets/images/doktor.png";
import AmbulanceSvg from "../../assets/images/ambulance.png";
import Patient from "../../assets/images/hasta.png";
import {
  GrayArrow,
  GrayArrowTrue,
  GreenArrow,
  GreenArrowTrue,
  OrangeArrow,
  OrangeArrowTrue,
  RedArrow,
  RedArrowTrue,
  VioletArrow,
  VioletArrowTrue,
} from "../../icons";
import { Helmet } from "react-helmet-async";
const initialState = {
  green: true,
  orange: false,
  red: false,
  violet: false,
};
function reducer(state, action) {
  switch (action.type) {
    case "green":
      return { green: true, orange: false, red: false, violet: false };
    case "orange":
      return { green: false, orange: true, red: false, violet: false };
    case "red":
      return { green: false, orange: false, red: true, violet: false };
    case "violet":
      return { green: false, orange: false, red: false, violet: true };
  }
}
const Kifoz = () => {
  const [state, setState] = useReducer(reducer, initialState);
  return (<>
        <Helmet>
        <title>Hizmetlerimiz | ETERNAL Sağlık Hizmetleri</title>
        <meta
          name="description"
          content="ETERNAL Sağlık Hizmetleri, kaliteli sağlık hizmetleriyle hastalarına en iyi çözümleri sunmaktadır."
        />
        <meta
          name="keywords"
          content="Hizmetler, Sağlık Hizmetleri, ETERNAL, Klinik, Sağlık Çözümleri"
        />
        <link rel="canonical" href="https://www.eternal.com/hizmetlerimiz" />
      </Helmet>
  
    <div className={styles.background}>
      <Wrapper>
        <div className={styles.control}>
          <div className={styles.headerText}>
            <h2>
              <h1>Sağlığı</h1> Eve Getiriyoruz
            </h2>
          </div>
          <div className={styles.boxOne}>
            <div className={styles.leftBox}>
              <h1>Hizmetlerimiz</h1>
              <div className={styles.controlLeftBox}>
                <div className={styles.leftBoxText}>
                  <div className={styles.leftBoxHeader}>
                    <h2>01.</h2>
                  </div>
                  <div className={styles.leftBoxBottom}>
                    <h2>Evde Doktor Hizmeti</h2>
                    <p>
                      Evde doktor hizmeti, hastaların kendi evlerinde kaliteli
                      sağlık hizmeti alabilmeleri için kaliteli bir hizmet
                      sunar.
                    </p>
                  </div>
                </div>
                <div className={styles.leftBoxSvg}>
                  <img src={DoctorSvg} alt="" />
                </div>
              </div>
            </div>
            <div className={styles.controlMiddleBox}>
              <div className={styles.middleBoxText}>
                <div className={styles.middleBoxHeader}>
                  <h2>02.</h2>
                </div>
                <div className={styles.middleBoxBottom}>
                  <h2>Evde Hemşire Hizmeti</h2>
                  <p>
                    Evde hemşire hizmeti, özellikle yaşlı, yatalak veya kronik
                    rahatsızlıkları olan bireyler için büyük bir kolaylık
                    sağlar.
                  </p>
                </div>
              </div>
            </div>
            <div className={styles.controlRightBox}>
              <div className={styles.rightBoxText}>
                <div className={styles.rightBoxHeader}>
                  <h2>03.</h2>
                </div>
                <div className={styles.rightBoxBottom}>
                  <h2>Evde Geleneksel Tıp</h2>
                  <p>
                    Evde Geleneksel Tıp, binlerce yıllık doğal tedavi
                    yöntemlerini modern yaşamınıza entegre eden bir hizmettir.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.boxTwo}>
            <div className={styles.controlForBox}>
              <div className={styles.forBox}>
                <div className={styles.forBoxHeader}>
                  <h2>04.</h2>
                </div>
                <div className={styles.forBoxBottom}>
                  <h2>Evde Tahlil Hizmeti</h2>
                  <p>
                    Uzman doktorlarımızla sağlık sorununuzun tespiti ve tedavisi
                    için evinizin konforunda muayenenizi yapıyoruz.
                  </p>
                </div>
              </div>
            </div>
            <div className={styles.controlFiveBox}>
              <div className={styles.fiveBoxText}>
                <div className={styles.fiveBoxHeader}>
                  <h2>05.</h2>
                </div>
                <div className={styles.fiveBoxBottom}>
                  <h2>Özel Ambulans Hizmeti</h2>
                  <p>
                    Hasta Nakil Ambulansı hizmeti, yüksek standartlardaki
                    medikal ekipmanları ve deneyimli sağlık personeli ile
                    hastanızın konforu ve güvenliği en üst düzeyde tutulur.
                  </p>
                </div>
              </div>
              <div className={styles.fiveBoxSvg}>
                <img src={AmbulanceSvg} alt="" />
              </div>
            </div>
          </div>
          <div className={styles.boxThree}>
            <div className={styles.controlFiveBox}>
              <div className={styles.fiveBoxText}>
                <div className={styles.fiveBoxHeader}>
                  <h2>06.</h2>
                </div>
                <div className={styles.fiveBoxBottom}>
                  <h2>Evde Hasta Bakıcı Hizmeti</h2>
                  <p>
                    Evde hasta bakıcı hizmeti, hastane ortamının stresinden
                    uzakta, ancak tıbbi gereksinimlerinin profesyonel bir
                    şekilde karşılandığı bir hizmettir.
                  </p>
                </div>
              </div>
              <div className={styles.fiveBoxSvg}>
                <img src={Patient} alt="" />
              </div>
            </div>
            <div className={styles.controlForBox}>
              <div className={styles.forBox}>
                <div className={styles.forBoxHeader}>
                  <h2>07.</h2>
                </div>
                <div className={styles.forBoxBottom}>
                  <h2>Evde Check Up Hizmeti</h2>
                  <p>
                    Yaşınıza ve sağlık durumunuza, kişiye özgü check-up
                    paketlerimizi evinizde gerçekleştiriyoruz.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.rightside}>
          <div
            onClick={() => setState({ type: "green" })}
            className={styles.greenborder}
          >
            {state.green ? (
              <>
                <div className={styles.greentext}>
                  <h2>Neden Evde Sağlık Hizmetleri?</h2>
                  <GrayArrow />
                </div>
                <div className={styles.orangeabout}>
                  <p>
                    Evde sağlık hizmetlerinin temel amacı, hastaların hastane
                    ortamına gitme gereksinimini azaltarak, evde, aileleriyle
                    birlikte daha hızlı ve konforlu bir şekilde iyileşmelerini
                    sağlamaktır. Bu hizmetler, hastaların kendi evlerinde
                    alacakları birebir sağlık hizmeti ile hastalıkların daha
                    hızlı iyileşmesine, kronik durumların daha iyi yönetilmesine
                    ve yaşam kalitesinin artırılmasına yardımcı olur.Evde sağlık
                    hizmetleri, sağlık hizmetlerine erişimde esneklik ve konfor
                    sunarak, hastaların ve ailelerinin yaşam kalitesini artırır.
                    Kişiselleştirilmiş bakım, ekonomik tasarruf, psikolojik
                    destek ve sürekli izlem gibi avantajlarıyla, evde sağlık
                    hizmetleri modern sağlık sistemlerinde önemli bir yer
                    tutmaktadır. Bu hizmetler, hastaların kendilerini daha iyi
                    hissetmelerine ve daha hızlı iyileşmelerine yardımcı
                    olurken, ailelere de önemli bir destek sağlar. Evde sağlık
                    hizmetleri ile erişebileceğiniz avantajlar;
                  </p>
                  <div className={styles.textAbout}>
                    <h2>1. Konfor ve Güvenlik</h2>
                    <p>
                      Evde sağlık hizmetleri, hastaların kendi evlerinin
                      rahatlığında tedavi görmelerini sağlar. Hastalar, tanıdık
                      bir ortamda bulunmanın verdiği rahatlıkla daha hızlı
                      iyileşebilirler. Ayrıca, evde tedavi görmek, hastane
                      enfeksiyonlarına maruz kalma riskini de azaltır.
                    </p>
                  </div>
                  <div className={styles.textAbout}>
                    <h2>2. Kişiselleştirilmiş Bakım</h2>
                    <p>
                      Evde sağlık hizmetleri, hastanın özel ihtiyaçlarına göre
                      uyarlanmış kişiselleştirilmiş bakım sunar. Bu, tedavi
                      planlarının ve bakımın hastanın bireysel ihtiyaçlarına
                      göre optimize edilmesini sağlar. Hastalar ve aileleri,
                      bakım planlarına daha fazla katılma fırsatı bulurlar
                    </p>
                  </div>
                  <div className={styles.textAbout}>
                    <h2>3. Ekonomik Avantajlar</h2>
                    <p>
                      Hastanede yatış ve uzun süreli bakım, maliyet açısından
                      oldukça yüksek olabilir. Evde sağlık hizmetleri, bu
                      maliyetleri önemli ölçüde azaltabilir. Ayrıca, hastaneye
                      ulaşım için harcanan zaman ve para da evde sağlık
                      hizmetleri ile tasarruf edilebilir.
                    </p>
                  </div>
                  <div className={styles.textAbout}>
                    <h2>4. Psikolojik Destek</h2>
                    <p>
                      Evde sağlık hizmetleri, hastaların psikolojik sağlığına
                      olumlu etkilerde bulunur. Hastalar, ailelerinin yanında
                      olmanın ve tanıdık bir çevrede bulunmanın verdiği moral
                      desteğiyle kendilerini daha iyi hissederler. Bu da genel
                      iyileşme sürecini hızlandırabilir.
                    </p>
                  </div>
                  <div className={styles.textAbout}>
                    <h2>5. Esneklik ve Erişilebilirlik</h2>
                    <p>
                      Evde sağlık hizmetleri, hastaların ihtiyaçlarına göre
                      esnek saatlerde sunulabilir. Bu, hastaların tedavi
                      planlarını kendi programlarına göre ayarlayabilmelerini
                      sağlar. Ayrıca, ulaşım sorunları yaşayan hastalar için de
                      büyük bir kolaylık sağlar.
                    </p>
                  </div>
                  <div className={styles.textAbout}>
                    <h2>6. Uzun Dönemli İzlem ve Destek</h2>
                    <p>
                      Kronik hastalıkların yönetiminde sürekli izlem ve destek
                      çok önemlidir. Evde sağlık hizmetleri, hastaların
                      durumlarını yakından takip eder ve gerektiğinde hızlı
                      müdahalede bulunur. Bu, hastaların sağlık durumlarının
                      stabilize edilmesine ve komplikasyonların önlenmesine
                      yardımcı olur.
                    </p>
                  </div>
                  <div className={styles.textAbout}>
                    <h2>7. Aileye Destek</h2>
                    <p>
                      Evde sağlık hizmetleri, hastaların aile üyelerine de
                      önemli bir destek sağlar. Bakım veren aile üyeleri,
                      profesyonel sağlık personelinden bilgi ve rehberlik
                      alarak, hastalarına daha iyi bakım sunabilirler. Ayrıca,
                      aile üyelerinin üzerindeki bakım yükü de hafifler.
                    </p>
                  </div>
                  <div className={styles.textAbout}>
                    <h2>8. Rehabilitasyon ve Fizik Tedavi</h2>
                    <p>
                      Evde sağlık hizmetleri, fiziksel rehabilitasyon ve terapi
                      ihtiyaçları olan hastalar için de faydalıdır. Uzman
                      terapistler, hastaların evlerinde egzersiz programları ve
                      terapi seansları düzenleyerek, hastaların fiziksel
                      işlevselliğini artırabilirler.
                    </p>
                  </div>
                </div>
              </>
            ) : (
              <div className={styles.greentext}>
                <h2>Neden Evde Sağlık Hizmetleri?</h2>

                <GrayArrowTrue />
              </div>
            )}
          </div>
          <div
            onClick={() => setState({ type: "orange" })}
            className={styles.orangeborder}
          >
            {state.orange ? (
              <>
                <div className={styles.orangetext}>
                  <h2>Hastalıklara karşı ne yapmalıyız? </h2>

                  <GrayArrow />
                </div>
                <div className={styles.orangeabout}>
                  <p>
                  Hastalıklara karşı korunmak, erken teşhis koymak ve tedavi süreçlerini daha etkili bir şekilde yönetmek için doğru adımları atmak hayati önem taşır. Modern tıbbın sunduğu en büyük kolaylıklardan biri, evde sağlık hizmetleridir. Bu hizmetler, bireylerin hastane ortamına gitmeden kendi konfor alanlarında sağlık sorunlarını yönetmelerine yardımcı olur ve hastalıklarla mücadelede önemli bir role sahiptir.Evde sağlık hizmetlerinin temel amacı, hastalıkların önlenmesi, kronik rahatsızlıkların yönetimi, düzenli kontrollerin yapılması ve bireyin yaşam kalitesini artırmaktır. 
                  </p>
                </div>
              </>
            ) : (
              <div className={styles.orangetext}>
                <h2>Hastalıklara karşı ne yapmalıyız? </h2>
                <GrayArrowTrue />
              </div>
            )}
          </div>
          <div
            onClick={() => setState({ type: "red" })}
            className={styles.redborder}
          >
            {state.red ? (
              <>
                <div className={styles.redtext}>
                  <h2>Uzmanların görüşleri nelerdir? </h2>
                  <GrayArrow />
                </div>
                <div className={styles.orangeabout}>
                  <p>
                  Hastalıklara karşı mücadelede uzmanların görüşleri, bireylerin bilinçlenmesini sağlamak ve toplum sağlığını koruma altına almak açısından büyük bir rehber niteliği taşır. Sağlık uzmanlarının koruyucu, önleyici ve tedaviye yönelik yaklaşımları, bireylerin sağlıklı bir yaşam sürdürmelerine yardımcı olmanın yanı sıra, hastalıkların yayılmasını engellemek ve sağlık sistemleri üzerindeki yükü azaltmak için de hayati önem taşır.Bu görüşler, hem bireylerin kişisel sağlıklarını korumalarına hem de genel halk sağlığını iyileştirmeye katkıda bulunur. Özellikle kronik hastalıkların artış gösterdiği, bulaşıcı hastalıkların küresel ölçekte tehdit oluşturduğu ve sağlık kaynaklarının daha verimli kullanılması gerektiği günümüzde, uzmanların sunduğu stratejiler bireyler ve toplumlar için bir yol haritası niteliği taşır.
                  </p>
                </div>
              </>
            ) : (
              <div className={styles.redtext}>
                <h2>Uzmanların görüşleri nelerdir? </h2>
                <GrayArrowTrue />
              </div>
            )}
          </div>
          <div
            onClick={() => setState({ type: "violet" })}
            className={styles.violetborder}
          >
            {state.violet ? (
              <>
                <div className={styles.violettext}>
                  <h2>Ne kadar güvene biliriz?</h2>
                  <GrayArrow />
                </div>
                <div className={styles.orangeabout}>
                  <p>
                  Hastalıklarla mücadelede uzmanların görüşlerine güven, sağlık sistemlerinin temelini oluşturan en önemli unsurlardan biridir. Sağlık uzmanlarının rehberliği, bilgi birikimi ve deneyimleri sayesinde bireyler doğru adımlar atarak sağlıklarını koruyabilir, hastalıkları önleyebilir ve tedavi süreçlerinde en iyi sonuçları elde edebilir. Ancak bu güvenin dayandığı bilimsel temeller, etik değerler ve sürekli gelişen sağlık teknolojileri hakkında daha derin bir anlayışa sahip olmak, bu güveni daha da güçlendirebilir.
                  </p>
                </div>
              </>
            ) : (
              <div className={styles.violettext}>
                <h2>Ne kadar güvene biliriz?</h2>
                <GrayArrowTrue />
              </div>
            )}
          </div>
        </div>
      </Wrapper>
    </div>
    </>
  );
};

export default Kifoz;
