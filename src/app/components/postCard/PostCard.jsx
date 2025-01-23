

import Image from "next/image";
import styles from "./postCard.module.css"
import Link from 'next/link';


export default function PostCard() {

 return (
  <div className={styles.container}>

   <div className={styles.top}>
    <div className={styles.imgContainer}>
     <Image
      src="banner.jpg"
      fill
      className={styles.img}

     />
    </div>
    <span className={styles.date}>01.01.2024</span>
   </div>

   <div className={styles.bottom}>
    <h1 className={styles.title}>Title</h1>
    <p className={styles.desc}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum aspernatur modi maiores corporis atque corrupti libero tenetur dolores iste perferendis exercitationem inventore similique asperiores reprehenderit hic placeat, vitae ad mollitia?</p>
    <Link className={styles.link} href="/blog/post" >Read More</Link>
   </div>

  </div>
 );
}