import React from "react";
import styles from "./button.module.css";
import Link from "next/link";

const Button = ({ text, url }) => {
  return (
    <Link href={url}>
      <button className={styles.botton}>{text}</button>
    </Link>
  );
};

export default Button;
