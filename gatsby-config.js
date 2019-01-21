require('dotenv').config({
  path: '.env',
})

module.exports = {
  siteMetadata: {
    title: `NEWT`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `@gatsbyjs`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-favicon`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Newhales`,
        short_name: `Newhales`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        // Enables "Add to Homescreen" prompt and disables browser UI (including back button)
        // see https://developers.google.com/web/fundamentals/web-app-manifest/#display
        display: `standalone`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: 'gatsby-plugin-sw',
      options: {
        swPath: 'src/utils/my-service-worker.js', // Default to 'src/sw.js'
      },
    },
    'gatsby-plugin-offline',
    {
      resolve: `gatsby-plugin-favicon`,
      options: {
        logo: './src/favicon.png',

        // WebApp Manifest Configuration
        appName: 'Newhales', // Inferred with your package.json
        appDescription: null,
        developerName: null,
        developerURL: null,
        dir: 'auto',
        lang: 'en-US',
        background: '#fff',
        theme_color: '#fff',
        display: 'standalone',
        orientation: 'any',
        start_url: '/?homescreen=1',
        version: '2.0',

        icons: {
          android: true,
          appleIcon: true,
          appleStartup: true,
          coast: false,
          favicons: true,
          firefox: true,
          opengraph: false,
          twitter: false,
          yandex: false,
          windows: false,
        },
      },
    },
    {
      resolve: `gatsby-source-wordpress`,
      options: {
        baseUrl: `www.newhales.cc`,
        // The protocol. This can be http or https.
        protocol: `https`,
        hostingWPCOM: false,
        useACF: false,
        acfOptionPageIds: [],
        auth: {
          htaccess_user: 'your-htaccess-username',
          htaccess_pass: 'your-htaccess-password',
          htaccess_sendImmediately: false,

          wpcom_app_clientSecret: process.env.WORDPRESS_SECRET,
          wpcom_app_clientId: process.env.WORDPRESS_CLIENTID,
          wpcom_user: process.env.WORDPRESS_USERNAME,
          wpcom_pass: process.env.WORDPRESS_PASSWORD,
        },
        verboseOutput: false,
        // Set how many pages are retrieved per API request.
        perPage: 100,
        // Search and Replace Urls across WordPress content.
        searchAndReplaceContentUrls: {
          sourceUrl: 'https://newhales.cc',
          replacementUrl: 'https://newhales.cc',
        },
        // Set how many simultaneous requests are sent at once.
        concurrentRequests: 10,
        includedRoutes: [
          '**/*/*/categories',
          '**/*/*/posts',
          '**/*/*/pages',
          '**/*/*/media',
          '**/*/*/tags',
          '**/*/*/taxonomies',
          '**/*/*/users',
        ],
        // Blacklisted routes using glob patterns
        excludedRoutes: ['**/*/*/posts/1456'],
        // use a custom normalizer which is applied after the built-in ones.
        normalizer: function({ entities }) {
          return entities
        },
      },
    },
  ],
}
