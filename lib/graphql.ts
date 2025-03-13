// import { ApolloClient, InMemoryCache, gql } from "@apollo/client";

// const client = new ApolloClient({
//   uri: "https://wordpress/graphql",
//   cache: new InMemoryCache(),
// });

// export const getPostsGraphQL = async () => {
//   const { data } = await client.query({
//     query: gql`
//       query {
//         posts {
//           nodes {
//             id
//             title
//             slug
//             acfFields {
//               customTitle
//               customDescription
//             }
//           }
//         }
//       }
//     `,
//   });
//   return data.posts.nodes;
// };
