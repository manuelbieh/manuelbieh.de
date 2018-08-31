import React, { PureComponent } from 'react';
import { withPrefix } from 'gatsby-link';
import browserLang from 'browser-lang';
import { languages } from './index';

class Redirect extends PureComponent {
    constructor(props) {
        super(props);

        const langKeys = Object.keys(languages);
        const { pathname } = props.location;

        // Skip build, Browsers only
        if (typeof window !== 'undefined') {
            const detected =
                window.localStorage.getItem('language') ||
                browserLang({
                    languages: langKeys,
                    fallback: 'en',
                });

            const newPath = withPrefix(`/${detected}${pathname}`);
            window.localStorage.setItem('language', detected);

            if (newPath !== location.pathname) {
                window.location.replace(newPath);
            }
        }
    }

    render() {
        return <div />;
    }
}

export default Redirect;
