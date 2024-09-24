import { useState } from "react";
import styles from "./Navigation.module.css";
import { useManage } from "../contexts/ManageProvider";
import Button from "./Button";

function Navigation() {
  const { isMobile } = useManage();
  const [imageUrl, setImageUrl] = useState("./images/icon-hamburger.svg");
  const isOpen = imageUrl === "./images/icon-close.svg";

  function handleOpenNav() {
    setImageUrl((url) =>
      url === "./images/icon-hamburger.svg"
        ? "./images/icon-close.svg"
        : "./images/icon-hamburger.svg"
    );
  }

  return (
    <>
      {isMobile ? (
        <header className={styles.headerMobile}>
          <img src="./images/logo.svg" alt="" />
          <img src={imageUrl} alt="" onClick={handleOpenNav} />
          <ul className={isOpen ? styles.mobileUlOpen : ""}>
            <li>pricing</li>
            <li>product</li>
            <li>about us</li>
            <li>careers</li>
            <li>community</li>
          </ul>
        </header>
      ) : (
        <header className={styles.headerDesktop}>
          <img src="./images/logo.svg" alt="" />
          <ul>
          <li>pricing</li>
            <li>product</li>
            <li>about us</li>
            <li>careers</li>
            <li>community</li>
          </ul>
          <Button>Get Started</Button>
        </header>
      )}
    </>
  );
}

export default Navigation;
