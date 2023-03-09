const { description } = require("./package.json");
require("dotenv").config();

module.exports = {
  siteMetadata: {
    title: "my-resume",
    blurb: "Front-end Engineer @ Agentnoon",
    author: "Manpreet Bhatti",
    description,
  },
  plugins: [
    "gatsby-plugin-react-helmet",
    "gatsby-transformer-sharp",
    "gatsby-plugin-offline",
    "gatsby-plugin-sharp",
    "gatsby-plugin-image",
    "gatsby-plugin-netlify",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: "manpreet-bhatti-resume",
        short_name: "mbhatti-resume",
        start_url: "/",
        background_color: "#ffffff",
        theme_color: "#CE2029",
        display: "minimal-ui",
        icon: "src/logo.svg",
      },
    },
    {
      resolve: "gatsby-plugin-sass",
      options: {
        cssLoaderOptions: Object.assign({
          camelCase: false,
        }),
      },
    },
    {
      resolve: "gatsby-source-contentful",
      options: {
        accessToken: process.env.C_ACCESS_ID,
        spaceId: process.env.C_SPACE_ID,
      },
    },
  ],
};
