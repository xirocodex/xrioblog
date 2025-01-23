import styles from "./footer.module.css"

export default function Footer() {
 return (
  <div className={styles.container}>
   <div className={styles.logo}>XiroBlog</div>
   <div className={styles.text}>
    XiroBlog @All rights reserved
   </div>

  </div>
 );
}