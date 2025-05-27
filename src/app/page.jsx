import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <Image
        src="/hero.png"
        alt="Instagram"
        width={30}
        height={30}
        className={styles["icon-socials-media"]}
      />
    </div>
  );
}
