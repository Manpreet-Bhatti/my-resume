import React, { useState, useEffect } from "react";
import Helmet from "react-helmet";
import { graphql, useStaticQuery } from "gatsby";
import Layout from "../components/Layout";
import Header from "../sections/Header";
import Skills from "../sections/Skills";
import Education from "../sections/Education";
import Work from "../sections/Work";
import Projects from "../sections/Projects";
import Menu from "../components/Menu";
import Seo from "../components/Seo";

export const modeContext = React.createContext({ get: false, set() {} });
export default function IndexPage() {
  const [mode, setMode] = useState();
  useEffect(() => setMode(localStorage.getItem("dark_mode") === "true"), []);
  useEffect(() => {
    if (mode) {
      document.body.classList.add("dark");
      localStorage.setItem("dark_mode", true);
    } else {
      document.body.classList.remove("dark");
      localStorage.setItem("dark_mode", false);
    }
  }, [mode]);
  const { site } = useStaticQuery(query);

  return (
    <modeContext.Provider value={{ get: mode, set: setMode }}>
      <Seo title={site.siteMetadata.author} />
      <Helmet>
        <link
          rel="preload"
          as="font"
          type="font/woff2"
          href="/fonts/Avenir-Medium.woff2"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          as="font"
          type="font/woff2"
          href="/fonts/Avenir-Light.woff2"
          crossOrigin="anonymous"
        />
      </Helmet>
      <Layout
        seo={{
          title: site.siteMetadata.author,
        }}
        header={<Header />}
        skills={<Skills />}
        education={<Education />}
        work={<Work />}
        projects={<Projects />}
      />
      <Menu />
    </modeContext.Provider>
  );
}

const query = graphql`
  {
    site {
      siteMetadata {
        author
      }
    }
  }
`;
