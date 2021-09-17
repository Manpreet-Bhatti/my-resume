import React from "react";
import { FiGithub } from "react-icons/fi";
import styles from "./Menu.module.scss";

export default function GitHub() {
  return (
    <a
      href="https://github.com/Manpreet-Bhatti/my-resume"
      aria-label="Toggle dark mode"
      className={styles.button}
      rel="noreferrer noopener"
      target="_blank"
    >
      <FiGithub className={styles.icon} />
    </a>
  );
}
