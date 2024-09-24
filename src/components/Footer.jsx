import { useEffect, useState } from "react";
import styles from "./Footer.module.css";

function Footer() {
  const [year, setYear] = useState(null);

  useEffect(function () {
    setYear(new Date().getFullYear());
  }, []);

  return (
    <footer className={styles.footer}>
      <div className={styles.footerEnd}>
      <div className={styles.form}>
        <input type="email" placeholder="Updates in your inbox..." id="email" />
        <label htmlFor="email">Please insert a valid email</label>
        <button>GO</button>
      </div>
      <p className={`${styles.copyright} ${styles.copyrightDesktop}`}>Copyright {year}. All Rights Reserved</p>
      </div>

      <div className={styles.links}>
        <div>
          <div>Home</div>
          <div>Pricing</div>
          <div>Products</div>
          <div>About Us</div>
        </div>

        <div>
          <div>Careers</div>
          <div>Community</div>
          <div>Privacy Policy</div>
        </div>
      </div>

      <div className={styles.footerStart}>
        <div className={styles.socials}>
          <img src="./images/icon-facebook.svg" alt="" />
          <img src="./images/icon-youtube.svg" alt="" />
          <img src="./images/icon-twitter.svg" alt="" />
          <img src="./images/icon-pinterest.svg" alt="" />
          <img src="./images/icon-instagram.svg" alt="" />
        </div>

        <img src="./images/logo__white.png" alt="" className={styles.logo} />
      </div>
      <p className={`${styles.copyright} ${styles.copyrightMobile}`} >Copyright {year}. All Rights Reserved</p>
    </footer>
  );
}

export default Footer;
