import React from "react";
import * as styles from "./Layout.module.scss";

export default function Layout({ header, education, skills, work, projects }) {
  return (
    <main className={styles.container}>
      <div className={styles.body}>
        <div className={styles.item}>{header}</div>
        <div className={styles.item}>{skills}</div>
        <div className={styles.item}>{education}</div>
        <div className={styles.item}>{work}</div>
        <div className={styles.item}>{projects}</div>
      </div>
    </main>
  );
}
