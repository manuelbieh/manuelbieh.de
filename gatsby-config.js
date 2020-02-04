module.exports = {
    siteMetadata: {
        title: 'ManuelBieh.de',
    },
    plugins: [
        // 'gatsby-plugin-remove-trailing-slashes',
        'gatsby-plugin-typescript',
        'gatsby-plugin-react-helmet',
        'gatsby-plugin-typescript',
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: 'manuel-bieh',
                short_name: 'Manuel Bieh',
                start_url: '/de',
                background_color: '#174C5B',
                theme_color: '#174C5B',
                display: 'minimal-ui',
                include_favicon: true,
                icon: 'assets/img/favicon.png', // This path is relative to the root of the site.
            },
        },
        'gatsby-plugin-offline',
        'gatsby-plugin-postcss',
        'gatsby-plugin-nprogress',
    ],
};
