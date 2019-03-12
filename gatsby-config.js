module.exports = {
    siteMetadata: {
        title: 'ManuelBieh.de',
    },
    plugins: [
        // 'gatsby-plugin-remove-trailing-slashes',
        'gatsby-plugin-react-helmet',
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: 'manuel-bieh',
                short_name: 'Manuel Bieh',
                start_url: '/',
                background_color: '#174C5B',
                theme_color: '#174C5B',
                display: 'minimal-ui',
                icon: 'assets/img/favicon.png', // This path is relative to the root of the site.
            },
        },
        'gatsby-plugin-offline',
        'gatsby-plugin-postcss',
        'gatsby-plugin-nprogress',
    ],
};
