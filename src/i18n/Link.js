import React from 'react';
import Link from 'gatsby-link';
import withIntl from './withIntl';

const I18nLink = ({ to, children, language, className, activeClassName }) => {
    const toWithLang = language ? `/${language}${to}` : `${to}`;
    return (
        <Link to={toWithLang} className={className} activeClassName={activeClassName}>
            {children}
        </Link>
    );
};

export default withIntl(I18nLink);
