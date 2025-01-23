"use client"

import Image from "next/image";
import styles from "./Home.module.css"


export default function Home() {
  return (
<div>
<div className={styles.container}>

<div className={styles.textContainer}>
  <h1 className={styles.title}>Creative Thoughts Agency.</h1>
  <p className={styles.desc}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Saepe eum dolor a modi reiciendis quibusdam voluptatum corporis? Error, a expedita! Eaque eos soluta molestias, mollitia delectus ab atque animi id?
  </p>

  <div className={styles.buttons}>
    <button className={styles.button}>Learn More</button>
    <button className={styles.button}>Contact</button>


  </div>
  <div className={styles.brands}>
    <Image src="/brands.jpg" fill className={styles.brandImage} alt="banner" />
  </div>

</div>


<div className={styles.imgContainer}>
  <Image src="/blog.jpg" alt="blog" fill className="styles.heroImg" />
</div>

</div >
</div>
  );
}
