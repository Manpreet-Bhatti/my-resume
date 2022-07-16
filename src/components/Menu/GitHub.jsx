import React from "react";
import { FiGithub } from "react-icons/fi";
import * as styles from "./Menu.module.scss";

export default function GitHub() {
  return (
    <a
      href="https://github.com/Manpreet-Bhatti/my-resume"
      aria-label="Resume GitHub repo"
      className={styles.button}
      rel="noreferrer noopener"
      target="_blank"
    >
      <FiGithub className={styles.icon} />
    </a>
  );
}
