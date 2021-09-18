import React from "react";
import { Helmet } from "react-helmet";
import { useStaticQuery, graphql } from "gatsby";

export default function Seo({
  description = "",
  lang = "en",
  meta = [],
  title,
}) {
  const { site } = useStaticQuery(query);
  const metaDesc = description || site.siteMetadata.description;

  return (
    <Helmet
      htmlAttributes={{ lang }}
      title={title}
      titleTemplate={`%s | ${site.siteMetadata.title}`}
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
