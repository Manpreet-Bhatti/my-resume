import React from "react";
import classnames from "classnames";
import { EduData } from "./data";
import styles from "./Education.module.scss";

export default function Education() {
  return (
    <section className="container">
      <h2 className="title">Education</h2>
      <div className={styles.header}>
        <h3 className={classnames(styles.title, "title")}>
          {EduData["title"]}
        </h3>
        <span className={styles.dates}>
          {EduData["start"]} – {EduData["end"]}
        </span>
      </div>
      <p className={styles.subtitle}>{EduData["degree"]}</p>
      <div className={styles.content}>
        <ul>
          {EduData["content"].map((para, key) => {
            return <li key={key}>{para}</li>;
          })}
        </ul>
      </div>
    </section>
  );
}