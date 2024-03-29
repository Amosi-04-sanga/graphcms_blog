
import axios from 'axios'
import { request, gql } from 'graphql-request'

const graphqlAPI = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT

export const getPosts = async () => {
  const query = gql`
    query MyQuery {
        postsConnection {
          edges {
            node {
              title
              slug
              featuredImage {
                url
              }
              excerpt
              createdAt
              author {
                bio
                name
                photo {
                  url
                }
              }
            }
          }
        }
      }
    `

  const result = await request(graphqlAPI, query)
  return result.postsConnection.edges

}

export const getPostDetails = async (slug) => {
  const query = gql`
    query getPostDetails($slug: String!) {
        post(where: {slug: $slug}) {
        
              title
              slug
              featuredImage {
                url
              }
              excerpt
              createdAt
              author {
                bio
                name
                photo {
                  url
                }
              }
              content {
                raw
              }
          }
      }
    `

  const result = await request(graphqlAPI, query, { slug })
  return result.post

}


export const getRecentPosts = async () => {
  const query = gql`
       query RecentPosts() {
           posts(
               orderBy: createdAt_ASC
               last: 3
           ) {
               title
               featuredImage {
                   url
               }
               createdAt
               slug
           }
       }
    `

  const result = await request(graphqlAPI, query)
  return result.posts

}


export const getSimilarPosts = async (categories, slug) => {
  const query = gql`
    query GetPostDetails($slug: String!, $categories: [String!]) {
      posts(
        where: {slug_not: $slug, AND: {categories_some: {slug_in: $categories}}}
        last: 2
      ) {
        title
        featuredImage {
          url
        }
        createdAt
        slug
      }
    }
  `;
  const result = await request(graphqlAPI, query, { slug, categories });

  return result.posts;
};


export const getCategories = async () => {
  const query = gql`
     query Categories {
       categories {
         name
         slug
       }
     }
  `

  const result = await request(graphqlAPI, query)
  return result.categories

}


export const authorInfo = async () => {
  const query = gql`
  query Author {
    postsConnection {
      edges {
        node {
          author {
            bio
            name
            photo {
              url
            }
          }
        }
      }
    }
  }
  `

  const result = await request(graphqlAPI, query)
  return result.postsConnection.edges
}


export const submitComment = async (obj) => {
  const result = await axios.post("/api/comments", obj)
  return result;
};


export const getComments = async (slug) => {
  const query = gql`
    query GetComments($slug: String!) {
      comments(where: {post: {slug: $slug}}){
        name
        createdAt
        comment
      }
    }
  `;

  const result = await request(graphqlAPI, query, { slug });

  return result.comments;
};

export const getCategoryPost = async (slug) => {
  const query = gql`
    query GetCategoryPost($slug: String!) {
      postsConnection(where: {categories_some: {slug: $slug}}) {
        edges {
          cursor
          node {
            author {
              bio
              name
              id
              photo {
                url
              }
            }
            createdAt
            slug
            title
            excerpt
            featuredImage {
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

  const result = await request(graphqlAPI, query, { slug });

  return result.postsConnection.edges;
};



/*

export const getCategoryPost = async (slug) => {
  const query = gql`
    query GetCategoryPost($slug: String!) {
      postsConnection(where: {categories_some: {slug: $slug}}) {
        edges {
          cursor
          node {
            author {
              bio
              name
              id
              photo {
                url
              }
            }
            createdAt
            slug
            title
            excerpt
            featuredImage {
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
  `

  const result = await request(graphqlAPI, query, { slug });

  return result.postsConnection.edges;
}


*/