import styles from "./Cta.module.css";
import Button from "./Button";

function Cta() {
  return (
    <div className={styles.cta}>
      <h2>Simplify how your team works today.</h2>
      <Button>Get Started</Button>
      <div className={styles.downBg}></div>
      <div className={styles.topBg}></div>
    </div>
  );
}

export default Cta;
