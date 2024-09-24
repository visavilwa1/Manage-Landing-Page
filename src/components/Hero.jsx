import Button from "./Button";
import styles from "./Hero.module.css";

function Hero() {
  return (
    <div className={styles.hero}>
      <img src="./images/illustration-intro.svg" alt="" />
      <div>
        <h1>Bring everyone together to build better products.</h1>
        <p>
          Manage makes it simple for software teams to plan day-to-day tasks
          while keeping the larger team goals in view.
        </p>
        <Button>Get Started</Button>
      </div>
    </div>
  );
}

export default Hero;
