import { graphql, useStaticQuery } from "gatsby";

export const useSiteMetadata = () => {
  const data = useStaticQuery(graphql`
    query siteMetadataQuery {
      site {
        siteMetadata {
          description
          siteUrl
          title
          googleSiteVerification
        }
      }
    }
  `);

  return data.site.siteMetadata;
};
