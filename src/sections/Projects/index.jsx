import React from "react";
import { StaticQuery, graphql } from "gatsby";
import { FiGithub, FiLink } from "react-icons/fi";
import * as styles from "./Projects.module.scss";

export default function Projects() {
  return (
    <StaticQuery
      query={graphql`
        query ProjectsQuery {
          contentfulListOfProjects {
            projects {
              name
              home
              github
              description {
                content
              }
            }
          }
        }
      `}
      render={(data) => (
        <section className="container">
          <h2 className="title">Projects</h2>
          {data.contentfulListOfProjects.projects.map((project, key) => {
            return (
              <div key={key}>
                <div className={styles.header}>
                  <h3 className={styles.title}>
                    {project.name}&nbsp;&nbsp;
                    {project.home === "-" && project.github === "-" ? (
                      ""
                    ) : (
                      <a
                        aria-label={project.name}
                        href={
                          project.home === "-" ? project.github : project.home
                        }
                        className={styles.link}
                        target="_blank"
                        rel="noreferrer noopenner"
                      >
                        {project.home === "-" ? (
                          <FiGithub className={styles.icon} />
                        ) : (
                          <FiLink className={styles.icon} />
                        )}
                      </a>
                    )}
                  </h3>
                </div>
                <div className={styles.content}>
                  <ul>
                    {project.description.map((content, i) => {
                      return (
                        <li key={i}>
                          <p>{content.content}</p>
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
