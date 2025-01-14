import React, { useMemo } from "react";
import styles from './index.module.css'
import { useParams } from "react-router-dom";
import SerumPhoto1 from '../../assets/images/serum1.webp';
import SerumPhoto2 from '../../assets/images/serum2.webp';
import SerumPhoto3 from '../../assets/images/serum3.webp';
import SerumPhoto4 from '../../assets/images/serum4.webp';
import SerumPhoto5 from '../../assets/images/serum5.webp';
import SerumPhoto6 from '../../assets/images/serum6.webp';
import SerumPhoto7 from '../../assets/images/serum7.webp';
import SerumPhoto8 from '../../assets/images/serum8.webp';
import SerumPhoto9 from '../../assets/images/serum9.webp';
import SerumPhoto10 from '../../assets/images/serum10.webp';
import SerumPhoto11 from '../../assets/images/serum11.webp';
import SerumPhoto12 from '../../assets/images/serum12.webp';
import SerumPhoto13 from '../../assets/images/serum13.webp';
import SerumPhoto14 from '../../assets/images/serum14.webp';
import SerumPhoto15 from '../../assets/images/serum15.webp';
import SerumPhoto16 from '../../assets/images/serum16.webp';
import LabPackagesPhoto from '../../assets/images/lapda.jfif'
import HealthyLivingPhoto from '../../assets/images/healty.jpg'
import FAQPhoto from '../../assets/images/faq.jpg'
import Wrapper from '../../components/UI/wrapper'
import { GarantieIcon } from "../../icons";
const SerumlarDetails = () => {
    const { id } = useParams(); // URL'deki id'yi al
    const photos = useMemo(
        () => [
            {
                id: 1,
                image: `${SerumPhoto1}`,
                text: "Atom Serum",
                textTwo: "Atom Serum, günlük yaşamı olumsuz etkileyen cilt problemleri ve yorgunluk hissini gidermek için özel olarak formüle edilmiştir. Hem yetişkinler hem de gençler tarafından kullanılabilen bu serum, cildinizin doğal dengesini geri kazandırarak daha parlak ve sağlıklı bir görünüm sunar. İçeriğimizde Atom Serum'un faydaları, nasıl kullanıldığı ve kullanıcı yorumlarına dair detaylı bilgileri bulabilirsiniz.",
                headerText: "Atom Serum Nedir? Faydaları Nelerdir?",
                aboutHeaderText: "Atom Serum, cildin ihtiyaç duyduğu nemi sağlayarak kuruluğu önler ve cilt tonunu eşitler. Yoğun vitamin ve mineral içeriği sayesinde cildinizi besler ve yeniler. Günlük kullanımda ciltteki ince çizgileri ve yorgunluk belirtilerini azaltarak daha genç bir görünüm kazandırır.",
                typeHeaderText: "Atom Serum'un farklı kullanım alanları şunlardır:",
                oneTypeHeader: "Günlük Nemlendirici:",
                aboutOneTypeHeader: "Atom Serum, cildinizi gün boyu nemli tutarak kuruluğa karşı korur. Sabah ve akşam düzenli kullanımda etkili sonuçlar verir.",
                twoTypeHeader: "Cilt Yenileyici:",
                aboutTwoTypeHeader: "Yoğun içerikli formülüyle cildin yenilenme sürecini destekler. Düzenli kullanımda cilt tonunu eşitler ve parlaklık kazandırır.",
                threeTypeHeader: "Yaşlanma Karşıtı:",
                aboutThreeTypeHeader: "İnce çizgileri ve kırışıklıkları azaltarak daha genç bir cilt görünümü sağlar. Uzun süreli kullanımda cilt elastikiyetini artırır.",
                forKind: "Gençler ve Yetişkinler İçin Atom Serum",
                aboutKind: "Atom Serum, hem gençler hem de yetişkinler tarafından rahatlıkla kullanılabilir. Gençler için akne ve sivilce oluşumunu önlerken, yetişkinlerde yaşlanma belirtilerini geciktirir. Cilt tipinize uygun olarak günde iki kez kullanabilirsiniz.",
                whyIshal: "Atom Serum Neden Tercih Edilmeli?",
                aboutIshal: "Atom Serum, doğal ve organik içeriklerle formüle edilmiştir. Paraben ve sülfat gibi zararlı kimyasallar içermez. Bu nedenle hassas ciltlerde bile güvenle kullanılabilir. Cildinizi dış etkenlere karşı koruyarak sağlıklı ve canlı bir görünüm sunar.",
                beshil: "Atom Serum'un İçeriği ve Faydaları",
                aboutBeshil: "Atom Serum, C vitamini, E vitamini, hyaluronik asit ve bitkisel ekstraktlar içerir. Bu bileşenler cilt üzerinde nemlendirici, besleyici ve onarıcı etki sağlar. Ciltteki leke ve ton farklılıklarını gidererek eşit bir cilt tonu sunar.",
                textBeshil: "Düzenli kullanımda cilt üzerindeki etkilerini hızla gösteren Atom Serum, kolay uygulanabilir formülü sayesinde günlük bakım rutininizin vazgeçilmezi olacaktır. Cildinize gerekli özeni göstermek ve doğal güzelliğinizi ortaya çıkarmak için Atom Serum'u tercih edebilirsiniz."

            },
            {
                id: 2,
                image: `${SerumPhoto2}`,
                text: "Fat Burning Slim Boost",
                textTwo: "Fat Burning Slim Boost, kilo verme sürecinizi hızlandırmak ve enerji seviyenizi artırmak için özel olarak geliştirilmiş bir takviyedir. Hem kadınlar hem erkekler tarafından kullanılabilen bu ürün, metabolizmanızı hızlandırarak yağ yakımını destekler. İçeriğimizde Fat Burning Slim Boost'un faydaları, nasıl kullanıldığı ve kullanıcı yorumlarına dair detaylı bilgileri bulabilirsiniz.",
                headerText: "Fat Burning Slim Boost Nedir? Faydaları Nelerdir?",
                aboutHeaderText: "Fat Burning Slim Boost, içerdiği doğal bileşenlerle yağ yakımını teşvik eder ve metabolizmayı hızlandırır. Düzenli kullanımda vücut yağ oranını azaltarak daha fit ve sağlıklı bir görünüm sağlar. Aynı zamanda enerji seviyesini artırarak egzersiz performansınızı iyileştirir.",
                typeHeaderText: "Fat Burning Slim Boost'un farklı kullanım alanları şunlardır:",
                oneTypeHeader: "Metabolizma Hızlandırıcı:",
                aboutOneTypeHeader: "Fat Burning Slim Boost, metabolizmanızı hızlandırarak gün boyu daha fazla kalori yakmanızı sağlar. Sabahları ve egzersiz öncesinde kullanıldığında daha etkili sonuçlar verir.",
                twoTypeHeader: "Enerji Artırıcı:",
                aboutTwoTypeHeader: "Doğal içerikleri sayesinde enerji seviyenizi artırır, yorgunluk hissini azaltır ve daha aktif bir yaşam tarzı benimsemenize yardımcı olur.",
                threeTypeHeader: "Yağ Yakıcı:",
                aboutThreeTypeHeader: "Vücutta biriken yağların yakılmasını teşvik ederek kilo verme sürecinizi destekler. Düzenli egzersiz ve sağlıklı bir diyetle birlikte kullanıldığında etkili sonuçlar verir.",
                forKind: "Kadınlar ve Erkekler İçin Fat Burning Slim Boost",
                aboutKind: "Fat Burning Slim Boost, hem kadınlar hem de erkekler için uygundur. Kilo vermek ve vücut yağ oranını azaltmak isteyen herkes tarafından kullanılabilir. Günde iki kez, tercihen yemeklerden önce veya egzersizden önce kullanılması önerilir.",
                whyIshal: "Fat Burning Slim Boost Neden Tercih Edilmeli?",
                aboutIshal: "Fat Burning Slim Boost, doğal içeriklerle formüle edilmiş ve zararlı kimyasallar içermeyen bir üründür. Bu nedenle güvenle kullanılabilir. Vücudunuzun doğal yağ yakma sürecini destekler ve hedeflerinize daha hızlı ulaşmanızı sağlar.",
                beshil: "Fat Burning Slim Boost'un İçeriği ve Faydaları",
                aboutBeshil: "Fat Burning Slim Boost, yeşil çay ekstresi, kafein, L-karnitin ve diğer termojenik bileşenler içerir. Bu bileşenler, yağ yakımını hızlandırır, iştahı kontrol altına alır ve metabolizmayı destekler.",
                textBeshil: "Düzenli kullanımda kilo verme sürecinize destek olan Fat Burning Slim Boost, sağlıklı bir diyet ve egzersiz programıyla birlikte kullanıldığında en iyi sonuçları verir. Vücudunuzu forma sokmak ve enerjinizi artırmak için Fat Burning Slim Boost'u tercih edebilirsiniz."
            },
            {
                id: 3,
                image: `${SerumPhoto3}`,
                text: "Collagen Booster",
                textTwo: "Collagen Booster, cilt sağlığını destekleyen ve yaşlanma belirtilerini azaltan bir takviyedir. Kolajen üretimini artırarak cildin elastikiyetini ve nem seviyesini yükseltir. İçeriğimizde Collagen Booster'ın faydaları, kullanım şekli ve kullanıcı yorumlarına dair detaylı bilgileri bulabilirsiniz.",
                headerText: "Collagen Booster Nedir? Faydaları Nelerdir?",
                aboutHeaderText: "Collagen Booster, cildin ihtiyaç duyduğu kolajeni takviye ederek daha sağlıklı ve genç bir görünüm kazandırır. Kırışıklıkları azaltır, cildi sıkılaştırır ve nemlendirir.",
                typeHeaderText: "Collagen Booster'ın kullanım alanları şunlardır:",
                oneTypeHeader: "Cilt Yenileyici:",
                aboutOneTypeHeader: "Cildin kolajen üretimini artırarak yaşlanma belirtilerini azaltır ve cilt dokusunu yeniler.",
                twoTypeHeader: "Saç ve Tırnak Güçlendirici:",
                aboutTwoTypeHeader: "Saç ve tırnakları güçlendirir, daha sağlıklı ve parlak bir görünüm kazandırır.",
                threeTypeHeader: "Eklem Sağlığı Destekleyici:",
                aboutThreeTypeHeader: "Kolajen, eklem sağlığını destekler ve hareket kabiliyetini artırır.",
                forKind: "Kadınlar ve Erkekler İçin Collagen Booster",
                aboutKind: "Collagen Booster, yaşlanma belirtilerini azaltmak ve cilt sağlığını korumak isteyen herkes için uygundur. Günlük kullanımda düzenli olarak alınması önerilir.",
                whyIshal: "Collagen Booster Neden Tercih Edilmeli?",
                aboutIshal: "Collagen Booster, doğal bileşenlerle formüle edilmiş bir üründür. Cildinizi içten dışa destekler ve daha genç bir görünüm kazandırır.",
                beshil: "Collagen Booster'ın İçeriği ve Faydaları",
                aboutBeshil: "Collagen Booster, hidrolize kolajen, C vitamini ve hyaluronik asit içerir. Bu bileşenler, cildi yeniler, nemlendirir ve kırışıklıkları azaltır.",
                textBeshil: "Düzenli kullanımda Collagen Booster, cildinize sağlık kazandırır ve yaşlanma belirtilerini azaltır. Sağlıklı bir yaşam tarzı ile birlikte kullanıldığında etkili sonuçlar verir."
            },
            {
                id: 4,
                image: `${SerumPhoto4}`,
                text: "Magnezyum IV Terapi",
                textTwo: "Magnezyum IV Terapi, vücudun ihtiyaç duyduğu magnezyumu doğrudan kan dolaşımına ileterek hızlı bir şekilde eksiklikleri gideren bir tedavi yöntemidir. Enerji üretimini destekler, kas ve sinir fonksiyonlarını iyileştirir. İçeriğimizde Magnezyum IV Terapi'nin faydaları ve kullanım alanları hakkında bilgi bulabilirsiniz.",
                headerText: "Magnezyum IV Terapi Nedir? Faydaları Nelerdir?",
                aboutHeaderText: "Magnezyum IV Terapi, magnezyum eksikliğini hızlı ve etkili bir şekilde giderir. Kas kramplarını azaltır, enerji seviyesini artırır ve stresle mücadeleye yardımcı olur.",
                typeHeaderText: "Magnezyum IV Terapi'nin kullanım alanları şunlardır:",
                oneTypeHeader: "Enerji Artırıcı:",
                aboutOneTypeHeader: "Enerji üretimini destekler ve yorgunluk hissini azaltır.",
                twoTypeHeader: "Kas Fonksiyonları:",
                aboutTwoTypeHeader: "Kas kramplarını önler ve kasların daha iyi çalışmasını sağlar.",
                threeTypeHeader: "Sinir Sistemi Destekleyici:",
                aboutThreeTypeHeader: "Sinir fonksiyonlarını iyileştirir, stresle mücadeleye yardımcı olur.",
                forKind: "Kadınlar ve Erkekler İçin Magnezyum IV Terapi",
                aboutKind: "Magnezyum IV Terapi, magnezyum eksikliğini hızlı bir şekilde gidermek isteyen herkes için uygundur. Özellikle yoğun stres altında olan bireyler için önerilir.",
                whyIshal: "Magnezyum IV Terapi Neden Tercih Edilmeli?",
                aboutIshal: "Magnezyum IV Terapi, hızlı etkili bir tedavi yöntemidir. Doğrudan kan dolaşımına verildiği için hızlı sonuç verir ve vücudun ihtiyacını karşılar.",
                beshil: "Magnezyum IV Terapi'nin İçeriği ve Faydaları",
                aboutBeshil: "Magnezyum IV Terapi, saf magnezyum minerali içerir. Bu terapi yöntemi, kas sağlığını destekler, enerji seviyesini artırır ve sinir fonksiyonlarını iyileştirir.",
                textBeshil: "Düzenli uygulamalarda Magnezyum IV Terapi, kas sağlığını korur, enerji verir ve genel sağlık durumunu iyileştirir."
            },
            {
                id: 5,
                image: `${SerumPhoto5}`,
                text: "Alfa Lipoik Asit IV Terapi",
                textTwo: "Alfa Lipoik Asit IV Terapi, güçlü bir antioksidan olarak hücre yenilenmesini destekleyen ve serbest radikallerle savaşan bir tedavi yöntemidir. İçeriğimizde Alfa Lipoik Asit IV Terapi'nin faydaları ve nasıl uygulandığına dair bilgiler bulabilirsiniz.",
                headerText: "Alfa Lipoik Asit IV Terapi Nedir? Faydaları Nelerdir?",
                aboutHeaderText: "Alfa Lipoik Asit IV Terapi, vücudu serbest radikallerden korur, hücre yenilenmesini destekler ve enerji üretimini artırır. Sinir sağlığını iyileştirir ve cilt sağlığını destekler.",
                typeHeaderText: "Alfa Lipoik Asit IV Terapi'nin kullanım alanları şunlardır:",
                oneTypeHeader: "Antioksidan Etki:",
                aboutOneTypeHeader: "Vücudu serbest radikallerden korur ve hücre yenilenmesini destekler.",
                twoTypeHeader: "Sinir Sağlığı:",
                aboutTwoTypeHeader: "Sinir hasarını azaltır ve sinir sistemini korur.",
                threeTypeHeader: "Cilt Sağlığı:",
                aboutThreeTypeHeader: "Cildi yeniler, kırışıklıkları azaltır ve cilt tonunu eşitler.",
                forKind: "Kadınlar ve Erkekler İçin Alfa Lipoik Asit IV Terapi",
                aboutKind: "Alfa Lipoik Asit IV Terapi, sağlıklı bir yaşam tarzını desteklemek isteyen herkes için uygundur. Düzenli uygulamalarda cilt sağlığını iyileştirir ve enerji seviyesini artırır.",
                whyIshal: "Alfa Lipoik Asit IV Terapi Neden Tercih Edilmeli?",
                aboutIshal: "Alfa Lipoik Asit IV Terapi, güçlü antioksidan özellikleri ile vücudu serbest radikallerden korur ve genel sağlık durumunu iyileştirir.",
                beshil: "Alfa Lipoik Asit IV Terapi'nin İçeriği ve Faydaları",
                aboutBeshil: "Alfa Lipoik Asit IV Terapi, güçlü antioksidanlar içerir. Bu terapi, vücudu serbest radikallerden korur ve hücre yenilenmesini destekler.",
                textBeshil: "Düzenli uygulamalarda Alfa Lipoik Asit IV Terapi, genel sağlık durumunu iyileştirir ve yaşlanma belirtilerini azaltır."
            },
            {
                id: 6,
                image: `${SerumPhoto6}`,
                text: "Selenyum IV Terapi",
                textTwo: "Selenyum IV Terapi, vücudun bağışıklık sistemini destekleyen ve tiroid fonksiyonlarını düzenleyen bir tedavi yöntemidir. İçeriğimizde Selenyum IV Terapi'nin faydaları, kullanım alanları ve uygulama şekline dair detaylı bilgiler bulabilirsiniz.",
                headerText: "Selenyum IV Terapi Nedir? Faydaları Nelerdir?",
                aboutHeaderText: "Selenyum IV Terapi, bağışıklık sistemini güçlendirir, tiroid fonksiyonlarını iyileştirir ve vücudu serbest radikallerden korur. Hücre yenilenmesini destekler ve enerji seviyesini artırır.",
                typeHeaderText: "Selenyum IV Terapi'nin kullanım alanları şunlardır:",
                oneTypeHeader: "Bağışıklık Sistemi Destekleyici:",
                aboutOneTypeHeader: "Bağışıklık sistemini güçlendirir ve vücudu enfeksiyonlara karşı korur.",
                twoTypeHeader: "Tiroid Fonksiyonları:",
                aboutTwoTypeHeader: "Tiroid bezinin düzgün çalışmasını sağlar ve hormon dengesini korur.",
                threeTypeHeader: "Antioksidan Etki:",
                aboutThreeTypeHeader: "Vücudu serbest radikallerden korur ve hücre yenilenmesini destekler.",
                forKind: "Kadınlar ve Erkekler İçin Selenyum IV Terapi",
                aboutKind: "Selenyum IV Terapi, bağışıklık sistemini güçlendirmek ve genel sağlığı iyileştirmek isteyen herkes için uygundur. Düzenli uygulamalarda sağlık üzerinde olumlu etkileri vardır.",
                whyIshal: "Selenyum IV Terapi Neden Tercih Edilmeli?",
                aboutIshal: "Selenyum IV Terapi, bağışıklık sistemini güçlendirir ve vücudu serbest radikallerden korur. Ayrıca, tiroid sağlığını destekler ve genel sağlık durumunu iyileştirir.",
                beshil: "Selenyum IV Terapi'nin İçeriği ve Faydaları",
                aboutBeshil: "Selenyum IV Terapi, yüksek oranda selenyum içerir. Bu mineral, bağışıklık sistemini destekler, tiroid fonksiyonlarını düzenler ve antioksidan özelliklere sahiptir.",
                textBeshil: "Düzenli uygulamalarda Selenyum IV Terapi, bağışıklık sistemini güçlendirir, enerji seviyesini artırır ve genel sağlık durumunu iyileştirir."
            },
            {
                id: 7,
                image: `${SerumPhoto7}`,
                text: "B Vitamin Kompleksi",
                textTwo: "B Vitamin Kompleksi, vücudun enerji üretimini destekleyen, sinir sistemi sağlığını iyileştiren ve metabolizmayı düzenleyen önemli bir takviyedir. İçeriğimizde B Vitamin Kompleksi'nin faydaları ve kullanım alanlarına dair detaylı bilgiler bulabilirsiniz.",
                headerText: "B Vitamin Kompleksi Nedir? Faydaları Nelerdir?",
                aboutHeaderText: "B Vitamin Kompleksi, enerji üretiminden cilt sağlığına kadar birçok önemli fonksiyona katkıda bulunan temel vitaminleri içerir. Sinir sağlığını iyileştirir, bağışıklık sistemini destekler ve zihinsel performansı artırır.",
                typeHeaderText: "B Vitamin Kompleksi'nin kullanım alanları şunlardır:",
                oneTypeHeader: "Enerji Artırıcı:",
                aboutOneTypeHeader: "Enerji üretimini destekler ve yorgunluk hissini azaltır.",
                twoTypeHeader: "Sinir Sağlığı:",
                aboutTwoTypeHeader: "Sinir sistemi fonksiyonlarını iyileştirir ve stresi azaltır.",
                threeTypeHeader: "Bağışıklık Sistemi Destekleyici:",
                aboutThreeTypeHeader: "Bağışıklık sistemini güçlendirir ve vücudu hastalıklara karşı korur.",
                forKind: "Kadınlar ve Erkekler İçin B Vitamin Kompleksi",
                aboutKind: "B Vitamin Kompleksi, enerji eksikliği, stres veya sinir sistemi sağlığını iyileştirmek isteyen herkes için uygundur.",
                whyIshal: "B Vitamin Kompleksi Neden Tercih Edilmeli?",
                aboutIshal: "B Vitamin Kompleksi, vücudun temel ihtiyaçlarını karşılayan ve genel sağlık durumunu iyileştiren bir takviyedir. Enerji verir, sinir sağlığını korur ve bağışıklık sistemini güçlendirir.",
                beshil: "B Vitamin Kompleksi'nin İçeriği ve Faydaları",
                aboutBeshil: "B Vitamin Kompleksi, B1, B2, B3, B5, B6, B7, B9 ve B12 vitaminlerini içerir. Bu vitaminler, enerji üretimini destekler ve genel sağlık durumunu iyileştirir.",
                textBeshil: "Düzenli kullanımda B Vitamin Kompleksi, enerji seviyesini artırır, sinir sağlığını destekler ve bağışıklık sistemini güçlendirir."
            },
            {
                id: 8,
                image: `${SerumPhoto8}`,
                text: "Hidrasyon IV Terapi",
                textTwo: "Hidrasyon IV Terapi, vücudun su ve elektrolit dengesini hızla yeniden sağlayarak hidrasyon seviyesini artıran bir tedavi yöntemidir. İçeriğimizde Hidrasyon IV Terapi'nin faydaları ve kullanım alanları hakkında bilgi bulabilirsiniz.",
                headerText: "Hidrasyon IV Terapi Nedir? Faydaları Nelerdir?",
                aboutHeaderText: "Hidrasyon IV Terapi, dehidrasyonu önler, enerji seviyesini artırır ve genel sağlık durumunu iyileştirir. Sporculardan yoğun iş temposuna sahip bireylere kadar herkes için uygundur.",
                typeHeaderText: "Hidrasyon IV Terapi'nin kullanım alanları şunlardır:",
                oneTypeHeader: "Dehidrasyon Tedavisi:",
                aboutOneTypeHeader: "Vücudun sıvı dengesini hızlı bir şekilde sağlar ve dehidrasyonu önler.",
                twoTypeHeader: "Enerji Artırıcı:",
                aboutTwoTypeHeader: "Enerji seviyesini artırır ve yorgunluk hissini azaltır.",
                threeTypeHeader: "Genel Sağlık Destekleyici:",
                aboutThreeTypeHeader: "Genel sağlık durumunu iyileştirir ve bağışıklık sistemini güçlendirir.",
                forKind: "Kadınlar ve Erkekler İçin Hidrasyon IV Terapi",
                aboutKind: "Hidrasyon IV Terapi, sıvı kaybını hızlı bir şekilde gidermek isteyen herkes için uygundur. Sporculardan yoğun tempoda çalışan bireylere kadar geniş bir kullanıcı kitlesi vardır.",
                whyIshal: "Hidrasyon IV Terapi Neden Tercih Edilmeli?",
                aboutIshal: "Hidrasyon IV Terapi, hızlı etkili bir tedavi yöntemidir. Vücudu hızlıca rehidrate eder ve genel sağlık durumunu iyileştirir.",
                beshil: "Hidrasyon IV Terapi'nin İçeriği ve Faydaları",
                aboutBeshil: "Hidrasyon IV Terapi, elektrolitler ve sıvı içerir. Vücudu rehidrate eder, enerji seviyesini artırır ve genel sağlık durumunu iyileştirir.",
                textBeshil: "Düzenli uygulamalarda Hidrasyon IV Terapi, vücudun sıvı dengesini korur ve genel sağlık üzerinde olumlu etkiler sağlar."
            },
            {
                id: 9,
                image: `${SerumPhoto9}`,
                text: "Saç ve Tırnak Canlılığı IV Terapi",
                textTwo: "Saç ve Tırnak Canlılığı IV Terapi, saç ve tırnak sağlığını destekleyen besinler içerir. Daha güçlü ve parlak saçlar ile sağlıklı tırnaklar için ideal bir tedavidir. İçeriğimizde bu terapi yönteminin faydaları hakkında bilgi bulabilirsiniz.",
                headerText: "Saç ve Tırnak Canlılığı IV Terapi Nedir? Faydaları Nelerdir?",
                aboutHeaderText: "Saç ve Tırnak Canlılığı IV Terapi, saç ve tırnak sağlığını iyileştirir, güçlendirir ve canlandırır. İçeriğindeki besinler, saç köklerini besler ve tırnakları güçlendirir.",
                typeHeaderText: "Saç ve Tırnak Canlılığı IV Terapi'nin kullanım alanları şunlardır:",
                oneTypeHeader: "Saç Güçlendirici:",
                aboutOneTypeHeader: "Saç köklerini besler, saç dökülmesini azaltır ve saçın daha sağlıklı uzamasını sağlar.",
                twoTypeHeader: "Tırnak Güçlendirici:",
                aboutTwoTypeHeader: "Tırnakları güçlendirir ve kırılmalarını önler.",
                threeTypeHeader: "Genel Saç ve Tırnak Sağlığı:",
                aboutThreeTypeHeader: "Saç ve tırnakların genel sağlığını iyileştirir, parlaklık ve canlılık kazandırır.",
                forKind: "Kadınlar ve Erkekler İçin Saç ve Tırnak Canlılığı IV Terapi",
                aboutKind: "Saç ve tırnak sağlığını iyileştirmek isteyen herkes için uygundur. Özellikle saç dökülmesi ve tırnak kırılmasından şikayetçi olan bireyler için önerilir.",
                whyIshal: "Saç ve Tırnak Canlılığı IV Terapi Neden Tercih Edilmeli?",
                aboutIshal: "Saç ve Tırnak Canlılığı IV Terapi, saç ve tırnak sağlığını içten dışa destekler ve güçlendirir. Saçların ve tırnakların daha sağlıklı ve güçlü olmasını sağlar.",
                beshil: "Saç ve Tırnak Canlılığı IV Terapi'nin İçeriği ve Faydaları",
                aboutBeshil: "Saç ve Tırnak Canlılığı IV Terapi, biotin, keratin ve çinko gibi besinler içerir. Bu besinler, saç ve tırnakların sağlığını destekler ve güçlendirir.",
                textBeshil: "Düzenli uygulamalarda Saç ve Tırnak Canlılığı IV Terapi, saç ve tırnak sağlığını iyileştirir ve güçlendirir."
            },  {
                id: 10,
                image: `${SerumPhoto10}`,
                text: "Beauty Kokteyl IV Terapi",
                textTwo: "Beauty Kokteyl IV Terapi, cilt sağlığını destekleyen, gençleştirici özellikleri olan bir tedavi yöntemidir. İçeriğindeki vitamin ve minerallerle cilt tonunu eşitler, nemlendirir ve cilt sağlığını iyileştirir.",
                headerText: "Beauty Kokteyl IV Terapi Nedir? Faydaları Nelerdir?",
                aboutHeaderText: "Beauty Kokteyl IV Terapi, cilt sağlığını içten dışa iyileştiren bir tedavi yöntemidir. Cildi besler, yeniler ve gençleştirir.",
                typeHeaderText: "Beauty Kokteyl IV Terapi'nin kullanım alanları şunlardır:",
                oneTypeHeader: "Cilt Yenileme:",
                aboutOneTypeHeader: "Cildi nemlendirir, kırışıklıkları azaltır ve cilt tonunu eşitler.",
                twoTypeHeader: "Anti-Aging:",
                aboutTwoTypeHeader: "Yaşlanma karşıtı etki sağlar ve cildi gençleştirir.",
                threeTypeHeader: "Cilt Canlandırma:",
                aboutThreeTypeHeader: "Cildin canlı ve parlak görünmesini sağlar.",
                forKind: "Kadınlar ve Erkekler İçin Beauty Kokteyl IV Terapi",
                aboutKind: "Beauty Kokteyl IV Terapi, cilt sağlığını iyileştirmek ve gençleştirmek isteyen herkes için uygundur.",
                whyIshal: "Beauty Kokteyl IV Terapi Neden Tercih Edilmeli?",
                aboutIshal: "Bu terapi, cilt sağlığını içten dışa iyileştirir ve ciltteki görünümü iyileştirir.",
                beshil: "Beauty Kokteyl IV Terapi'nin İçeriği ve Faydaları",
                aboutBeshil: "Beauty Kokteyl IV Terapi, vitamin C, E ve hyaluronik asit içerir. Bu içerikler cilt sağlığını iyileştirir ve cildi nemlendirir.",
                textBeshil: "Düzenli kullanımda Beauty Kokteyl IV Terapi, cildinizi besler ve gençleştirir."
              },
              {
                id: 11,
                image: `${SerumPhoto11}`,
                text: "Amino Asit Kokteyl",
                textTwo: "Amino Asit Kokteyl, vücudun ihtiyaç duyduğu esansiyel amino asitleri sağlar. Bu terapi, kas gelişimini destekler, enerji seviyelerini artırır ve vücudun iyileşme sürecini hızlandırır.",
                headerText: "Amino Asit Kokteyl Nedir? Faydaları Nelerdir?",
                aboutHeaderText: "Amino Asit Kokteyl, kas gelişimi, enerji artışı ve iyileşme için önemli olan amino asitleri sağlar.",
                typeHeaderText: "Amino Asit Kokteyl'in kullanım alanları şunlardır:",
                oneTypeHeader: "Kas Gelişimi:",
                aboutOneTypeHeader: "Kasların güçlenmesini ve onarılmasını sağlar.",
                twoTypeHeader: "Enerji Artışı:",
                aboutTwoTypeHeader: "Enerji seviyelerini artırır ve yorgunluğu giderir.",
                threeTypeHeader: "İyileşme Süreci:",
                aboutThreeTypeHeader: "Vücudun iyileşme sürecini hızlandırır ve spor sonrası toparlanmayı destekler.",
                forKind: "Kadınlar ve Erkekler İçin Amino Asit Kokteyl",
                aboutKind: "Amino Asit Kokteyl, kas gelişimini hızlandırmak, enerji seviyelerini artırmak ve vücut iyileşmesini desteklemek isteyen herkes için uygundur.",
                whyIshal: "Amino Asit Kokteyl Neden Tercih Edilmeli?",
                aboutIshal: "Amino Asit Kokteyl, vücudun ihtiyaç duyduğu amino asitleri sağlar ve vücudu daha güçlü ve sağlıklı tutar.",
                beshil: "Amino Asit Kokteyl'in İçeriği ve Faydaları",
                aboutBeshil: "Amino Asit Kokteyl, esansiyel amino asitler içerir. Bu amino asitler, kasların gelişimini ve onarımını hızlandırır, enerji seviyelerini artırır.",
                textBeshil: "Amino Asit Kokteyl, düzenli kullanımda vücudun güçlenmesini sağlar ve kas gelişimini hızlandırır."
              },   {
                id: 12,
                image: `${SerumPhoto12}`,
                text: "Glutatyon IV Serum",
                textTwo: "Glutatyon IV Serum, güçlü bir antioksidan olan glutatyon içerir. Bu terapi, vücudu zararlı serbest radikallere karşı korur, cilt tonunu eşitler ve yaşlanma belirtilerini azaltır.",
                headerText: "Glutatyon IV Serum Nedir? Faydaları Nelerdir?",
                aboutHeaderText: "Glutatyon IV Serum, vücudu zararlı serbest radikallere karşı korur ve cilt sağlığını iyileştirir. Anti-aging etkisi ile cildin gençleşmesini sağlar.",
                typeHeaderText: "Glutatyon IV Serum'un kullanım alanları şunlardır:",
                oneTypeHeader: "Anti-Aging Etkisi:",
                aboutOneTypeHeader: "Yaşlanma belirtilerini azaltır ve cildin daha genç görünmesini sağlar.",
                twoTypeHeader: "Antioksidan Koruma:",
                aboutTwoTypeHeader: "Serbest radikalleri nötralize eder, vücudu hücresel düzeyde korur.",
                threeTypeHeader: "Cilt Sağlığı:",
                aboutThreeTypeHeader: "Cilt tonunu eşitler ve ciltteki lekeleri azaltır.",
                forKind: "Kadınlar ve Erkekler İçin Glutatyon IV Serum",
                aboutKind: "Glutatyon IV Serum, yaşlanma belirtilerini azaltmak, cilt sağlığını iyileştirmek ve antioksidan desteği almak isteyen herkes için uygundur.",
                whyIshal: "Glutatyon IV Serum Neden Tercih Edilmeli?",
                aboutIshal: "Glutatyon IV Serum, vücudu genç tutmak ve cildi yenilemek için güçlü bir antioksidan kaynağıdır.",
                beshil: "Glutatyon IV Serum'un İçeriği ve Faydaları",
                aboutBeshil: "Glutatyon, vücudun doğal savunma mekanizmalarını güçlendirir ve cilt sağlığını iyileştirir.",
                textBeshil: "Glutatyon IV Serum, düzenli kullanımda yaşlanma karşıtı etki sağlar ve cildi gençleştirir."
              },
              {
                id: 13,
                image: `${SerumPhoto13}`,
                text: "NAD+",
                textTwo: "NAD+ (Nikotinamid Adenin Dinükleotid), vücudun enerji üretimini artıran ve hücresel yenilenmeyi destekleyen bir moleküldür. Bu terapi, zihinsel netlik sağlar, enerji seviyelerini yükseltir ve yaşlanma etkilerini azaltır.",
                headerText: "NAD+ Nedir? Faydaları Nelerdir?",
                aboutHeaderText: "NAD+ terapisi, enerji üretimini artırır ve hücresel yenilenmeyi teşvik eder. Ayrıca yaşlanma sürecini yavaşlatmaya yardımcı olur.",
                typeHeaderText: "NAD+ Terapisinin Kullanım Alanları:",
                oneTypeHeader: "Enerji Artışı:",
                aboutOneTypeHeader: "NAD+, hücrelere enerji sağlar ve genel enerji seviyelerini artırır.",
                twoTypeHeader: "Zihinsel Netlik:",
                aboutTwoTypeHeader: "Zihinsel netliği artırır, odaklanma ve konsantrasyonu güçlendirir.",
                threeTypeHeader: "Yaşlanma Karşıtı Etki:",
                aboutThreeTypeHeader: "Yaşlanma sürecini yavaşlatır, hücresel düzeyde yenilenmeyi teşvik eder.",
                forKind: "Herkes İçin NAD+ Terapisi",
                aboutKind: "NAD+ terapisi, enerji seviyelerini artırmak, zihinsel performansı güçlendirmek ve yaşlanma etkilerini azaltmak isteyen herkes için uygundur.",
                whyIshal: "NAD+ Neden Tercih Edilmeli?",
                aboutIshal: "NAD+, hücresel enerji üretimini artırarak vücudu genç tutmaya yardımcı olur.",
                beshil: "NAD+ İçeriği ve Faydaları",
                aboutBeshil: "NAD+ molekülü, vücutta enerji üretimini destekler ve hücresel yenilenmeyi teşvik eder.",
                textBeshil: "NAD+ terapisi, enerji seviyelerinin artmasını sağlar ve yaşlanma karşıtı etkiler sunar."
              },
              {
                id: 14,
                image: `${SerumPhoto14}`,
                text: "Myers Kokteyli IV Terapi",
                textTwo: "Myers Kokteyli IV Terapi, vücuda ihtiyacı olan vitamin, mineral ve elektrolitleri sağlar. Bu terapi, bağışıklık sistemini güçlendirir, enerjiyi artırır ve genel sağlık üzerinde olumlu etki yapar.",
                headerText: "Myers Kokteyli IV Terapi Nedir? Faydaları Nelerdir?",
                aboutHeaderText: "Myers Kokteyli IV Terapi, bağışıklık sistemini güçlendiren ve vücuda vitamin, mineral desteği sağlayan bir tedavi yöntemidir.",
                typeHeaderText: "Myers Kokteyli IV Terapi'nin Kullanım Alanları:",
                oneTypeHeader: "Bağışıklık Sistemi Desteği:",
                aboutOneTypeHeader: "Vücuda güçlendirici vitamin ve mineraller sağlar, bağışıklık sistemini destekler.",
                twoTypeHeader: "Enerji Artışı:",
                aboutTwoTypeHeader: "Enerji seviyelerini artırır, yorgunluğu azaltır.",
                threeTypeHeader: "Hızlı İyileşme:",
                aboutThreeTypeHeader: "Yorgunluk, stres ve hastalık sonrası hızla iyileşmeyi destekler.",
                forKind: "Her Yaştan İnsan İçin Myers Kokteyli IV Terapi",
                aboutKind: "Myers Kokteyli IV Terapi, bağışıklık sistemini güçlendirmek, enerji artışı sağlamak ve vücuda destek almak isteyen herkes için uygundur.",
                whyIshal: "Myers Kokteyli IV Terapi Neden Tercih Edilmeli?",
                aboutIshal: "Myers Kokteyli IV Terapi, vücudu iyileştirir, güçlendirir ve bağışıklık sistemini destekler.",
                beshil: "Myers Kokteyli IV Terapi İçeriği ve Faydaları",
                aboutBeshil: "Myers Kokteyli IV Terapi, vücudun ihtiyacı olan vitamin ve mineralleri sağlar, bağışıklık sistemini güçlendirir.",
                textBeshil: "Myers Kokteyli IV Terapi, bağışıklık sistemini güçlendirir, enerji seviyelerini artırır ve hızla iyileşmeyi sağlar."
              },
              {
                id: 15,
                image: `${SerumPhoto15}`,
                text: "Yüksek Doz C Vitamini Kokteyli",
                textTwo: "Yüksek Doz C Vitamini Kokteyli, bağışıklık sistemini güçlendirir, serbest radikalleri yok eder ve cilt sağlığını iyileştirir. Ayrıca hastalıklara karşı korunmayı artırır ve iyileşme sürecini hızlandırır.",
                headerText: "Yüksek Doz C Vitamini Kokteyli Nedir? Faydaları Nelerdir?",
                aboutHeaderText: "Yüksek Doz C Vitamini Kokteyli, bağışıklık sistemini güçlendiren ve cilt sağlığını iyileştiren bir tedavi yöntemidir.",
                typeHeaderText: "Yüksek Doz C Vitamini Kokteyli'nin Kullanım Alanları:",
                oneTypeHeader: "Bağışıklık Sistemi Güçlendirme:",
                aboutOneTypeHeader: "C vitamini, bağışıklık sistemini güçlendirir ve hastalıklara karşı korur.",
                twoTypeHeader: "Cilt Sağlığı:",
                aboutTwoTypeHeader: "Ciltteki lekeleri azaltır ve sağlıklı bir görünüm sağlar.",
                threeTypeHeader: "Serbest Radikal Koruma:",
                aboutThreeTypeHeader: "Serbest radikalleri nötralize eder, hücrelerin yaşlanmasını yavaşlatır.",
                forKind: "Her Yaştan İnsan İçin Yüksek Doz C Vitamini Kokteyli",
                aboutKind: "Yüksek Doz C Vitamini Kokteyli, bağışıklık sistemini güçlendirmek, cilt sağlığını iyileştirmek ve hastalıklardan korunmak isteyen herkes için uygundur.",
                whyIshal: "Yüksek Doz C Vitamini Kokteyli Neden Tercih Edilmeli?",
                aboutIshal: "Yüksek Doz C Vitamini Kokteyli, bağışıklık sistemini güçlendirir ve serbest radikallere karşı koruma sağlar.",
                beshil: "Yüksek Doz C Vitamini Kokteyli İçeriği ve Faydaları",
                aboutBeshil: "Yüksek Doz C Vitamini Kokteyli, vücudu güçlendirir ve cilt sağlığını iyileştirir.",
                textBeshil: "Yüksek Doz C Vitamini Kokteyli, bağışıklık sistemini güçlendirir ve serbest radikalleri yok eder."
              },
              {
                id: 16,
                image: `${SerumPhoto16}`,
                text: "Çinko IV Terapi",
                textTwo: "Çinko IV Terapi, bağışıklık sistemini güçlendiren, hücresel onarımı hızlandıran ve cilt sağlığını iyileştiren bir tedavi yöntemidir. Ayrıca, vücuttaki iltihaplanmayı azaltır ve iyileşmeyi hızlandırır.",
                headerText: "Çinko IV Terapi Nedir? Faydaları Nelerdir?",
                aboutHeaderText: "Çinko IV Terapi, bağışıklık sistemini destekleyen ve hücresel onarımı hızlandıran bir tedavi seçeneğidir.",
                typeHeaderText: "Çinko IV Terapi'nin Kullanım Alanları:",
                oneTypeHeader: "Bağışıklık Sistemi Güçlendirme:",
                aboutOneTypeHeader: "Çinko, bağışıklık sistemini destekler ve vücudu hastalıklara karşı korur.",
                twoTypeHeader: "Hücresel Onarım:",
                aboutTwoTypeHeader: "Çinko, hücrelerin onarımını hızlandırır ve iyileşme sürecini destekler.",
                threeTypeHeader: "Cilt Sağlığı:",
                aboutThreeTypeHeader: "Ciltteki iltihaplanmaları azaltır ve sağlıklı bir cilt görünümü sağlar.",
                forKind: "Her Yaştan İnsan İçin Çinko IV Terapi",
                aboutKind: "Çinko IV Terapi, bağışıklık sistemini güçlendirmek, hücresel onarımı hızlandırmak ve cilt sağlığını iyileştirmek isteyen herkes için uygundur.",
                whyIshal: "Çinko IV Terapi Neden Tercih Edilmeli?",
                aboutIshal: "Çinko IV Terapi, bağışıklık sistemini güçlendirir, hücresel onarımı hızlandırır ve cilt sağlığını iyileştirir.",
                beshil: "Çinko IV Terapi İçeriği ve Faydaları",
                aboutBeshil: "Çinko, bağışıklık sistemi için önemli bir mineraldir ve iyileşmeyi hızlandırır.",
                textBeshil: "Çinko IV Terapi, bağışıklık sistemini güçlendirir ve hücresel onarımı hızlandırır."
              }




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
                        <h2>Bu içerik Eternal Sağlık tarafından onaylanmıştır. Tıbbi Yayın Kurulumuz, sağlık alanında güvenilir bilgiye erişim sağlamak amacıyla oluşturulmuş deneyimli doktor ve araştırmacılardan oluşan bir ekiptir.</h2>
                    </div>
                </div>

            </Wrapper>
        </div>
    );
};

export default SerumlarDetails;
