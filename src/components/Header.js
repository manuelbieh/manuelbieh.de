// @flow
import React from 'react';
import { withContext } from './PageContext';
import { Link as GatsbyLink } from 'gatsby';
import { Link, languages, withIntl } from '../i18n';

type PropsT = {
    t: (string) => string,
    language: string,
    pageContext: {
        originalPath: string,
    },
    [string]: any,
};

const routes = {
    home: '/',
    profile: '/profile',
    clients: '/clients',
    technologies: '/technologies',
    publications: '/publications',
};

const NavItems = {
    de: ['home', 'profile', 'clients', 'technologies', 'publications'],
    en: ['home', 'profile', 'clients', 'technologies'],
};

console.log('NI', NavItems);

const Header = ({ t, language, pageContext: { originalPath } }: PropsT) =>
    console.log({ originalPath, language }) || (
        <header>
            <div className="grid">
                <div className="row">
                    <div className="col col-xs-12">
                        <hgroup>
                            <h1>
                                <Link to="/">{t('page.title')}</Link>
                            </h1>
                            <h2>
                                {t('page.subhead')}
                                <br />
                                {t('page.subhead2')}
                            </h2>
                        </hgroup>
                    </div>
                </div>
                <div className="row">
                    <div className="col col-xs-12">
                        <nav>
                            <ul>
                                <li style={{ float: 'right' }}>
                                    {Object.entries(languages).map(
                                        ([code, label]) =>
                                            code === language ? (
                                                <span key={code}>{label}</span>
                                            ) : (
                                                <GatsbyLink
                                                    key={code}
                                                    to={`${code}${originalPath || ''}`}
                                                >
                                                    {label}
                                                </GatsbyLink>
                                            )
                                    )}
                                </li>
                                <li>
                                    {NavItems[language].map((item) => (
                                        <Link key={item} to={routes[item]}>
                                            {t(`navigation.${item}`)}
                                        </Link>
                                    ))}
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </header>
    );

export default withContext(withIntl(Header));
