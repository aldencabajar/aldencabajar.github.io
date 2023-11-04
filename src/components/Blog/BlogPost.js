import { graphql } from "gatsby";
import React, { useEffect } from "react";
import Layout from "components/layout";
import Divider from "@material-ui/core/Divider";
import "css/blog-post.css";

export default function BlogPost({ data }) {
  console.log(data.markdownRemark);
  const post =
    data.markdownRemark !== null ? data.markdownRemark : data.jupyterNotebook;
  const blogDate = new Date(post.metadata.date).toISOString().split("T")[0];

  return (
    <Layout>
      <div className="section-body blog-post">
        <header className="blog-post-header">
          <h2>{post.metadata.title}</h2>
          <h3 id="post-date">{"posted on " + blogDate}</h3>
          <Divider className="blog-post-divide" />
        </header>
        <div
          className="blog-post-content"
          dangerouslySetInnerHTML={{ __html: post.html }}
        />
      </div>
    </Layout>
  );
}

export const query = graphql`
  query BlogQuery($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      metadata: frontmatter {
        title
        date
      }
    }
    jupyterNotebook(fields: { slug: { eq: $slug } }) {
      html
      metadata {
        title
        date
      }
    }
  }
`;
