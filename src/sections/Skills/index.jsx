import React from "react";
import classnames from "classnames";
import styles from "./Skills.module.scss";
import { SkillsData } from "./data";

export default function Skills() {
  return (
    <section className="container">
      <h2 className={classnames(styles.title, "title")}>Skills</h2>
      <ul className={styles.items}>
        {SkillsData.map((skills, key) => (
          <li className={styles.item} key={key}>
            <h3 className={styles.label}>{skills.title}</h3>
            <span className={styles.text}>{skills.content.join(", ")}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
