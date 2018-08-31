import React from 'react';
import Link from 'gatsby-link';
import withIntl from './withIntl';

const I18nLink = ({ to, children, language, className }) => {
    const toWithLang = language ? `/${language}${to}` : `${to}`;
    return (
        <Link to={toWithLang} className={className}>
            {children}
        </Link>
    );
};

export default withIntl(I18nLink);
