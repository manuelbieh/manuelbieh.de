// @flow
import React from 'react';
import { withContext } from './PageContext';
import { Link as GatsbyLink } from 'gatsby';
import { Link, languages, withIntl } from '../i18n';
import { Grid, Row, Column, Header } from '@manuel-bieh/ui/es';
import css from './Header.module.css';

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

const PageHeader = ({ t, language, pageContext: { originalPath } }: PropsT) => (
    <Header className={css.wrapper}>
        <Grid centered>
            <Row>
                <Column xs={12}>
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
                </Column>
            </Row>
            <Row style={{ marginBottom: -32 }}>
                <Column xs={12}>
                    <nav>
                        <ul>
                            <li style={{ float: 'right' }}>
                                {Object.entries(languages).map(
                                    ([code, label]) =>
                                        code === language ? (
                                            <span key={code}>{label}</span>
                                        ) : (
                                            <GatsbyLink
                                                activeClassName="activeeeeeee"
                                                key={code}
                                                to={`${code}${originalPath || ''}`}
                                            >
                                                {label}
                                            </GatsbyLink>
                                        )
                                )}
                            </li>
                            {NavItems[language].map((item) => (
                                <li key={item}>
                                    <Link to={routes[item]}>{t(`navigation.${item}`)}</Link>
                                </li>
                            ))}
                        </ul>
                    </nav>
                </Column>
            </Row>
        </Grid>
    </Header>
);

export default withContext(withIntl(PageHeader));
