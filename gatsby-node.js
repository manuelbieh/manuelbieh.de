const path = require('path');

// const { languages } = require('./src/i18n');

// workaround because gatsby seems to have issues with using ES module imports
// and mixing oc CJS and ES does not work
const languages = {
    de: 'Deutsch',
    en: 'English',
};

exports.onCreatePage = ({ page, actions }) => {
    const { createPage, deletePage } = actions;

    if (page.path.includes('404')) {
        return Promise.resolve();
    }

    return new Promise((resolve) => {
        const redirect = path.resolve('./src/i18n/Redirect.js');
        const redirectPage = {
            ...page,
            component: redirect,
            path: '/',
            context: {
                languages,
                locale: '',
                routed: false,
                redirectPage: page.path,
            },
        };
        createPage(redirectPage);
        deletePage(page);

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
            createPage(localePage);
        });

        resolve();
    });
};
