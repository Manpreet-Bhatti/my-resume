import React from "react";
import classnames from "classnames";
import { EduData } from "./data";
import * as styles from "./Education.module.scss";

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
        <h3 className={styles.label}>Relavent Coursework</h3>
        <ul>
          {EduData["coursework"].map((org, key) => {
            return (
              <li className={styles.item} key={key}>
                {org}
              </li>
            );
          })}
        </ul>
        <h3 className={styles.label}>Leadership and Clubs</h3>
        <ul>
          {EduData["organizations"].map((org, key) => {
            return (
              <li className={styles.item} key={key}>
                {org}
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
