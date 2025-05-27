import React from "react";
import styles from "./footer.module.css";
import Image from "next/image";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div>&copy; Othmane Laghlimi. All rights reserved 2025. </div>
      <div className={styles.socials}>
        <Image
          src="/facebook.png"
          alt="Facebook"
          width={30}
          height={30}
          className={styles["icon-socials-media"]}
        />
        <Image
          src="/instagram.png"
          alt="Instagram"
          width={30}
          height={30}
          className={styles["icon-socials-media"]}
        />

        <Image
          src="/twitter.png"
          alt="X"
          width={30}
          height={30}
          className={styles["icon-socials-media"]}
        />
        <Image
          src="/linkedin.png"
          alt="LinkedIn"
          width={30}
          height={30}
          className={styles["icon-socials-media"]}
        />
      </div>
    </div>
  );
};

export default Footer;
