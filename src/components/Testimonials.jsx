import { useState } from "react";
import Testimonial from "./Testimonial";
import styles from "./Testimonials.module.css";
import Button from "./Button";

function Testimonials() {
  const [numTestimonial, setNumTestimonial] = useState(0);

  function handleChange(e) {
    if (e._reactName === "onClick") {
      setNumTestimonial(+Array.from(e.target.classList).at(-1));
    } else {
      setNumTestimonial(
        +Array.from(e.target.classList).at(-1) + 1 === 4
          ? 0
          : +Array.from(e.target.classList).at(-1) + 1
      );
    }
  }

  return (
    <div className={styles.testimonials}>
      <h2>What they&apos;ve said</h2>

      <div className={styles.testimonialsSlider}>
        <div className={styles.testimonialsSliderContent}>
      <Testimonial
          num={0}
          handleChange={handleChange}
          image="./images/avatar-anisha.png"
          name="Anisha Li"
        >
         “Manage has supercharged our team’s workflow. The ability to maintain visibility on larger milestones at all times keeps everyone motivated.”
        </Testimonial>



        <Testimonial
          num={1}
          handleChange={handleChange}
          image="./images/avatar-ali.png"
          name="Ali Bravo"
        >
          “We have been able to cancel so many other subscriptions since using
          Manage. There is no more cross-channel confusion and everyone is much
          more focused.”
        </Testimonial>

        <Testimonial
          num={2}
          handleChange={handleChange}
          image="./images/avatar-richard.png"
          name=" Richard Watts"
        >
          “Manage allows us to provide structure and process. It keeps us organized and focused. I can’t stop recommending them to everyone I talk to!”
        </Testimonial>

        <Testimonial
          num={3}
          handleChange={handleChange}
          image="./images/avatar-shanai.png"
          name="Shanai Gough"
        >
          “Their software allows us to track, manage and collaborate on our projects from anywhere. It keeps the whole team in-sync without being intrusive.”
        </Testimonial>
        </div>
        <div className={styles.testimonialsSliderContent}>
      <Testimonial
          num={0}
          handleChange={handleChange}
          image="./images/avatar-anisha.png"
          name="Anisha Li"
        >
         “Manage has supercharged our team’s workflow. The ability to maintain visibility on larger milestones at all times keeps everyone motivated.”
        </Testimonial>



        <Testimonial
          num={1}
          handleChange={handleChange}
          image="./images/avatar-ali.png"
          name="Ali Bravo"
        >
          “We have been able to cancel so many other subscriptions since using
          Manage. There is no more cross-channel confusion and everyone is much
          more focused.”
        </Testimonial>

        <Testimonial
          num={2}
          handleChange={handleChange}
          image="./images/avatar-richard.png"
          name=" Richard Watts"
        >
          “Manage allows us to provide structure and process. It keeps us organized and focused. I can’t stop recommending them to everyone I talk to!”
        </Testimonial>

        <Testimonial
          num={3}
          handleChange={handleChange}
          image="./images/avatar-shanai.png"
          name="Shanai Gough"
        >
          “Their software allows us to track, manage and collaborate on our projects from anywhere. It keeps the whole team in-sync without being intrusive.”
        </Testimonial>
        </div>
      </div>


<div className={styles.mobileTestimonials}>
      {numTestimonial === 0 && (
        <Testimonial
          num={0}
          handleChange={handleChange}
          image="./images/avatar-anisha.png"
          name="Anisha Li"
        >
         “Manage has supercharged our team’s workflow. The ability to maintain visibility on larger milestones at all times keeps everyone motivated.”
        </Testimonial>
      )}


      {numTestimonial === 1 && (
        <Testimonial
          num={1}
          handleChange={handleChange}
          image="./images/avatar-ali.png"
          name="Ali Bravo"
        >
          “We have been able to cancel so many other subscriptions since using
          Manage. There is no more cross-channel confusion and everyone is much
          more focused.”
        </Testimonial>
      )}

      {numTestimonial === 2 && (
        <Testimonial
          num={2}
          handleChange={handleChange}
          image="./images/avatar-richard.png"
          name=" Richard Watts"
        >
          “Manage allows us to provide structure and process. It keeps us organized and focused. I can’t stop recommending them to everyone I talk to!”
        </Testimonial>
      )}

      {numTestimonial === 3 && (
        <Testimonial
          num={3}
          handleChange={handleChange}
          image="./images/avatar-shanai.png"
          name="Shanai Gough"
        >
          “Their software allows us to track, manage and collaborate on our projects from anywhere. It keeps the whole team in-sync without being intrusive.”
        </Testimonial>
      )}



      <div className={styles.dots}>
        <div
          className={`${styles.dot} ${
            numTestimonial === 0 && styles.dotClicked
          } 0`}
          data-testimonial="0"
          onClick={(e) => handleChange(e)}
        ></div>
        <div
          className={`${styles.dot} ${
            numTestimonial === 1 && styles.dotClicked
          } 1`}
          onClick={(e) => handleChange(e)}
        ></div>
        <div
          className={`${styles.dot} ${
            numTestimonial === 2 && styles.dotClicked
          } 2`}
          onClick={(e) => handleChange(e)}
        ></div>
        <div
          className={`${styles.dot} ${
            numTestimonial === 3 && styles.dotClicked
          } 3`}
          onClick={(e) => handleChange(e)}
        ></div>
      </div>
      </div>

      <Button>Get Started</Button>
    </div>
  );
}

export default Testimonials;
