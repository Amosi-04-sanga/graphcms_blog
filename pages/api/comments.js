import { GraphQLClient, gql } from "graphql-request";

const graphqlAPI = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT
const graphcmsToken = process.env.GRAPHCMS_TOKEN

export default async function comments(req, res) {

  const graphQLClient = new GraphQLClient(graphqlAPI, {
    Headers: {
      authorization: `Bearer ${graphcmsToken}`
    }
  })

  const query = gql`
      mutation createComment( $name: String!, $email: String!, $comment: String!, $slug: String! ) {
        createComment( data: {name: $name, email: $email, comment: $comment, post: {connect: { slug: $slug}}}) { id }
      }
  `

  try {
    const result = await graphQLClient.request(query, req.body)
    res.status(200).send(result)
  } catch (error) {
    res.status(500).send(error)
    console.log(error)
  }


}


