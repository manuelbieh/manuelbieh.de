// @flow
import React from 'react';
import { Link, withIntl } from '../i18n';
import { setContext } from '../components/PageContext';
import Layout from '../components/Layout';

type PropsT = {
    t: (string) => string | string[],
};

const Clients = ({ t }: PropsT) => (
    <Layout>
        <div className="publications">
            <h1>{t('publications.title')}</h1>
            <h2>Buch</h2>
            <div className="row publication">
                <div className="col col-xs-12 col-md-4 col-lg-3 col-xl-2">
                    <img src={require('../../assets/img/publications/mobiles-webdesign.png')} />
                </div>
                <div className="col col-xs-12 col-md-8">
                    <h3>Mobiles Webdesign – Konzeption, Gestaltung, Entwicklung</h3>
                    <p>
                        Mobiles Internet ist Realität. Jeder, der Websites betreibt, gestaltet,
                        konzipiert oder entwickelt, muss sich mit dem Thema auseinandersetzen. Dabei
                        geht es natürlich zunächst um die Fragen, wann ein mobiler Auftritt sinnvoll
                        ist, welcher Content ausgewählt und wie der Auftritt schließlich konzipiert
                        werden soll.
                    </p>
                    <p>
                        <strong>
                            Galileo Press, Bonn, ISBN 978-3836211536, 302 Seiten, Juni 2008
                        </strong>
                    </p>
                </div>
            </div>
            <h2>Magazin-Artikel</h2>
            <div className="row publication">
                <div className="col col-xs-12 col-md-4 col-lg-3 col-xl-2">
                    <img src={require('../../assets/img/publications/webmaking-1111.jpg')} />
                </div>
                <div className="col col-xs-12 col-md-8">
                    <h3>Interview: Webdesign-Trends 2012</h3>
                    <p>Webmaking Magazin, Ausgabe 12/11</p>
                    <Link to="/publications/webdesign-trends-2012">Weiterlesen</Link>
                </div>
            </div>
            <div className="row publication">
                <div className="col col-xs-12 col-md-4 col-lg-3 col-xl-2">
                    <img src={require('../../assets/img/publications/internet-intern-0211.jpg')} />
                </div>
                <div className="col col-xs-12 col-md-8">
                    <h3>Interview: Mobiles Webdesign</h3>
                    <p>Internet Intern, Ausgabe 02/11.</p>
                    <Link to="/publications/interview-mobiles-webdesign">Weiterlesen</Link>
                </div>
            </div>
            <div className="row publication">
                <div className="col col-xs-12 col-md-4 col-lg-3 col-xl-2">
                    <img src={require('../../assets/img/publications/devguide9.jpg')} />
                </div>
                <div className="col col-xs-12 col-md-8">
                    <h3>Creating Mobile Websites [English]</h3>
                    <p>Mobile Developer’s Guide To The Galaxy #9</p>
                    <Link to="/publications/creating-mobile-websites">Weiterlesen</Link>
                </div>
            </div>
            <div className="row publication">
                <div className="col col-xs-12 col-md-4 col-lg-3 col-xl-2">
                    <img
                        src={require('../../assets/img/publications/webstandads-magazin-11.jpg')}
                    />
                </div>
                <div className="col col-xs-12 col-md-8">
                    <h3>Mobile Möglichkeiten – Tools für die Entwicklung mobiler Webseiten</h3>
                    <p>Webstandards-Magazin, Ausgabe 11/11.</p>
                    <a href="/assets/downloads/034-038_mobile-moeglichkeiten_manuel-bieh.2e1e6b.pdf">
                        Download [687 KB]
                    </a>
                </div>
            </div>
        </div>
    </Layout>
);

export default setContext(withIntl(Clients));
