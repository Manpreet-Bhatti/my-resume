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
                label
                link
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
                      <a
                        aria-label={job.company}
                        href={job.home}
                        className={styles.link}
                        target="_blank"
                        rel="noreferrer noopenner"
                      >
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
                          {content.content}
                          {content.github && content.label && (
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
                          {content.link && (
                            <a
                              aria-label={content.label}
                              rel="noreferrer noopenner"
                              className={styles.link}
                              target="_blank"
                              href={content.link}
                            >
                              <FiLink className={styles.icon} />
                            </a>
                          )}
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
