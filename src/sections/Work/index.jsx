import React from "react";
import * as styles from "./Work.module.scss";
import { StaticQuery, graphql } from "gatsby";
import { FiGithub, FiLink } from "react-icons/fi";

export default function Work() {
  return (
    <StaticQuery
      query={graphql`
        query WorkQuery {
          contentfulListOfWork {
            work {
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
      `}
      render={(data) => (
        <section className="container">
          <h2 className={"title"}>Work</h2>
          {data.contentfulListOfWork.work.map((job, key) => {
            return (
              <div key={key}>
                <div className={styles.header}>
                  <h3 className={styles.title}>
                    {job.company}&nbsp;&nbsp;
                    {job.home && (
                      <a href={job.home} target="_blank" rel="noreferrer">
                        <FiLink className={styles.icon} />
                      </a>
                    )}
                  </h3>
                  <span className={styles.dates}>
                    {job.start.split(" ")[0] + " " + job.start.split(" ")[2]}{" "}
                    {"\u2013"}{" "}
                    {job.start.split(" ")[1] === job.end.split(" ")[1]
                      ? "Present"
                      : job.end.split(" ")[0] + " " + job.end.split(" ")[2]}
                  </span>
                </div>
                <p className={styles.subtitle}>{job.position}</p>
                <div className={styles.content}>
                  <ul>
                    {job.description.map((content, i) => {
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
