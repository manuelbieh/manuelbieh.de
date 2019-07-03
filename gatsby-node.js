const path = require('path');

// this is copied from gatsby-plugin-remove-trailing-slashes because it causes the build to fail if it is used direcly
const removeTrailingSlash = (_path) => (_path === '/' ? _path : _path.replace(/\/$/, ''));

exports.onCreateWebpackConfig = ({ actions }) => {
    actions.setWebpackConfig({
        resolve: {
            modules: [path.resolve(__dirname, 'src'), 'node_modules'],
        },
    });
};

// workaround because gatsby seems to have issues with using ES module imports
// and mixing of CJS and ES does not work
const languages = {
    de: 'Deutsch',
    en: 'English',
};

exports.onCreatePage = ({ page, actions }) => {
    const { createPage, deletePage } = actions;

    // if (page.path.includes('404')) {
    //     return Promise.resolve();
    // }

    if (page.componentPath.includes('src/pages') === false) {
        return Promise.resolve();
    }

    const oldPage = Object.assign({}, page);
    page.path = removeTrailingSlash(page.path);

    return new Promise((resolve) => {
        const redirect = path.resolve('./src/i18n/Redirect.tsx');
        const redirectPage = {
            ...page,
            component: redirect,
            path: '/',
            context: {
                languages,
                locale: 'en',
                routed: false,
                redirectPage: page.path,
            },
        };
        createPage(redirectPage);

        if (page.path !== oldPage.path) {
            deletePage(oldPage);
        }

        Object.keys(languages).forEach((locale) => {
            const localePage = {
                ...page,
                originalPath: page.path,
                path: `/${locale}${page.path}`,
                context: {
                    languages,
                    locale,
                    routed: true,
                    originalPath: page.path,
                },
            };

            // This breaks in Gatsby 2.9.0:
            // Localize custom error pages
            // if (localePage.path === '/de/404.html') {
            //     localePage.matchPath = '/de/*';
            // } else if (localePage.path === '/en/404.html') {
            //     localePage.matchPath = '/en/*';
            // }

            createPage(localePage);
        });

        resolve();
    });
};
