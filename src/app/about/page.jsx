import Image from "next/image";
import styles from "./about.module.css";

function About() {
    return (
        <div className={styles.container}>
        <div className={styles.textContainer}>
          <h2 className={styles.subTitle}>About Agency</h2>
          <h1 className={styles.title}>I am Abdul Mazed We create digital ideas that are bigger, bolder, braver and better</h1>
          <p className={styles.desc}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi ea sed laboriosam inventore cupiditate. Perferendis cum provident exercitationem impedit doloremque soluta voluptate tempora laboriosam! Ipsa autem unde repudiandae ab asperiores?</p>
  
          <div className={styles.boxes}>
            <div className={styles.box}>
              <h1>10 K+</h1>
              <p>Year of Experience</p>
            </div>
            <div className={styles.box}>
              <h1>10 K+</h1>
              <p>Year of Experience</p>
            </div>
            <div className={styles.box}>
              <h1>10 K+</h1>
              <p>Year of Experience</p>
            </div>
          </div>
  
        </div>
  
        <div className={styles.imgContainer}>
          <Image
            src="/about.jpg"
            alt="Image of The Author"
            fill
            className={styles.img}
          />
  
  
        </div>
  
      </div>
    );
}

export default About;