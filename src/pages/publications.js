// @flow
import React from 'react';
import { Grid, Column } from '@manuel-bieh/ui/es';
import { Link, withIntl } from '../i18n';
// import { setContext } from '../components/PageContext';
import PageWrapper from '../components/PageWrapper';
import css from './publications.module.css';

type PropsT = {
    t: (string) => string | string[],
};

const Publications = ({ t, ...context }: PropsT) => (
    <PageWrapper title={t('publications.title')} {...context}>
        <Grid>
            <Column xs={12}>
                <h2>{t('publications.book')}</h2>
            </Column>
        </Grid>
        <Grid className={css.publication}>
            <Column xs={12} md={4} lg={3} xl={2}>
                <img src={require('../../assets/img/publications/mobiles-webdesign.png')} />
            </Column>
            <Column xs={12} md={8} lg={9} xl={10}>
                <h3>Mobiles Webdesign – Konzeption, Gestaltung, Entwicklung</h3>
                <p>
                    Mobiles Internet ist Realität. Jeder, der Websites betreibt, gestaltet,
                    konzipiert oder entwickelt, muss sich mit dem Thema auseinandersetzen. Dabei
                    geht es natürlich zunächst um die Fragen, wann ein mobiler Auftritt sinnvoll
                    ist, welcher Content ausgewählt und wie der Auftritt schließlich konzipiert
                    werden soll.
                </p>
                <p>
                    <strong>Galileo Press, Bonn, ISBN 978-3836211536, 302 Seiten, Juni 2008</strong>
                </p>
            </Column>
        </Grid>
        <Grid>
            <Column xs={12}>
                <h2>{t('publications.magazineArticles')}</h2>
            </Column>
        </Grid>
        <Grid className={css.publication}>
            <Column xs={12} md={4} lg={3} xl={2}>
                <img src={require('../../assets/img/publications/webmaking-1111.jpg')} />
            </Column>
            <Column xs={12} md={8} lg={9} xl={10}>
                <h3>Interview: Webdesign-Trends 2012</h3>
                <p>Webmaking Magazin, Ausgabe 12/11</p>
                <Link to="/publications/webdesign-trends-2012">Weiterlesen</Link>
            </Column>
        </Grid>
        <Grid className={css.publication}>
            <Column xs={12} md={4} lg={3} xl={2}>
                <img src={require('../../assets/img/publications/internet-intern-0211.jpg')} />
            </Column>
            <Column xs={12} md={8} lg={9} xl={10}>
                <h3>Interview: Mobiles Webdesign</h3>
                <p>Internet Intern, Ausgabe 02/11.</p>
                <Link to="/publications/interview-mobiles-webdesign">Weiterlesen</Link>
            </Column>
        </Grid>
        <Grid className={css.publication}>
            <Column xs={12} md={4} lg={3} xl={2}>
                <img src={require('../../assets/img/publications/devguide9.jpg')} />
            </Column>
            <Column xs={12} md={8} lg={9} xl={10}>
                <h3>Creating Mobile Websites [English]</h3>
                <p>Mobile Developer’s Guide To The Galaxy #9</p>
                <Link to="/publications/creating-mobile-websites">Weiterlesen</Link>
            </Column>
        </Grid>
        <Grid className={css.publication}>
            <Column xs={12} md={4} lg={3} xl={2}>
                <img src={require('../../assets/img/publications/webstandads-magazin-11.jpg')} />
            </Column>
            <Column xs={12} md={8} lg={9} xl={10}>
                <h3>Mobile Möglichkeiten – Tools für die Entwicklung mobiler Webseiten</h3>
                <p>Webstandards-Magazin, Ausgabe 11/11.</p>
                <a
                    href={require('../../assets/downloads/034-038_mobile-moeglichkeiten_manuel-bieh.pdf')}
                >
                    Download [687 KB]
                </a>
            </Column>
        </Grid>
    </PageWrapper>
);

export default withIntl()(Publications);
