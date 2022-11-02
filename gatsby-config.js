/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */
 require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: `Home Cleaner`,
    description: `Example project for the Gatsby Head API`,
    twitterUsername: `@gatsbyjs`,
    // image: `/gatsby-icon.png`,
    // siteUrl: `https://www.yourdomain.tld`,
  },
  plugins: [
    {
      resolve: `gatsby-source-wordpress`,
      options: {
        url: process.env.GATSBY_WPGRAPHQL_URL || "https://dashboard.home-cleaner.ch/",
      },
    },
    'gatsby-transformer-sharp',
    `gatsby-plugin-sharp`,     
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-plugin-sass',
      options: {
        data: `@import "${__dirname}/Assets/css/main";`,
      }
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`inter\:400,500, 600, 700`,],
        display: "swap",
      }
    }
  ],
}
