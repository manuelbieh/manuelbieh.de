import React from 'react';
import { Link as GatsbyLink } from 'gatsby';
import { Grid, Column, Header } from '@manuel-bieh/ui/dist/es';
import { Link, languages, withIntl } from '../i18n';
import { withContext } from './PageContext';
import css from './Header.module.css';

type Props = {
    t: (key: string) => string;
    language: string;
    pageContext: {
        originalPath: string;
    };
    [prop: string]: any;
};

const routes: { [route: string]: string } = {
    home: '/',
    profile: '/profile',
    clients: '/clients',
    technologies: '/technologies',
    publications: '/publications',
};

const NavItems: { [lang: string]: any } = {
    de: ['home', 'profile', 'clients', 'technologies', 'publications'],
    en: ['home', 'profile', 'clients', 'technologies', 'publications'],
};

const PageHeader = ({ t, language = 'en', pageContext: { originalPath } }: Props) => (
    <Header className={css.wrapper}>
        <Grid centered>
            <Column xs={12}>
                <hgroup>
                    <h1>
                        <Link to="/">{t('header.title')}</Link>
                    </h1>
                    <h2>
                        {t('header.subhead')}
                        <br />
                        {t('header.subhead2')}
                    </h2>
                </hgroup>
            </Column>
        </Grid>
        <Grid centered style={{ marginBottom: -32 }}>
            <Column xs={12}>
                <nav>
                    <ul>
                        <li style={{ float: 'right' }}>
                            {Object.entries(languages).map(([code, label]) =>
                                code === language ? (
                                    <span key={code}>{label}</span>
                                ) : (
                                    <GatsbyLink
                                        activeClassName={css.active}
                                        key={code}
                                        to={`${code}${originalPath || ''}`}
                                    >
                                        {label}
                                    </GatsbyLink>
                                )
                            )}
                        </li>
                        {NavItems[language].map((item: string) => (
                            <li key={item}>
                                {/* eslint-disable-next-line security/detect-object-injection */}
                                <Link to={routes[item]} activeClassName={css.active}>
                                    {t(`navigation.${item}`)}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>
            </Column>
        </Grid>
    </Header>
);

export default withContext(withIntl()(PageHeader));
