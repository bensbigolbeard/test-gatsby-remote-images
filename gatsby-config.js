module.exports = {
  siteMetadata: {
    title: `Gatsby Default Starter`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `@gatsbyjs`,
  },
  plugins: [
    {
      resolve: `gatsby-source-github-api`,
      options: {
        token:
          "" /* Add a github token w/ default scopes here (github.com/settings/tokens) */,
        graphQLQuery: `query {
          nodes(ids: ["MDEwOlJlcG9zaXRvcnkxNjA3Mjc0NDE=", "MDEwOlJlcG9zaXRvcnkzNjA0MDg5NA=="]) {
            ... on Repository {
              name
              openGraphImageUrl
            }
          }
        }`,
      },
    },
    {
      resolve: `gatsby-plugin-remote-images`,
      options: {
        nodeType: "GithubData",
        imagePath: "data.nodes[].openGraphImageUrl",
        name: "openGraphImageUrl",
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
  ],
}
