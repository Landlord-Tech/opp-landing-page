module.exports = {
  siteMetadata: {
    title: `Gatsby Default Starter`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `UltraLabs`,
  },
  plugins: [
    `gatsby-plugin-netlify-cms`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `markdown-pages`,
        path: `${__dirname}/blog`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `header`,
        path: `${__dirname}/header`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `homepage`,
        path: `${__dirname}/homepage`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `notFound`,
        path: `${__dirname}/notFound`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `landlords`,
        path: `${__dirname}/landlords`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `tenants`,
        path: `${__dirname}/tenants`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pricing`,
        path: `${__dirname}/pricing`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `contact`,
        path: `${__dirname}/contact`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `privacyPolicy`,
        path: `${__dirname}/privacyPolicy`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `termsAndConditions`,
        path: `${__dirname}/termsAndConditions`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `withPetCalculator`,
        path: `${__dirname}/withPetCalculator`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `withNoPetCalculator`,
        path: `${__dirname}/withNoPetCalculator`,
      },
    },
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#FCC425`,
        theme_color: `#FCC425`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-gatsby-cloud`,
    {
      resolve: "gatsby-plugin-anchor-links",
      options: {
        offset: -66,
        duration: 400
      }
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
