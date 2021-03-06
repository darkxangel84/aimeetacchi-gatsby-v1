module.exports = {
  siteMetadata: {
    title: `Aimee Tacchi | Front End Developer`,
    description: `I'm Aimee a Front-end developer from Dunstable, Bedfordshire, UK. I create beautiful stylish responsive websites and Javascript apps.`,
    siteName: '> _Aimee Tacchi',
    author: `Aimee Tacchi`,
    siteUrl: `https://aimeesgatsby.netlify.com`,
  },
  plugins: [
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
    `gatsby-transformer-json`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        path: `${__dirname}/src/data`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Aimee Tacchi`,
        short_name: `aimee tacchi`,
        description: `Aimee Tacchis Portfolio website`,
        lang: `en`,
        display: `minimal-ui`,
        icon: `src/images/icon.png`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
      },
    },
    `gatsby-remark-copy-linked-files`,
    `gatsby-transformer-remark`,
    `gatsby-plugin-offline`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/pages`,
        name: 'pages',
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          `gatsby-remark-prismjs`,
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 1200,
            },
          },
        ],
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
    // 'gatsby-plugin-offline',
  ],
}
