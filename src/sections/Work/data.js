import React from "react";
import { FiGithub } from "react-icons/fi";
import styles from "./Work.module.scss";

export const WorkData = {
  experience: [
    {
      company: "iVedha",
      position: "Junior Developer",
      start: "May 2021",
      end: "Sept 2021",
      description: [
        <p>
          A leading global cloud managed services provider for enterprises in
          Canada , USA , Mexico and across the World.
        </p>,
        <p>
          Working on developing and implementing a Natural Language Processing
          search engine for looking up relevant support tickets based off Global
          Vectors for Word Representation.
        </p>,
        <p>
          Building upon SwaggerHub, a custom API-documentation space was created
          for the company, easing access and generating clarity for
          current/future developers.
        </p>,
      ],
    },
    {
      company: "CheaprEats",
      position: "Front-End Engineer",
      start: "May 2020",
      end: "Sept 2020",
      description: [
        <p>
          A food pickup service that makes the cross-interaction between the
          customer and vendor a lot easier while being targeted to
          post-secondary students.
        </p>,
        <p>
          Worked with team members to create an auto-README documenter via
          TypeScript and GitHub APIs, granting developers the power to visualize
          their repository's file system for training, onboarding, and/or
          showcase purposes.
          <a
            aria-label="GitHub repo for the auto-README documenter"
            rel="noreferrer noopenner"
            className={styles.link}
            target="_blank"
            href="https://github.com/cheapreats/auto-readme-docs"
          >
            <FiGithub className={styles.icon} />
          </a>
        </p>,
        <p>
          Collaborated with designers to implement a TypeScript location-based
          search function which allowed users to strategically find the closest
          restaurants for food delivery.
        </p>,
      ],
    },
    {
      company: "benchMarked Studios",
      position: "Full-Stack Developer",
      start: "May 2019",
      end: "Oct 2019",
      description: [
        <p>
          A consulting agency that looks to solve problems with robust, tested,
          specifically engineered software.
        </p>,
        <p>
          Worked on creating an accessible and efficient app for Sports Clips
          customers which allowed them to redeem coupons, scour deals, and make
          appointments by leveraging Ionic React.
        </p>,
        <p>
          With the goal of providing accessible financing for Amazon Sellers, a
          React Material-UI website was developed for PayoutPrime, fitly
          furthering services to Sellers such as Ari Modern Essentials, Discover
          Learning, and Overstock Bunker.
        </p>,
      ],
    },
  ],
};
