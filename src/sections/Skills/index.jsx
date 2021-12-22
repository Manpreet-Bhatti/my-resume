import React, { Fragment } from "react";
import classnames from "classnames";
import styles from "./Skills.module.scss";
import { SkillsData } from "./data";

export default function Skills() {
  return (
    <Fragment>
      <h2 className={classnames(styles.title, "title")}>Skills</h2>
      <section className={styles.container}>
        {SkillsData.map((skills, key) => (
          <Fragment key={key}>
            <h3 className={styles.label}>{skills.title}</h3>
            <ul className={styles.items}>
              {skills.content.map((item) => (
                <li className={styles.item} key={item}>
                  {item}
                </li>
              ))}
            </ul>
          </Fragment>
        ))}
      </section>
    </Fragment>
  );
}
