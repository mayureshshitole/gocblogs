import { request, gql } from "graphql-request";

const graphcmsAPI = "https://api-eu-central-1.graphcms.com/v2/ckvxidocm3htf01xwe6ac0any/master";

export const getPosts = async () => {
  const query = gql`
    query MyQuery {
      blogsConnection(orderBy: createdAt_DESC, last: 20) {
        edges {
          node {
            title
            slug
            metaDesciption
            createdAt
            featuredimage {
              url
            }
            categories {
              name
              slug
            }
          }
        }
      }
    }
  `;

  const result = await request(graphcmsAPI, query);

  return result.blogsConnection.edges;
};

export const getPostDetails = async (slug) => {
  const query = gql`
    query MyQuery($slug: String!) {
      blogs(where: { slug: $slug }) {
        title
        slug
        metaDesciption
        content {
          raw
        }
        featuredimage {
          url
        }
        categories {
          name
          slug
        }
      }
    }
  `;

  const result = await request(graphcmsAPI, query, { slug });

  return result.blogs;
};

export const getRecent10 = async () => {
  const query = gql`
    query MyQuery {
      blogsConnection(orderBy: createdAt_DESC, last: 10) {
        edges {
          node {
            title
            slug
          }
        }
      }
    }
  `;
  const result = await request(graphcmsAPI, query);

  return result.blogsConnection.edges;
};

export const getCategories = async () => {
  const query = gql`
    query MyQuery {
      categories {
        name
        slug
      }
    }
  `;

  const result = await request(graphcmsAPI, query);

  return result.categories;
};

export const getCategoryPost = async (slug) => {
  const query = gql`
    query MyQuery($slug: String!) {
      blogsConnection(where: { categories_some: { slug: $slug } }) {
        edges {
          cursor
          node {
            title
            slug
            featuredimage {
              url
            }
            createdAt
            metaDesciption
            categories {
              name
              slug
            }
          }
        }
      }
    }
  `;

  const result = await request(graphcmsAPI, query, { slug });

  return result.blogsConnection.edges;
};
