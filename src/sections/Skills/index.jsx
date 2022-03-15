import React, { Fragment } from "react";
import classnames from "classnames";
import styles from "./Skills.module.scss";
import { StaticQuery, graphql } from "gatsby";

export default function Skills() {
  return (
    <StaticQuery
      query={graphql`
        query MyQuery {
          allContentfulSkills {
            edges {
              node {
                list
                title
              }
            }
          }
        }
      `}
      render={(data) => (
        <Fragment>
          <h2 className={classnames(styles.title, "title")}>Skills</h2>
          <section className={styles.container}>
            {data.allContentfulSkills.edges
              .slice(0)
              .reverse()
              .map((skills, key) => (
                <Fragment key={key}>
                  <h3 className={styles.label}>{skills.node.title}</h3>
                  <ul className={styles.items}>
                    {skills.node.list.map((item) => (
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
