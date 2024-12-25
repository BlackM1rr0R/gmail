import React, { useEffect } from "react";
import styles from './index.module.css'
const FeaturableWidget = () => {
  useEffect(() => {
    // Script tag'ini dinamik olarak ekle
    const script = document.createElement("script");
    script.src = "https://featurable.com/assets/bundle.js";
    script.defer = true;
    script.charset = "UTF-8";

    // Script yüklendikten sonra çalışır
    document.body.appendChild(script);

    // Cleanup: Script'i kaldır
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div
      id="featurable-ddd9981e-eda0-4798-a92b-2dca78041fb2"
      data-featurable-async
      data-location-code="de"
      className={styles.div1}
    ></div>
  );
};

export default FeaturableWidget;
