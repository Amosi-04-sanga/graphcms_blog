import { request, gql } from 'graphql-request'

const graphqlAPI = process.env.GRAPHCMS_ENDPOINT

export const getPosts = async () => {
    const query = gql`
    query MyQuery {
    postsConnection {
      edges {
        node {
          excerpt
          featuredImage {
            url
          }
          slug
          title
          updatedAt
          categories {
            name
            slug
          }
          author {
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

