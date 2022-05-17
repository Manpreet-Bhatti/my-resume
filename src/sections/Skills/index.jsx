import React, { Fragment } from "react";
import classnames from "classnames";
import styles from "./Skills.module.scss";
import { StaticQuery, graphql } from "gatsby";

export default function Skills() {
  return (
    <StaticQuery
      query={graphql`
        query SkillsQuery {
          contentfulListOfSkills {
            skills {
              list
              title
            }
          }
        }
      `}
      render={(data) => (
        <Fragment>
          <h2 className={classnames(styles.title, "title")}>Skills</h2>
          <section className={styles.container}>
            {data.contentfulListOfSkills.skills.map((skills, key) => (
              <Fragment key={key}>
                <h3 className={styles.label}>{skills.title}</h3>
                <ul className={styles.items}>
                  {skills.list.map((item) => (
                    <li className={styles.item} key={item}>
                      {item}
                    </li>
                  ))}
                </ul>
              </Fragment>
            ))}
          </section>
        </Fragment>
      )}
    />
  );
}
