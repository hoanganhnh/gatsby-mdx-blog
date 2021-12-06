/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
    /* Your site config here */
    plugins: [
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: 'pages',
                path: `${__dirname}/src/pages`,
            },
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: 'posts',
                path: `${__dirname}/src/posts`,
            },
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: 'images',
                path: `${__dirname}/src/images`,
            },
        },
        `gatsby-plugin-sharp`,
        `gatsby-transformer-sharp`,
        {
            resolve: `gatsby-plugin-mdx`,
            extentions: [`.md`, `.mdx`],
            gatsbyRemarkPlugin: [
                {
                    resolve: `gatsby-remark-images`,
                    options: {
                        maxWith: 1200,
                    },
                },
            ],
        },
        {
            resolve: `gatsby-plugin-google-fonts`,
            options: {
                fonts: [`roboto mono`, `muli\:300,400,400i,700, 700i`],
                display: 'swap',
            },
        },
    ],
};
