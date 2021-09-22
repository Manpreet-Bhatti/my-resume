import React from "react";
import styles from "./Work.module.scss";
import { WorkData } from "./data";

export default function Work() {
  return (
    <section className="container">
      <h2 className={"title"}>Work</h2>
      {WorkData["experience"].map((job, key) => {
        return (
          <div key={key}>
            <div className={styles.header}>
              <h3 className={styles.title}>{job.company}</h3>
              <span className={styles.dates}>
                {job.start} – {job.end}
              </span>
            </div>
            <p className={styles.subtitle}>{job.position}</p>
            <div className={styles.content}>
              <ul>
                {job.description.map((content, i) => {
                  return <li key={i}>{content}</li>;
                })}
              </ul>
            </div>
          </div>
        );
      })}
    </section>
  );
}
