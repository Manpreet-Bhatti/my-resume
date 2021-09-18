const { description } = require("./package.json");

module.exports = {
  siteMetadata: {
    title: "my-resume",
    blurb: "An aspiring full-stack developer",
    author: "Manpreet Bhatti",
    description,
  },
  plugins: [
    "gatsby-plugin-react-helmet",
    "gatsby-transformer-sharp",
    "gatsby-plugin-offline",
    "gatsby-plugin-sharp",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: "manpreet-bhatti-resume",
        short_name: "mbhatti-resume",
        start_url: "/",
        background_color: "#ffffff",
        theme_color: "#DF3039",
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
  ],
};
