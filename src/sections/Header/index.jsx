import React from "react";
import classnames from "classnames";
import { graphql, useStaticQuery } from "gatsby";
import iconMap from "./iconMap";
import { HeaderData } from "./data";
import styles from "./Header.module.scss";

export default function Header() {
  const { site } = useStaticQuery(query);
  return (
    <header className={classnames(styles.container, "container")}>
      <div className={styles.head}>
        <h1 className={styles.title}>{site.siteMetadata.author}</h1>
        <p className={styles.blurb}>{site.siteMetadata.blurb}</p>
      </div>
      <ul className={styles.items}>
        {HeaderData.map(({ content, key }) => {
          const Icon = iconMap[content.id];
          return (
            <li className={styles.item} key={key}>
              <a
                aria-label={content.description}
                rel="noreferrer noopenner"
                className={styles.link}
                target="_blank"
                href={content.link}
              >
                <Icon className={styles.icon} />
                {content.label}
              </a>
            </li>
          );
        })}
      </ul>
    </header>
  );
}

const query = graphql`
  {
    site {
      siteMetadata {
        author
        blurb
      }
    }
  }
`;
