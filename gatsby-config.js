const path = require("path");

module.exports = {
  siteMetadata: {
    siteUrl: `https://aldencabajar.github.io`,
    title: `Alden's Web Nook`,
    description: `Documenting thoughts and ideas in data and software.`,
    googleSiteVerification: `vYoXiQ_tbFXp-IaPGvYncMf-SuM5h2FfqiK5oKNhqGo`

  },
  plugins: [
    "gatsby-plugin-react-helmet",
    "gatsby-transformer-remark",
    'gatsby-plugin-image',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    'gatsby-transformer-remark',
    'gatsby-transformer-json',
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
      resolve: "gatsby-source-filesystem",
      options: {
        name: 'jsonData',
        path: './data/',
      }
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: 'images',
        path: './static/img',
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
