const path = require("path");

module.exports = {
  pathPrefix: '/my-personal-website',
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "my-website-gatsby",
  },
  plugins: [
    "gatsby-plugin-react-helmet",
    "gatsby-transformer-remark",
    'gatsby-plugin-image',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    'gatsby-transformer-remark',
     `@rafaelquintanilha/gatsby-transformer-ipynb`,
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: "./src/pages/",
      },
      __key: "pages",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: 'blog',
        path: './content/posts/',
      }
    },
    {
      resolve: "gatsby-plugin-root-import",
      options: {
        resolveModules: [path.join(__dirname, "src")],
        components: path.join(__dirname, "src", "components"),
        data: path.join(__dirname, "data")
      }
    },
    {
      resolve: 'gatsby-plugin-anchor-links',
      options: {
        duration: 100
      }
    }
  ]
};
