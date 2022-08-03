import React from "react";
import * as styles from "./Work.module.scss";
import { StaticQuery, graphql } from "gatsby";
import { FiGithub, FiLink } from "react-icons/fi";

export default function Work() {
  return (
    <StaticQuery
      query={graphql`
        query WorkQuery {
          allContentfulWork {
            edges {
              node {
                start(formatString: "MMM DD YYYY")
                end(formatString: "MMM DD YYYY")
                company
                home
                position
                description {
                  content
                }
              }
            }
          }
        }
      `}
      render={(data) => (
        <section className="container">
          <h2 className={"title"}>Work</h2>
          {data.allContentfulWork.edges
            .slice(0)
            .reverse()
            .map((job, key) => {
              return (
                <div key={key}>
                  <div className={styles.header}>
                    <h3 className={styles.title}>
                      {job.node.company}&nbsp;&nbsp;
                      {job.node.home && (
                        <a
                          href={job.node.home}
                          target="_blank"
                          rel="noreferrer"
                        >
                          <FiLink className={styles.icon} />
                        </a>
                      )}
                    </h3>
                    <span className={styles.dates}>
                      {job.node.start.split(" ")[0] +
                        " " +
                        job.node.start.split(" ")[2]}{" "}
                      {"\u2013"}{" "}
                      {job.node.start.split(" ")[1] ===
                      job.node.end.split(" ")[1]
                        ? "Present"
                        : job.node.end.split(" ")[0] +
                          " " +
                          job.node.end.split(" ")[2]}
                    </span>
                  </div>
                  <p className={styles.subtitle}>{job.node.position}</p>
                  <div className={styles.content}>
                    <ul>
                      {job.node.description.map((content, i) => {
                        return (
                          <li key={i}>
                            <p>
                              {content.content}{" "}
                              {content.link && content.label && (
                                <a
                                  aria-label={content.label}
                                  rel="noreferrer noopenner"
                                  className={styles.link}
                                  target="_blank"
                                  href={content.link}
                                >
                                  <FiGithub className={styles.icon} />
                                </a>
                              )}
                            </p>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                </div>
              );
            })}
        </section>
      )}
    />
  );
}
