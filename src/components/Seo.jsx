import React from "react";
import { Helmet } from "react-helmet";
import { useStaticQuery, graphql } from "gatsby";

export default function Seo({
  description = "",
  lang = "en",
  meta = [],
  title,
}) {
  const { resume } = useStaticQuery(query);
  const metaDesc = description || resume.siteMetadata.description;

  return (
    <Helmet
      htmlAttributes={{ lang }}
      title={title}
      titleTemplate={`%s | ${resume.siteMetadata.title}`}
      meta={[
        {
          name: "description",
          content: metaDesc,
        },
        {
          property: "og:title",
          content: title,
        },
        {
          property: "og:description",
          content: metaDesc,
        },
        {
          property: "og:type",
          content: "website",
        },
      ].concat(meta)}
    />
  );
}

const query = graphql`
  {
    site {
      siteMetadata {
        title
        description
        author
      }
    }
  }
`;
