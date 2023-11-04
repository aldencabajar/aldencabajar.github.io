const path = require("path");
const { createFilePath } = require("gatsby-source-filesystem");

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions;

  if (node.internal.type === `MarkdownRemark`) {
    const slug = createFilePath({
      node,
      getNode,
      basePath: `content/posts/`,
      trailingSlash: false,
    });
    createNodeField({
      node,
      name: `slug`,
      value: slug,
    });
  }

  if (node.internal.type === `JupyterNotebook`) {
    const slugBase = node.json.metadata.title
      .split(" ")
      .map((token) => token.toLowerCase())
      .join("-");

    createNodeField({
      name: "slug",
      node,
      value: `/${slugBase}`,
    });
  }
};
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const results = await graphql(`
    query {
      allMarkdownRemark {
        edges {
          node {
            fields {
              slug
            }
          }
        }
      }

      allJupyterNotebook {
        edges {
          node {
            fields {
              slug
            }
          }
        }
      }
    }
  `);

  for (let [k, node] of Object.entries(results.data)) {
    node.edges.forEach(({ node }) => {
      createPage({
        path: node.fields.slug,
        component: path.resolve(`./src/components/Blog/BlogPost.js`),
        context: {
          slug: node.fields.slug,
        },
      });
    });
  }
};
